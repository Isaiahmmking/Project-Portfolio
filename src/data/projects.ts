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
    title: "Advanced Control Systems Design",
    description: "Designed and implemented a robust control system for autonomous drone navigation with obstacle avoidance capabilities.",
    tags: ["Control Systems", "MATLAB", "Simulink", "C++", "Embedded Systems"],
    status: "Completed",
    image: "🎓",
    category: "curricular",
    featured: true
  },
  {
    title: "Structural Analysis Software",
    description: "Developed finite element analysis software for structural engineering applications with real-time visualization.",
    tags: ["FEA", "Python", "NumPy", "Structural Engineering", "Visualization"],
    status: "Completed",
    image: "🏗️",
    category: "curricular"
  },
  {
    title: "Digital Signal Processing Lab",
    description: "Implemented various DSP algorithms for audio processing and noise cancellation in communication systems.",
    tags: ["Signal Processing", "MATLAB", "DSP", "Audio Processing", "Algorithms"],
    status: "Completed",
    image: "📊",
    category: "curricular"
  },
  {
    title: "Microprocessor System Design",
    description: "Designed and built a complete microprocessor-based system for industrial automation and monitoring.",
    tags: ["Microprocessors", "Assembly", "C", "Hardware Design", "Automation"],
    status: "Completed",
    image: "💾",
    category: "curricular"
  },
  {
    title: "Thermodynamics Simulation Tool",
    description: "Created a comprehensive simulation environment for thermodynamic cycles and energy system analysis.",
    tags: ["Thermodynamics", "Python", "Simulation", "Energy Systems", "Modeling"],
    status: "Completed",
    image: "🌡️",
    category: "curricular"
  }
];

export const extracurricularProjects: Project[] = [
  {
    title: "Smart IoT Control System",
    description: "Developed an intelligent IoT system for automated building management with real-time monitoring and energy optimization.",
    tags: ["IoT", "Python", "Arduino", "React", "MongoDB"],
    status: "Completed",
    image: "🏢",
    category: "extracurricular",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/iot-system",
    featured: true
  },
  {
    title: "Machine Learning Pipeline",
    description: "Built a scalable ML pipeline for predictive maintenance in manufacturing environments, reducing downtime by 40%.",
    tags: ["Machine Learning", "Python", "TensorFlow", "Docker", "AWS"],
    status: "Completed",
    image: "🤖",
    category: "extracurricular",
    githubUrl: "https://github.com/username/ml-pipeline",
    featured: true
  },
  {
    title: "Robotics Automation Framework",
    description: "Designed and implemented a comprehensive robotics framework for automated warehouse operations.",
    tags: ["Robotics", "C++", "ROS", "Computer Vision", "Linux"],
    status: "In Progress",
    image: "🦾",
    category: "extracurricular",
    githubUrl: "https://github.com/username/robotics-framework"
  },
  {
    title: "Renewable Energy Optimizer",
    description: "Created an optimization algorithm for solar panel positioning and energy storage management systems.",
    tags: ["Optimization", "MATLAB", "Simulink", "Energy Systems", "Algorithms"],
    status: "Completed",
    image: "⚡",
    category: "extracurricular",
    featured: true
  },
  {
    title: "Autonomous Vehicle Simulation",
    description: "Built a comprehensive simulation environment for testing autonomous vehicle algorithms and safety systems.",
    tags: ["Simulation", "Python", "OpenCV", "AI", "Autonomous Systems"],
    status: "In Progress",
    image: "🚗",
    category: "extracurricular",
    demoUrl: "https://example.com/av-sim"
  },
  {
    title: "Open Source Hardware Platform",
    description: "Developed an open-source hardware platform for rapid prototyping of embedded systems and IoT devices.",
    tags: ["Hardware Design", "PCB Design", "Arduino", "Open Source", "Prototyping"],
    status: "Completed",
    image: "🔧",
    category: "extracurricular",
    githubUrl: "https://github.com/username/hardware-platform"
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