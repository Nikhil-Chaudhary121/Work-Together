// Define the interface for the project data with totalMembers
interface Project {
  no: string;
  name: string;
  pic: string;
  owner: string;
  totalTasks: string;
  totalMembers: number; // Add totalMembers field
}

interface taskInterface {
  no: string;
  name: string;
  type: "Backend" | "Frontend" | "Other";
  status: "todo" | "progress" | "approval" | "done";
}

// Create an array of projects using the updated interface
const groupData: Project[] = [
  {
    no: "001",
    name: "Alpha Project",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
    owner: "John Doe",
    totalTasks: "12",
    totalMembers: 5, // Add totalMembers value
  },
  {
    no: "002",
    name: "Beta Build",
    pic: "https://randomuser.me/api/portraits/women/2.jpg",
    owner: "Jane Smith",
    totalTasks: "9",
    totalMembers: 3, // Add totalMembers value
  },
  {
    no: "003",
    name: "Gamma Development",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    owner: "Mike Ross",
    totalTasks: "15",
    totalMembers: 8, // Add totalMembers value
  },
  {
    no: "004",
    name: "Delta Design",
    pic: "https://randomuser.me/api/portraits/women/4.jpg",
    owner: "Rachel Zane",
    totalTasks: "8",
    totalMembers: 4, // Add totalMembers value
  },
  {
    no: "005",
    name: "Epsilon Engineering",
    pic: "https://randomuser.me/api/portraits/men/5.jpg",
    owner: "Harvey Specter",
    totalTasks: "20",
    totalMembers: 7, // Add totalMembers value
  },
  {
    no: "006",
    name: "Zeta Operations",
    pic: "https://randomuser.me/api/portraits/women/6.jpg",
    owner: "Donna Paulsen",
    totalTasks: "14",
    totalMembers: 6, // Add totalMembers value
  },
  {
    no: "007",
    name: "Theta Analysis",
    pic: "https://randomuser.me/api/portraits/men/7.jpg",
    owner: "Louis Litt",
    totalTasks: "11",
    totalMembers: 5, // Add totalMembers value
  },
];

const taskData: taskInterface[] = [
  {
    no: "001",
    name: "User Authentication System",
    type: "Backend",
    status: "todo",
  },
  {
    no: "002",
    name: "Landing Page Redesign",
    type: "Frontend",
    status: "progress",
  },
  {
    no: "003",
    name: "Database Optimization",
    type: "Backend",
    status: "approval",
  },
  {
    no: "004",
    name: "API Integration",
    type: "Other",
    status: "done",
  },
  {
    no: "005",
    name: "User Dashboard UI",
    type: "Frontend",
    status: "todo",
  },
  {
    no: "006",
    name: "Payment Gateway Integration",
    type: "Backend",
    status: "progress",
  },
  {
    no: "007",
    name: "Analytics Setup",
    type: "Other",
    status: "approval",
  },
  {
    no: "008",
    name: "Notification System",
    type: "Backend",
    status: "done",
  },
  {
    no: "009",
    name: "Responsive Design Implementation",
    type: "Frontend",
    status: "todo",
  },
  {
    no: "010",
    name: "SEO Optimization",
    type: "Other",
    status: "progress",
  },
];

export { groupData, taskData };
