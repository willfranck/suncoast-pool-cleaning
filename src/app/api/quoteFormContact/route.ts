import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const formData = await req.json()
    const {subject, email, comments} = formData
    
    console.log(formData)
  
    return NextResponse.json(formData, { status: 200 })
  
  } else {
      return NextResponse.json({ error: 'Method not allowed'}, { status: 405 })
  }
}
