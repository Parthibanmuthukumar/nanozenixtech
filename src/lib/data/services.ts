import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Cpu, CpuIcon, Network, Shield, Binary } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  createdAt: number;
}

const mockServices: Service[] = [
  {
    id: "services-1",
    title: "AI & Machine Learning",
    description: "Cutting edge predictive models, deep learning architectures, and intelligent automation systems.",
    icon: "Cpu",
    category: "AI",
    createdAt: Date.now()
  },
  {
    id: "services-2",
    title: "VLSI Design & Verification",
    description: "End-to-end SoC design, physical implementation, and rigorous verification methodologies.",
    icon: "Binary",
    category: "VLSI",
    createdAt: Date.now()
  },
  {
    id: "services-3",
    title: "IoT Edge Solutions",
    description: "Smart connected device pipelines combining edge computing power with cloud AI scalability.",
    icon: "Network",
    category: "IoT",
    createdAt: Date.now()
  },
  {
    id: "services-4",
    title: "Hardware Security",
    description: "Cryptographic accelerators, secure boot implementations, and hardware trojan detection mechanisms.",
    icon: "Shield",
    category: "VLSI",
    createdAt: Date.now()
  }
];

export async function getServices(): Promise<Service[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "services"));
    const services: Service[] = [];
    querySnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() } as Service);
    });
    
    // Return mock data if Firestore configuration is invalid and fails, or if empty 
    if (services.length > 0) {
      return services;
    }
    return mockServices;
  } catch (error) {
    console.warn("Failed to fetch from Firebase, using mock data.", error);
    return mockServices;
  }
}
