"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-black px-4 py-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-12">
        <Link
          href="/"
          className={`text-lg font-bold transition-colors ${pathname === "/" ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          Event Video
        </Link>
        <Link
          href="/ugc"
          className={`text-lg font-bold transition-colors ${pathname === "/ugc" ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          UGC Street Interviews
        </Link>
      </div>
    </header>
  )
}
