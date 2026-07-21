import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="max-w-[1440px] mx-auto px-margin-desktop mb-32">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-xl font-bold text-on-surface tracking-tight">Common Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-surface-container/50 backdrop-blur-sm rounded-[32px] p-10 border border-white/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
            <span className={`inline-block ${faq.categoryColorClass} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6`}>
              {faq.category}
            </span>
            <h3 className="font-headline-lg text-title-md font-bold text-on-surface mb-4 tracking-tight">
              {faq.question}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
