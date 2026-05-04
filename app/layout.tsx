import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Runway Simulator — Model Burn Rate & Hiring Scenarios',
  description: 'Interactive calculator that models cash runway under different hiring scenarios, revenue projections, and expense changes with Monte Carlo simulations. Built for startup founders and CFOs.',
  keywords: 'startup runway, burn rate calculator, hiring plan, Monte Carlo simulation, cash flow modeling, startup finance',
  openGraph: {
    title: 'Startup Runway Simulator',
    description: 'Model startup burn rate scenarios with hiring plans and Monte Carlo simulations.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="941bd8a2-ac2a-4b0a-a7b7-0c3c06624f72"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
