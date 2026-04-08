import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { MapPin, Briefcase } from "lucide-react";
import { Career } from "@/lib/types";

interface CareerCardProps {
  career: Career;
}

const categoryColors: Record<string, string> = {
  AI: "bg-brand-accent text-white",
  VLSI: "bg-brand-accent text-white",
  Software: "bg-brand-accent text-white",
  IoT: "bg-brand-accent text-white"
};

export default function CareerCard({ career }: CareerCardProps) {
  return (
    <Card className="flex flex-col h-full justify-between group bg-brand-muted/20 hover:border hover:border-brand-accent">
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-brand-dark">{career.role}</h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[career.category]}`}>
            {career.category}
          </span>
        </div>
        
        <p className="text-brand-body text-sm mb-6 leading-relaxed opacity-80">
          {career.description}
        </p>

        <div className="flex flex-col gap-2 text-sm text-brand-body opacity-70">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-accent" />
            <span>{career.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-brand-accent" />
            <span>{career.type}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4">
        <Link 
          href="/contact" 
          className="text-brand-accent text-sm font-medium hover:text-brand-dark transition-colors inline-flex items-center gap-1 relative group/link"
        >
          <span className="relative">
            View Details →
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover/link:w-full"></span>
          </span>
        </Link>
      </div>
    </Card>
  );
}
