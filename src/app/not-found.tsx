import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-ivory text-basalt pt-24">
      <span className="text-terracotta text-xs tracking-[0.3em] uppercase mb-4 block">
        404 &middot; Page Not Found
      </span>
      <h1 className="font-serif text-5xl md:text-7xl mb-6">
        Beyond the Trail.
      </h1>
      <p className="text-lg md:text-xl font-light text-basalt/75 max-w-md mb-12">
        The page you are looking for has moved or does not exist in this territory.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-basalt text-white text-xs tracking-widest uppercase hover:bg-terracotta transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Homepage
      </Link>
    </div>
  );
}
