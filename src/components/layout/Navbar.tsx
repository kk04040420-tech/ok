"use client";

// 내비게이션 바 컴포넌트 — 스크롤 시 글래스 배경, 다크/라이트 토글, 모바일 햄버거
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#09090f]/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.06] shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <a
          href="#about"
          className="font-bold text-base tracking-tight text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          루스<span className="text-violet-500">.</span>
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* 모바일 */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="메뉴 열기"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0d0d18]/95 backdrop-blur-xl border-t border-zinc-200 dark:border-white/[0.06]">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
