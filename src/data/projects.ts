import opAmpAudioFilter from '@/assets/images/op-amp-circuit-generated.png';

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
    tags: ["Linux", "C++"],
    status: "Completed",
    image: "💾",
    category: "curricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    title: "Fall Detection Device",
    description: "Built an Arduino Nano-based C++ alert system with a custom 3D-printed shell to notify healthcare workers of patient falls, improving safety and response time.",
    tags: ["ArduinoIDE", "C++", "Teamwork", "Solidworks","Embedded Systems"],
    status: "Completed",
    image: "🚨",
    category: "curricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    title: "Op-Amp Audio Filter Design",
    description: "Designed, simulated, and built an analog filter system to improve microphone audio quality by suppressing 120 Hz noise and preventing aliasing in ADC conversion. Implemented a notch filter and multi-stage low-pass filter using MATLAB and SPICE for modeling, followed by breadboard construction and lab testing to validate performance.",
    tags: ["LTSpice", "Circuitry", "Function Generator", "Oscilloscope", "Breadboard"],
    status: "Completed",
    image: opAmpAudioFilter,
    category: "curricular",
    demoUrl: "/src/assets/pdfs/A9-1.pdf (1).pdf",
    githubUrl: "",
    featured: true
  }
];

export const extracurricularProjects: Project[] = [
  {
    title: "Rodent repellent device",
    description: "Created a Raspberry Pi 5-powered pest deterrent using YOLOv8 image processing to detect rodents and trigger automated defense mechanisms",
    tags: ["RaspberryPi5", "C++", "JavaScript"],
    status: "In Progress",
    image: "🐭",
    category: "extracurricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    title: "Stepper Motor Organ",
    description: "Contributed to an open source project by optimizing JavaScript code, and enhanced musical output and circuit functionality.",
    tags: ["ArduinoIDE", "C++", "JavaScript", "Solidworks"],
    status: "Completed",
    image: "🎵",
    category: "extracurricular",
    demoUrl: "/src/assets/videos/stepper-motor-organ.mp4", // Update this path when you upload the video
    githubUrl: "",
    featured: true
  },
  {
    title: "Custom smart watch",
    description: "Designed and developed an ATmega328P-based OLED smartwatch with custom display, time tracking, and power regulation systems.",
    tags: ["Microprocessor", "C++", "Embedded Systems", "Solidworks"],
    status: "In Progress",
    image: "⌚",
    category: "extracurricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    title: "Custom snare drum throwoff and butt plate",
    description: "Engineered a mechanical drum hardware system with a three-stage tightening mechanism for enhanced performance and playability.",
    tags: ["Solidworks"],
    status: "In Progress",
    image: "🥁",
    category: "extracurricular",
    demoUrl: "",
    githubUrl: "",
    featured: true
  }
];

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