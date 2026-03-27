import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
