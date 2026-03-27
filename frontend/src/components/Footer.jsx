import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-vitto-steel/70 bg-vitto-navy/80">
      <div className="vitto-container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Vitto</h3>
          <p className="mt-3 text-sm text-slate-300">
            AI-native digital credit infrastructure for Banks, NBFCs, and MFIs.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/platform" className="hover:text-vitto-red">AI-First Platform</Link></li>
            <li><Link to="/automation" className="hover:text-vitto-red">Lifecycle Automation</Link></li>
            <li><Link to="/api-infra" className="hover:text-vitto-red">API Infrastructure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-vitto-red">About Vitto</Link></li>
            <li><Link to="/contact" className="hover:text-vitto-red">Contact</Link></li>
            <li><Link to="/article" className="hover:text-vitto-red">Thought Leadership</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white">Newsletter</h4>
          <form className="mt-3 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Work email"
              className="rounded-lg border border-vitto-steel bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-vitto-red focus:outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-vitto-red px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-vitto-red">LinkedIn</a>
            <a href="#" className="hover:text-vitto-red">X</a>
            <a href="#" className="hover:text-vitto-red">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-vitto-steel/70 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Vitto Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
