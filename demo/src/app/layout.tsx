import ThemeButton from "@/app/theme-button"
import ThemeProvider from "@/app/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import React, { FunctionComponent, ReactNode } from "react"
import { BsHeartFill } from "react-icons/bs"
import { IoLogoGithub } from "react-icons/io"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Nepali DatePicker (ReactJs)",
  description: "Nepali Datepicker (Bikram Sambat Calendar) as a ReactJS component",
}

type Props = {
  children: ReactNode
}

const RootLayout: FunctionComponent<Props> = ({ children }) => (
  <html lang="en" className={`${inter.className} dark`}>
  <body className="font-sans text-base antialiased font-normal text-left leading-default
                    dark:bg-slate-900 bg-gray-50 text-slate-600 dark:text-white/80"
        suppressHydrationWarning={true}>
  <ThemeProvider>
    <div className="container mx-auto px-6 sm:p-0">
      <div className="fixed top-4 right-4">
        <ThemeButton className="" />
      </div>

      <header className="py-12 text-center">
        <Image src="/nepali-calendar.png"
               alt="nepali-datepicker"
               width="72"
               height="72"
               className="block mx-auto mb-6" />
        <h2 className="text-3xl font-semibold mb-2">Nepali DatePicker</h2>
        <p className="text-lg font-normal tracking-wide">
          Nepali Datepicker (Bikram Sambat Calendar) as a ReactJS component
        </p>
      </header>

      {children}

      <footer className="my-12 pt-12 text-gray-500 text-center text-sm">
        <p>
          &copy; 2019-{new Date().getFullYear()}{" | "}
                 Made with <BsHeartFill className="w-4 h-4 inline text-red-500" /> by{" "}
          <a href="https://puncoz.com"
             className="hover:underline hover:text-blue-500 transition-all duration-200 ease-out">
            Puncoz Nepal
          </a>
        </p>

        <ul className="mt-4">
          <li>
            <a href="https://github.com/puncoz-official/nepali-datepicker-reactjs"
               className="hover:underline hover:text-blue-500 transition-all duration-200 ease-out
                        inline-flex justify-center gap-2 items-center">
              <IoLogoGithub className="w-4 h-4" />
              Github
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </ThemeProvider>
  </body>
  </html>
)

export default RootLayout
