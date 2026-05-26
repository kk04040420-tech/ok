"use client";

// 내비게이션 바 컴포넌트 — 스크롤 시 배경 변화, 다크/라이트 토글, 모바일 햄버거 메뉴
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm shadow-violet-100 dark:shadow-slate-900"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-bold text-lg text-violet-500 dark:text-violet-300"
        >
          루스 ✦
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* 모바일 버튼들 */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="메뉴 열기"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-violet-100 dark:border-slate-800">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-300 transition-colors font-medium"
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
