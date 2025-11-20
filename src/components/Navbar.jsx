import { Menu, ShoppingBag, User } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-200 to-indigo-300" />
          <span className="text-sm font-semibold tracking-wide text-slate-800">LUMISKIN</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#benefits" className="hover:text-slate-800 transition-colors">Benefits</a>
          <a href="#science" className="hover:text-slate-800 transition-colors">Science</a>
          <a href="#ritual" className="hover:text-slate-800 transition-colors">Ritual</a>
          <a href="#shop" className="hover:text-slate-800 transition-colors">Shop</a>
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Account" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <User className="h-5 w-5 text-slate-700" />
          </button>
          <button aria-label="Cart" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <ShoppingBag className="h-5 w-5 text-slate-700" />
          </button>
          <button aria-label="Menu" className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
