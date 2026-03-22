export function ContactForm() {
  return (
    <form className="space-y-4 rounded-3xl border border-[#efe9dc] bg-white p-6 shadow-[0_16px_42px_-28px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Phone
          <input
            name="phone"
            autoComplete="tel"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            placeholder="(321) 339-6686"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            placeholder="you@email.com"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Service Needed
          <select
            name="service"
            className="w-full rounded-xl border border-[#ddd6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Standard Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Organization Services</option>
            <option>Residential Cleaning</option>
            <option>Light Commercial Cleaning</option>
          </select>
        </label>
      </div>

      <label className="space-y-1 text-sm font-medium text-charcoal">
        Preferred Date
        <input
          type="date"
          name="date"
          className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </label>

      <label className="space-y-1 text-sm font-medium text-charcoal">
        Message
        <textarea
          name="message"
          rows={4}
          className="w-full resize-y rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="Tell us about your space and what you need."
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal/90"
      >
        Request a Custom Quote
      </button>
      <p className="text-xs text-muted-gray">
        Pricing is confirmed after discussing your home and service needs. A
        3-hour minimum service rate of $150 applies.
      </p>
    </form>
  );
}
