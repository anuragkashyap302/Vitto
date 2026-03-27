const modules = [
  {
    title: '1) Data-Based Assessment',
    details:
      'Ingests bureau, bank statement, GST, device, and repayment telemetry into a unified borrower state. Feature store tracks drift by vintage, product, and geography. Missing-value treatment and outlier normalization are versioned for audit reproducibility.',
  },
  {
    title: '2) ML Model',
    details:
      'Model stack uses gradient boosting for tabular credit scoring, sequence models for repayment trajectory prediction, and anomaly classifiers for identity and transaction irregularities. Champion-challenger governance supports controlled rollout with backtesting against delinquency cohorts.',
  },
  {
    title: '3) Rule Engine & Decisioning',
    details:
      'Real-time policy engine executes deterministic checks alongside model outputs. Credit teams can define product-level caps, KYC gating, and exposure thresholds through rule templates. Every decision payload records rule hit-path and confidence bands for internal policy committees.',
  },
  {
    title: '4) Fraud Intelligence',
    details:
      'Correlates device graphs, synthetic identity markers, velocity checks, and mule-account signatures. The engine scores fraud risk pre-disbursal and post-disbursal, with adaptive policies when attack vectors shift. Investigations include entity-link evidence graphs.',
  },
  {
    title: '5) Collection Intelligence',
    details:
      'Predicts cure probability, expected recovery value, and channel effectiveness per account. Dynamic strategy assignment allocates digital, call-center, and field pathways. Queue prioritization shifts automatically as borrower intent signals evolve.',
  },
  {
    title: '6) Agentic AI Layer',
    details:
      'Coordinates bounded AI agents across underwriting support, borrower support, and field execution. Agent actions are constrained by policy, logged with rationale, and gated via human-in-loop thresholds to prevent unsafe autonomous decisions.',
  },
];

function PlatformPage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">AI-First Platform</h1>
      <p className="mt-4 max-w-4xl text-slate-300">
        Vitto is designed as an operational credit runtime, not a dashboard layer. Data ingestion, model scoring, policy evaluation, and action orchestration run as one execution graph to support high-volume retail and MSME lending.
      </p>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        {modules.map((module) => (
          <article key={module.title} className="card">
            <h2 className="text-xl font-semibold text-white">{module.title}</h2>
            <p className="mt-3 text-slate-300">{module.details}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 card">
        <h2 className="text-2xl font-semibold text-white">Agentic AI in regulated lending: architecture and controls</h2>
        <h3 className="mt-6 text-lg font-semibold text-vitto-red">RAG pipeline for institution-grade responses</h3>
        <p className="mt-2 text-slate-300">
          Retrieval-Augmented Generation in Vitto uses a controlled document index containing product policies, sanction memos, repayment playbooks,
          regulator circular mappings, and internal SOPs. Query flow: intent classification → policy scope check → vector retrieval + structured query
          fetch → context ranking by recency and authority → response generation with citation objects. No direct answer is returned without source grounding.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-vitto-red">Why public LLM-only approaches are insufficient in BFSI</h3>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-300">
          <li>Data residency and PII controls require strict isolation of borrower records and decision artifacts.</li>
          <li>Unbounded generation introduces unverifiable statements, unacceptable in credit approvals or collections communication.</li>
          <li>Model updates outside enterprise control can alter behavior without prior validation against lending policy.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold text-vitto-red">Why SLMs matter for BFSI operations</h3>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-300">
          <li><span className="font-semibold text-slate-100">Explainability:</span> Smaller models allow tighter prompt envelopes and clearer attribution from retrieved policy context to output text.</li>
          <li><span className="font-semibold text-slate-100">Compliance:</span> On-prem or VPC deployment reduces uncontrolled data egress and simplifies regulator-facing architecture documentation.</li>
          <li><span className="font-semibold text-slate-100">Reduced hallucination:</span> Domain-constrained vocabularies and retrieval-bound decoding improve factual precision for underwriting and collections workflows.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold text-vitto-red">Three production agents</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-vitto-steel p-4">
            <h4 className="font-semibold text-white">Borrower Agent</h4>
            <p className="mt-2 text-sm text-slate-300">Handles repayment reminders, settlement options, and document clarifications with account-context and policy-safe messaging.</p>
          </div>
          <div className="rounded-xl border border-vitto-steel p-4">
            <h4 className="font-semibold text-white">Field Agent</h4>
            <p className="mt-2 text-sm text-slate-300">Prioritizes visits by expected recovery value, travel density, and vulnerability flags while logging structured disposition outcomes.</p>
          </div>
          <div className="rounded-xl border border-vitto-steel p-4">
            <h4 className="font-semibold text-white">Underwriter Agent</h4>
            <p className="mt-2 text-sm text-slate-300">Summarizes bureau deltas, cashflow exceptions, and policy deviations to assist final credit calls, never replacing approval authority.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlatformPage;
