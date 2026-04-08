import { Card } from "@/components/ui/Card";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Cpu;

  return (
    <Card className="flex flex-col h-full justify-between group border-l-4 border-l-brand-accent">
      <div>
        <div className="mb-6 p-4 rounded-full bg-brand-pink w-fit text-brand-accent">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-semibold text-brand-dark mb-3">{service.title}</h3>
        <p className="text-brand-body text-sm leading-relaxed opacity-80">
          {service.description}
        </p>
      </div>
      <div className="mt-6 pt-4">
        <Link 
          href="/projects" 
          className="text-brand-accent text-sm font-medium hover:text-brand-dark transition-colors inline-flex items-center gap-1 relative group"
        >
          <span className="relative">
            View related work →
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
    </Card>
  );
}
