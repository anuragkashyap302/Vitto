function APIInfrastructurePage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">API Infrastructure</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Event-driven integration layer</h2>
          <p className="mt-3 text-slate-300">
            REST + webhook architecture enables bi-directional sync with LOS, LMS, bureau, payment gateways, CRM, and dialer systems.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Security and governance</h2>
          <p className="mt-3 text-slate-300">
            JWT auth, scoped API keys, request signing, and immutable request logs for traceability in regulated environments.
          </p>
        </article>
      </div>
    </div>
  );
}

export default APIInfrastructurePage;
