import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="vitto-container py-24 text-center">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <p className="mt-4 text-slate-300">Requested page was not found.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-vitto-red px-5 py-2 text-white hover:bg-red-700">
        Return Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
