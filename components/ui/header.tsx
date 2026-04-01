"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-slate-800/40 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-slate-700/50 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm py-[5px] text-gray-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 py-[5px] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:from-indigo-500 hover:to-indigo-400"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
