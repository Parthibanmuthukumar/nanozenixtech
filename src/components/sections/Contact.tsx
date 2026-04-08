import { Button } from "../ui/Button";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Get In Touch</h2>
        <p className="text-brand-body opacity-70">Have a project in mind? Let's talk.</p>
      </div>
      
      <form className="max-w-xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full px-4 py-3 rounded-xl border-[1.5px] border-brand-muted bg-brand-beige focus:outline-none focus:bg-white focus:border-brand-accent transition-all duration-200"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 rounded-xl border-[1.5px] border-brand-muted bg-brand-beige focus:outline-none focus:bg-white focus:border-brand-accent transition-all duration-200"
          />
        </div>
        <textarea 
          placeholder="Message" 
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-[1.5px] border-brand-muted bg-brand-beige focus:outline-none focus:bg-white focus:border-brand-accent transition-all duration-200 resize-none"
        ></textarea>
        <Button 
          size="lg" 
          className="w-full bg-brand-accent hover:bg-brand-dark text-white rounded-full transition-all duration-200 hover:scale-105"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}
