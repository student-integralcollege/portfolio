import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center">

        <h2
          id="contact-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-white"
        >
          Contact Me
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
          Have a project, opportunity, or idea in mind? Send a message and I will get back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-950/5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className={fieldClassName}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className={fieldClassName}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className={`${fieldClassName} min-h-36 resize-y py-3 leading-7`}
            placeholder="Tell me a little about what you want to build..."
          />
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-4">
          <button
            type="submit"
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-bold text-white shadow-lg shadow-zinc-950/15 transition-all duration-300 hover:-translate-y-0.5  active:scale-[0.98] focus:outline-none disabled:opacity-50 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-900"
          >
            Send Message
          </button>

          {submitted && (
            <p
              className="rounded-full bg-green-50 px-4 py-2 text-center text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-200 dark:bg-green-950/30 dark:text-green-300 dark:ring-green-900/70"
              role="status"
              aria-live="polite"
            >
              Message sent successfully.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

const fieldClassName ='min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-base text-zinc-950 transition-colors placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-4 focus:ring-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-white/10';
