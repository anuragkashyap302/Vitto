import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/platform', label: 'AI-First Platform' },
  { to: '/automation', label: 'Lifecycle Automation' },
  { to: '/collections', label: 'Collections Intelligence' },
  { to: '/agentic-ai', label: 'Agentic AI' },
  { to: '/api-infra', label: 'API Infrastructure' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-vitto-steel/70 bg-vitto-navy/90 backdrop-blur">
      <div className="vitto-container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-white">
          Vitto
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-vitto-red' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-lg border border-vitto-steel px-4 py-2 text-sm text-slate-200 hover:border-vitto-red/70 hover:text-white md:inline-block"
          >
            Request Demo
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-vitto-red px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Self Sign-Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
