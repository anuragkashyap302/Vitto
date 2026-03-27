import { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', workEmail: '', institution: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Contact / Request Demo</h1>
      <p className="mt-4 text-slate-300">Share your portfolio and system landscape. We will tailor a deployment blueprint for your team.</p>
      <form onSubmit={onSubmit} className="mt-8 max-w-2xl space-y-4 rounded-2xl border border-vitto-steel bg-slate-900/70 p-6">
        <input name="name" placeholder="Full name" value={form.name} onChange={onChange} required className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
        <input name="workEmail" type="email" placeholder="Work email" value={form.workEmail} onChange={onChange} required className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
        <input name="institution" placeholder="Institution" value={form.institution} onChange={onChange} required className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
        <textarea name="message" placeholder="Current lending stack and challenge" value={form.message} onChange={onChange} rows={4} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
        <button className="rounded-lg bg-vitto-red px-6 py-3 font-medium text-white hover:bg-red-700" type="submit">Request Demo</button>
        {submitted && <p className="text-sm text-emerald-400">Thanks. Our team will reach out with an implementation walkthrough.</p>}
      </form>
    </div>
  );
}

export default ContactPage;
