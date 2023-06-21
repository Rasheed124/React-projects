
import '../styles/globals.css'


import { Antonio } from 'next/font/google'

import { Libre_Baskerville } from 'next/font/google'


import localFont from 'next/font/local'
 

// Font files can be colocated inside of `pages`
const sohneBold = localFont({ 
  src: '../fonts/sohne/test-soehne-buch.woff2' ,
  variable: '--font-sohneBold',



})

const migraLight = localFont({ 
  src: '../fonts/FontsFree-Net-Migra-Extralight.ttf',
  fallback: ['system-ui', 'migraLight'],
  display : 'fallback',
  variable: '--font-migraLight',



 })

const antonio = Antonio( { 
  subsets: ['latin'],
  fallback: ['system-ui', 'antonio'],
  display : 'fallback',
  variable: '--font-antonio',

 })


const libre_baskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: "400",
  fallback: ['system-ui', 'libre_baskerville'],
  variable: '--font-libre_baskerville',
 })

export const metadata = {
  title: 'Durodola Abdulhad',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} ${sohneBold.variable} ${migraLight.variable} ${libre_baskerville.variable} bg-transparent `}>
        {/* Header */}
        <main className="bg-transparent">
          <div className="max-w-8xl mx-auto ">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
