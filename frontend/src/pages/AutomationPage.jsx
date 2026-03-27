const layers = [
  {
    name: 'Customer Acquisition',
    description: 'Controls lead capture, pre-qualification, and onboarding funnel quality before credit cost is incurred.',
    modules: ['Lead ingestion APIs', 'KYC orchestration', 'Source quality scoring', 'Drop-off analytics'],
  },
  {
    name: 'Underwriting & LOS',
    description: 'Executes data pulls, risk scoring, policy checks, and sanction workflows with complete decision traceability.',
    modules: ['Bureau + bank statement parsers', 'Risk model scoring', 'Policy decision engine', 'Sanction memo workflow', 'Deviation approvals'],
  },
  {
    name: 'Collections',
    description: 'Segments delinquent portfolios and optimizes treatment path by cure probability and recovery economics.',
    modules: ['DPD segmentation', 'Digital campaign orchestration', 'Call-center queue optimization', 'Field allocation engine', 'Promise-to-pay tracking'],
  },
  {
    name: 'LMS',
    description: 'Manages post-disbursal account lifecycle from schedule generation to NPA tagging and settlements.',
    modules: ['Repayment schedule engine', 'Penalty/interest recalculation', 'Restructuring workflows', 'NPA lifecycle controls'],
  },
  {
    name: 'CRM & Communications',
    description: 'Maintains borrower interaction history and ensures compliant, context-aware communication across channels.',
    modules: ['Unified borrower timeline', 'Template governance', 'Consent tracking', 'Escalation workflows'],
  },
];

function AutomationPage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Lending Lifecycle / Full Stack Automation</h1>
      <p className="mt-4 max-w-4xl text-slate-300">
        Vitto structures lending operations into five executable layers so institutions can automate decisions without losing policy control.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {layers.map((layer) => (
          <section key={layer.name} className="card">
            <h2 className="text-2xl font-semibold text-white">{layer.name}</h2>
            <p className="mt-3 text-slate-300">{layer.description}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-200">
              {layer.modules.map((module) => (
                <li key={module} className="rounded-lg border border-vitto-steel px-3 py-2">
                  {module}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default AutomationPage;
