import { Inter } from 'next/font/google'

import './globals.css'
// import '@mantine/core/styles.css';
// import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bullsshire traders',
  description: 'Whats better than a good investment?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


   <body className={inter.className}>{children}</body>

   </html>
  )
}
