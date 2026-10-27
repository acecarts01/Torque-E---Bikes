// Applies a refresh patch (written to the blog-post rule) on top of an existing generated post.
// meta patch: any of title, seoTitle, excerpt, focus, secondary, tags, related, updated, imageAlt, links { to, from }.
// body patch: { replace: true, ...fullBody } or { hook, intro, prepend: [sections], append: [sections], rename: { oldH: newH }, drop: [h], faqAppend: [{q,a}] }.
export function applyMeta(meta, patch) {
  if (!patch) return rewriteLinks(meta)
  const { imageAlt, links, ...rest } = patch
  const out = { ...meta, ...rest }
  if (imageAlt) out.image = { ...meta.image, alt: imageAlt }
  if (links) out.links = { to: links.to || meta.links.to, from: links.from || meta.links.from }
  return rewriteLinks(out)
}

export function applyBody(body, p) {
  return rewriteLinks(applyBodyRaw(body, p))
}

function applyBodyRaw(body, p) {
  if (!p) return body
  if (p.replace) { const { replace, ...full } = p; return { ...body, ...full } }
  let sections = body.sections.filter(s => !(p.drop || []).includes(s.h)).map(s => (p.rename && p.rename[s.h] ? { ...s, h: p.rename[s.h] } : s))
  sections = [...(p.prepend || []), ...sections, ...(p.append || [])]
  return { ...body, hook: p.hook || body.hook, intro: p.intro || body.intro, sections, faq: p.faq || [...body.faq, ...(p.faqAppend || [])], keywords: p.keywords || body.keywords }
}

// Posts that were merged into another post: removed from the blog index and sitemap, redirected in next.config.ts.
export const MERGED_POSTS = { 'talaria-electric-dirt-bikes': 'talaria-x3-mx3-and-mx4' }
export const isMerged = slug => Object.prototype.hasOwnProperty.call(MERGED_POSTS, slug)
const REWRITE = Object.entries(MERGED_POSTS).map(([from, to]) => [`/blog/${from}/`, `/blog/${to}/`])
// Points links to a merged post at the post it was merged into.
export function rewriteLinks(value) {
  let s = JSON.stringify(value)
  for (const [from, to] of REWRITE) s = s.split(from).join(to)
  return JSON.parse(s)
}
