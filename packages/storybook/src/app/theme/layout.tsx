'use client'

import { useAtomValue } from 'jotai'
import Header, { themeAtom } from '../TestComponent/Common/Header'

export default function ThemeTestRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeAtomValue = useAtomValue(themeAtom)

  return (
    <html lang="en">
      <body>
        <Header />
        <main data-theme={themeAtomValue}>{children}</main>
      </body>
    </html>
  )
}
