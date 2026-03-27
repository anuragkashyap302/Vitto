import { Link } from 'react-router-dom';

const problems = [
  {
    title: 'Fragmented systems',
    desc: 'Originations, collections, and servicing running on disconnected tools create blind spots and latency in credit decisions.',
  },
  {
    title: 'Non-AI-native vendors',
    desc: 'Retrofit AI layers on legacy systems cannot consume live repayment behavior or continuously recalibrate risk.',
  },
  {
    title: 'Reactive collections',
    desc: 'Most teams intervene only after DPD slippage, leading to avoidable roll-rate leakage and field inefficiency.',
  },
  {
    title: 'Static rule engines',
    desc: 'Hard-coded threshold policies fail under volatile borrower cashflows and changing fraud signatures.',
  },
];

const modules = [
  'Data-Based Assessment',
  'ML Model',
  'Rule Engine & Decisioning',
  'Fraud Intelligence',
  'Collection Intelligence',
  'Agentic AI Layer',
];

const impacts = [
  { metric: '45%', label: 'Faster underwriting decisions' },
  { metric: '28%', label: 'Reduction in early delinquency risk' },
  { metric: '31%', label: 'Higher collections recovery rates' },
  { metric: '120+', label: 'Integrations across BFSI systems' },
];

function HomePage() {
  return (
    <div>
      <section className="vitto-container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-vitto-red">AI-Native Credit Infrastructure</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            AI-First Infrastructure for Modern Financial Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Vitto is engineered for regulated lending institutions. It is not retrofitted AI, not a stitched marketplace of fragmented vendors,
            and not a generic data tool. Every module is built for BFSI workflows across acquisition, underwriting, servicing, and recovery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-vitto-red px-6 py-3 font-medium text-white hover:bg-red-700">
              Book Demo
            </Link>
            <Link
              to="/platform"
              className="rounded-lg border border-vitto-steel px-6 py-3 font-medium text-slate-200 hover:border-vitto-red hover:text-white"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      <section className="vitto-container py-12">
        <h2 className="text-3xl font-semibold text-white">Why conventional stacks fail in lending</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => (
            <article key={problem.title} className="card">
              <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{problem.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vitto-container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card">
            <h2 className="text-2xl font-semibold text-white">One decision fabric across the lending lifecycle</h2>
            <p className="mt-4 text-slate-300">
              Vitto unifies LOS, LMS, collections, fraud, and CRM events into a single operating layer. Decisions are traceable, model outputs are
              versioned, and policy controls are auditable for internal risk and regulator review.
            </p>
            <p className="mt-3 text-slate-300">
              Instead of separate products for each function, credit teams get one architecture where rule evaluation, model scoring, and action
              orchestration happen in milliseconds.
            </p>
          </article>

          <article className="card">
            <h3 className="text-xl font-semibold text-white">Core platform characteristics</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-vitto-red">Domain-trained models:</span> Trained on repayment trajectories, bureau deltas,
                alternate cashflow signals, and fraud fingerprints relevant to Indian credit contexts.
              </li>
              <li>
                <span className="font-semibold text-vitto-red">Unified architecture:</span> Event-driven APIs connect onboarding, underwriting,
                servicing, and collections without manual re-keying.
              </li>
              <li>
                <span className="font-semibold text-vitto-red">Explainability:</span> Score contributions, policy hits, and rejection reasons are
                surfaced for underwriters and compliance teams.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="vitto-container py-12">
        <h2 className="text-3xl font-semibold text-white">AI modules powering execution</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module} className="card flex min-h-32 items-center">
              <h3 className="text-lg font-semibold text-white">{module}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="vitto-container py-12">
        <h2 className="text-3xl font-semibold text-white">Business impact</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <article key={impact.label} className="card text-center">
              <p className="text-3xl font-bold text-vitto-red">{impact.metric}</p>
              <p className="mt-2 text-sm text-slate-300">{impact.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vitto-container py-12">
        <h2 className="text-3xl font-semibold text-white">Trusted by digital lending teams</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Bank Partner', 'NBFC Partner', 'MFI Partner'].map((logo) => (
            <div key={logo} className="card flex h-20 items-center justify-center text-slate-400">
              {logo} Logo
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="card">
            <p className="text-slate-200">
              "With Vitto, we moved from batch underwriting to live decisioning. The policy trace and model explainability cut internal audit
              cycles significantly."
            </p>
            <p className="mt-4 text-sm text-slate-400">Chief Risk Officer, Tier-2 NBFC</p>
          </article>
          <article className="card">
            <p className="text-slate-200">
              "Collections segmentation and agent recommendations improved our day-15 and day-30 recoveries without increasing field force costs."
            </p>
            <p className="mt-4 text-sm text-slate-400">Head of Collections, Retail Lending Institution</p>
          </article>
        </div>
      </section>

      <section className="vitto-container py-16">
        <div className="rounded-2xl border border-vitto-red/50 bg-gradient-to-r from-vitto-navy to-slate-900 p-8 shadow-glow">
          <h2 className="text-3xl font-semibold text-white">Replace fragmented lending operations with one AI-first execution layer</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Bring underwriting, servicing, and collections into a single platform with clear decision trails and measurable portfolio outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-lg bg-vitto-red px-6 py-3 font-medium text-white hover:bg-red-700">
              Book Demo
            </Link>
            <Link
              to="/signup"
              className="rounded-lg border border-vitto-steel px-6 py-3 font-medium text-slate-100 hover:border-vitto-red"
            >
              Start Self Sign-Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
