import { useMemo, useState } from 'react';

const initialForm = {
  email: '',
  phone: '',
  otp: '',
  institution_name: '',
  institution_type: '',
  city: '',
  loan_book_size: '',
};

function SignupPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [token, setToken] = useState('');
  const [leadId, setLeadId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiBase = useMemo(() => import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000', []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateContact = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email.';
    if (!/^\d{10}$/.test(form.phone)) return 'Enter a valid 10-digit phone number.';
    return '';
  };

  const requestOtp = async () => {
    const contactError = validateContact();
    if (contactError) {
      setError(contactError);
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${apiBase}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, phone: form.phone }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to send OTP');
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!/^\d{6}$/.test(form.otp)) {
      setError('OTP must be 6 digits.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${apiBase}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, phone: form.phone, otp: form.otp }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'OTP verification failed');
      setToken(data.token);
      setStep(3);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async () => {
    if (!form.institution_name || !form.institution_type || !form.city || !form.loan_book_size) {
      setError('Fill all organisation fields.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone,
          institution_name: form.institution_name,
          institution_type: form.institution_type,
          city: form.city,
          loan_book_size: Number(form.loan_book_size),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to submit organisation details');
      setLeadId(data.data.id);
      setStep(4);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vitto-container py-16">
      <h1 className="text-4xl font-bold text-white">Self Sign-Up</h1>
      <p className="mt-3 text-slate-300">Complete onboarding in three steps: verify contact, share organization profile, and confirm activation.</p>

      <div className="mt-8 max-w-2xl rounded-2xl border border-vitto-steel bg-slate-900/70 p-6">
        <div className="mb-6 flex gap-3 text-xs font-medium">
          {['Contact', 'OTP', 'Organization', 'Done'].map((item, index) => (
            <span
              key={item}
              className={`rounded-full px-3 py-1 ${step >= index + 1 ? 'bg-vitto-red text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              {item}
            </span>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <input name="email" type="email" placeholder="Work email" value={form.email} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <input name="phone" placeholder="10-digit phone" value={form.phone} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <button onClick={requestOtp} disabled={loading} className="rounded-lg bg-vitto-red px-5 py-2 font-medium hover:bg-red-700 disabled:opacity-60">
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input name="otp" placeholder="Enter 6-digit OTP" value={form.otp} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <button onClick={verifyOtp} disabled={loading} className="rounded-lg bg-vitto-red px-5 py-2 font-medium hover:bg-red-700 disabled:opacity-60">
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <input name="institution_name" placeholder="Institution name" value={form.institution_name} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <select name="institution_type" value={form.institution_type} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2">
              <option value="">Select institution type</option>
              <option value="Bank">Bank</option>
              <option value="NBFC">NBFC</option>
              <option value="MFI">MFI</option>
              <option value="Fintech Lender">Fintech Lender</option>
            </select>
            <input name="city" placeholder="City" value={form.city} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <input name="loan_book_size" type="number" placeholder="Loan book size (INR)" value={form.loan_book_size} onChange={onChange} className="w-full rounded-lg border border-vitto-steel bg-slate-950 px-3 py-2" />
            <button onClick={submitLead} disabled={loading} className="rounded-lg bg-vitto-red px-5 py-2 font-medium hover:bg-red-700 disabled:opacity-60">
              {loading ? 'Submitting...' : 'Complete Sign-Up'}
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-2 text-emerald-300">
            <p className="text-lg font-semibold">Sign-up completed successfully.</p>
            <p>Lead ID: {leadId}</p>
            <p>Our implementation team will contact you for sandbox activation.</p>
          </div>
        )}

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
