import { SimpleTemplate } from '../Simple';
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image generation
export async function GET(request: NextRequest) {

  const params = request.nextUrl.searchParams

  const title: string = params.get("title") || "No title";
  const website: string = params.get("website") || "No website"

  const t = { title, website }

  return new ImageResponse(
    (
      <SimpleTemplate t={t} />
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    },
  )
}