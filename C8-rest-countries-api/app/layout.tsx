import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Antonio Silva | Rest Countries',
  description: 'Rest Countries API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>

      <body>{children}</body>
    </html>
  )
}
