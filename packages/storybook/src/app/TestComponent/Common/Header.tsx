'use client'

import { atom, useAtom } from 'jotai'

type Theme = 'Emerald' | 'Orange' | 'Green' | 'Gold'
export const themeAtom = atom<Theme>('Green')

export default function Header() {
  const [, setTheme] = useAtom(themeAtom)

  const handleSetTheme = (theme: Theme) => {
    setTheme(theme)
  }
  return (
    <>
      <header className="flex gap-[10px]">
        <button
          type="button"
          className="border p-[10px]"
          onClick={() => {
            handleSetTheme('Emerald')
          }}
        >
          Emerald
        </button>
        <button
          type="button"
          className="border p-[10px]"
          onClick={() => {
            handleSetTheme('Orange')
          }}
        >
          Orange
        </button>
        <button
          type="button"
          className="border p-[10px]"
          onClick={() => {
            handleSetTheme('Green')
          }}
        >
          Green
        </button>
        <button
          type="button"
          className="border p-[10px]"
          onClick={() => {
            handleSetTheme('Gold')
          }}
        >
          Gold
        </button>
      </header>
    </>
  )
}
