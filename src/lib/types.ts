export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
}

export interface Career {
  id: string;
  role: string;
  category: string;
  location: string;
  type: string;
  description: string;
}

export interface AppData {
  services: Service[];
  projects: Project[];
  careers: Career[];
}
