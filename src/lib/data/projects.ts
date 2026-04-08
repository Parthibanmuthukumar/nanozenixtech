import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  createdAt: number;
}

const mockProjects: Project[] = [
  {
    id: "proj-1",
    title: "NeuroCore Processor",
    description: "Next-gen neuromorphic processor for ultra-low power edge AI inference applications.",
    tags: ["VLSI", "AI", "Edge Computing"],
    image: "https://picsum.photos/seed/neuro/800/600",
    category: "VLSI",
    featured: true,
    createdAt: Date.now() - 10000
  },
  {
    id: "proj-2",
    title: "SmartCity Sentinel",
    description: "IoT sensing fabric spanning urban environments for real-time traffic and environmental monitoring.",
    tags: ["IoT", "Data Flow", "Smart City"],
    image: "https://picsum.photos/seed/city/800/600",
    category: "IoT",
    featured: true,
    createdAt: Date.now() - 20000
  },
  {
    id: "proj-3",
    title: "AutoVision Platform",
    description: "Computer vision platform for autonomous mobility with sub-millisecond object detection.",
    tags: ["AI", "Computer Vision"],
    image: "https://picsum.photos/seed/vision/800/600",
    category: "AI",
    featured: false,
    createdAt: Date.now() - 30000
  },
  {
    id: "proj-4",
    title: "QuantumGate ASIC",
    description: "Specialized ASIC design accelerating post-quantum cryptographic algorithms.",
    tags: ["VLSI", "Crypto", "Hardware"],
    image: "https://picsum.photos/seed/quantum/800/600",
    category: "VLSI",
    featured: false,
    createdAt: Date.now() - 40000
  }
];

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() } as Project);
    });
    
    if (projects.length > 0) {
      return projects;
    }
    return mockProjects;
  } 
  catch (error) {
    console.warn("Failed to fetch projects from Firebase, using mock data.", error);
    return mockProjects;
  }
}