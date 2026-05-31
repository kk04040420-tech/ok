// 어드민 레이아웃 — 포트폴리오 Navbar 없이 심플하게
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-violet-50 dark:bg-slate-950">
      <header className="bg-white dark:bg-slate-900 border-b border-violet-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
          >
            <ArrowLeft size={15} /> 포트폴리오로
          </Link>
          <span className="text-gray-200 dark:text-slate-700">|</span>
          <span className="text-sm font-medium text-violet-500 dark:text-violet-300">Admin</span>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
