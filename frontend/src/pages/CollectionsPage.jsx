function CollectionsPage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Collections Intelligence</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Risk-Weighted Segmentation</h2>
          <p className="mt-3 text-slate-300">Classifies accounts by cure likelihood, repayment capacity, and legal sensitivity to avoid one-size-fits-all treatments.</p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Treatment Optimization</h2>
          <p className="mt-3 text-slate-300">Selects channel, cadence, and script sequence using historical campaign performance and current borrower interaction signals.</p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Recovery Control Tower</h2>
          <p className="mt-3 text-slate-300">Tracks queue productivity, promise-to-pay conversions, and roll-rate movement across branches and field units.</p>
        </article>
      </div>
    </div>
  );
}

export default CollectionsPage;
