import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

// import {FaGithub,FaLinkedin} from "react-icons/fa"
// import {HiOutlineMail} from "react-icons/hi"
// import {BsFillPersonLinesFill} from "react-icons/bs"

// import Footer from "@/components/footer/Footer"
// import { ThemeProvider } from "@/context/ThemeContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <div className='container' >
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </div>
        {/* </ThemeProvider> */}
        </body>
    </html>
  )
}
