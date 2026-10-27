// Applies a refresh patch (written to the blog-post rule) on top of an existing generated post.
// meta patch: any of title, seoTitle, excerpt, focus, secondary, tags, related, updated, imageAlt, links { to, from }.
// body patch: { replace: true, ...fullBody } or { hook, intro, prepend: [sections], append: [sections], rename: { oldH: newH }, drop: [h] }.
export function applyMeta(meta, patch) {
  if (!patch) return meta
  const { imageAlt, links, ...rest } = patch
  const out = { ...meta, ...rest }
  if (imageAlt) out.image = { ...meta.image, alt: imageAlt }
  if (links) out.links = { to: links.to || meta.links.to, from: links.from || meta.links.from }
  return out
}

export function applyBody(body, p) {
  if (!p) return body
  if (p.replace) { const { replace, ...full } = p; return { ...body, ...full } }
  let sections = body.sections.filter(s => !(p.drop || []).includes(s.h)).map(s => (p.rename && p.rename[s.h] ? { ...s, h: p.rename[s.h] } : s))
  sections = [...(p.prepend || []), ...sections, ...(p.append || [])]
  return { ...body, hook: p.hook || body.hook, intro: p.intro || body.intro, sections, faq: p.faq || body.faq, keywords: p.keywords || body.keywords }
}
