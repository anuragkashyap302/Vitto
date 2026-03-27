import article from '../../docs/thought-leadership.md?raw';

function ArticlePage() {
  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Thought Leadership</h1>
      <article className="prose prose-invert mt-8 max-w-4xl whitespace-pre-line rounded-2xl border border-vitto-steel bg-slate-900/70 p-8 text-slate-200">
        {article}
      </article>
    </div>
  );
}

export default ArticlePage;
