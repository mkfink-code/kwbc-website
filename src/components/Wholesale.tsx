import Link from 'next/link';

export default function Wholesale() {
  return (
    <section className="bg-brand-dark-azure py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-6">Interested in Wholesale?</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Partner with Key West Blue Crab to bring the finest seafood to your business. 
          We offer wholesale opportunities for restaurants, markets, and distributors.
        </p>
        <Link 
          href="/wholesale" 
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-dark-azure rounded-md hover:bg-opacity-90 transition-colors duration-200 font-semibold text-base sm:text-lg"
        >
          Wholesale Inquiry
        </Link>
      </div>
    </section>
  );
}
