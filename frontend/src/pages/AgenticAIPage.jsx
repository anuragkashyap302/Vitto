function AgenticAIPage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Agentic AI Layer</h1>
      <p className="mt-4 max-w-4xl text-slate-300">
        Vitto deploys domain-constrained agents with policy guardrails, bounded actions, and auditable logs. Agents can recommend, draft, or prioritize,
        while sensitive decisions remain with authorized human roles.
      </p>

      <div className="mt-8 card">
        <h2 className="text-2xl font-semibold text-white">Execution controls</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
          <li>Role-based action scopes for each agent.</li>
          <li>Mandatory policy retrieval before response generation.</li>
          <li>High-risk actions routed to human approval queues.</li>
          <li>Full audit logs of prompts, context documents, and outputs.</li>
        </ul>
      </div>
    </div>
  );
}

export default AgenticAIPage;
