import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const formData = await req.json()
    const { subject, email, comments } = formData

    // const resend = new Resend('re_2zw3PSbS_4QjgxfQwGFT1hMuJrYPeugSw')

    // resend.emails.send({
    //   from: `${email}`,
    //   to: 'willfranckcodes@gmail.com',
    //   subject: `${subject}`,
    //   html: `${comments}`,
    // })

    return NextResponse.json('Message sent: ' + formData, { status: 200 })

  } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
