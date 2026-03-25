"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-black px-4 py-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 md:gap-12 flex-wrap">
        <Link
          href="/"
          className={`text-lg font-bold transition-colors ${pathname === "/" ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          Street UGC
        </Link>
        <Link
          href="/events"
          className={`text-lg font-bold transition-colors ${pathname === "/events" ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          Event Documentation
        </Link>
        <Link
          href="/blog"
          className={`text-lg font-bold transition-colors ${pathname.startsWith("/blog") ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          Insights
        </Link>
        <Link
          href="/hooks"
          className={`text-lg font-bold transition-colors ${pathname === "/hooks" ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
        >
          Hooks
        </Link>
        <Link
          href="/audit"
          className={`text-lg font-bold transition-colors uppercase border-b-2 ${pathname === "/audit" ? "text-[#FFE500] border-[#FFE500]" : "text-zinc-400 border-transparent hover:text-white hover:border-white"}`}
        >
          Free Audit
        </Link>
      </div>
    </header>
  )
}
