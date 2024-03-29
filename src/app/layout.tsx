'use client'
import './globals.css'
import '../../public/styles/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import {ThemeProvider, createTheme} from '@mui/material'

import {Provider} from 'react-redux'
import store from '@/redux/store'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const theme = createTheme({
  palette: {
    primary: {main: '#000'},
    secondary: {main: '#000'},
    // success: {main: '#000'},
  }
})

export default function RootLayout({children,}: {children: ReactNode}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <body>
            <Header/>
            {children}
          </body>
        </Provider>
      </ThemeProvider>
    </html>
  )
}
