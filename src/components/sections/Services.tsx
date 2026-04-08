import ServiceCard from "@/components/ui/ServiceCard";
import { getServices } from "@/lib/data/services";

export default async function Services() {
  const services = await getServices();

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-brand-beige/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Our Expertise</h2>
          <p className="text-lg text-brand-body opacity-70 max-w-2xl mx-auto">
            Delivering state-of-the-art solutions across critical tech domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
