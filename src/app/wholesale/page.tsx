'use client';

import { useForm } from '@formspree/react';

export default function WholesalePage() {
  const [state, handleSubmit] = useForm("xovnwgvr");

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-serif text-brand-dark-azure mb-4">Thank You!</h1>
            <p className="text-neutral-800 mb-8">
              We've received your wholesale inquiry and will get back to you shortly.
            </p>
            <a 
              href="/"
              className="inline-block px-6 py-3 bg-brand-dark-azure text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-serif text-brand-dark-azure mb-2 text-center">Wholesale Inquiry</h1>
          <p className="text-neutral-800 text-center mb-8">
            Interested in wholesale opportunities? Fill out the form below and we'll get back to you shortly.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-neutral-800">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  required
                  className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-neutral-800">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  required
                  className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-neutral-800">
                Business Type
              </label>
              <select
                name="businessType"
                id="businessType"
                required
                className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
              >
                <option value="">Select a business type</option>
                <option value="restaurant">Restaurant</option>
                <option value="seafoodMarket">Seafood Market</option>
                <option value="distributor">Distributor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
                Additional Information
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-brand-dark-azure focus:ring-brand-dark-azure"
                placeholder="Tell us about your business and what you're looking for..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-3 bg-brand-dark-azure text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-75"
              >
                {state.submitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}