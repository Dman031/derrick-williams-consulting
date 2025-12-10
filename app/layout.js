import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Derrick Williams | Enterprise Consultant',
  description: 'Enterprise Consultant specializing in Oracle, ServiceNow, Palantir, and Salesforce implementations',
  openGraph: {
    title: 'Derrick Williams | Enterprise Consultant',
    description: 'Enterprise Consultant specializing in Oracle, ServiceNow, Palantir, and Salesforce implementations',
    type: 'website',
    locale: 'en_US',
    siteName: 'Derrick Williams Consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derrick Williams | Enterprise Consultant',
    description: 'Enterprise Consultant specializing in Oracle, ServiceNow, Palantir, and Salesforce implementations',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-primary text-white antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}

