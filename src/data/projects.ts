export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Completed" | "In Progress" | "Planned";
  image: string;
  category: "curricular" | "extracurricular";
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const curricularProjects: Project[] = [
  {
    title: "Risc-V Processor Pipeline Simulator",
    description: "Designed and developed a C++ cycle accurate simulator for a single issue five-stage RISC-V pipeline Implemented load–use hazard detection in the ID stage with one-cycle stalls and bubble insertion",
    tags: ["Bash", "Linux", "C++"],
    status: "Completed",
    image: "💾",
    category: "curricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  }
];

export const extracurricularProjects: Project[] = [];

export const allProjects = [...curricularProjects, ...extracurricularProjects];

// Helper functions for filtering projects
export const getFeaturedProjects = () => allProjects.filter(project => project.featured);
export const getProjectsByCategory = (category: "curricular" | "extracurricular") => 
  allProjects.filter(project => project.category === category);
export const getProjectsByStatus = (status: Project["status"]) => 
  allProjects.filter(project => project.status === status);
export const getProjectsByTag = (tag: string) => 
  allProjects.filter(project => project.tags.includes(tag));
export const getAllTags = () => ["All", ...new Set(allProjects.flatMap(project => project.tags))].sort();