function AboutPage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">About / Why Vitto</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Why we built Vitto</h2>
          <p className="mt-3 text-slate-300">
            Lending institutions should not have to choose between growth and control. Vitto was built to make high-speed decisions possible with
            auditable logic, structured evidence, and policy fidelity.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Who we serve</h2>
          <p className="mt-3 text-slate-300">
            Banks, NBFCs, and MFIs running secured and unsecured portfolios, including consumer durable, personal loans, MSME, and microfinance books.
          </p>
        </article>
      </div>
    </div>
  );
}

export default AboutPage;
