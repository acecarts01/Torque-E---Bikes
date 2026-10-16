import { handleEnquiry } from '@/src/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  return handleEnquiry(req, 'wholesale')
}
