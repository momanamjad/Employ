const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCounts: { newTask: 1, active: 0, completed: 1, failed: 1 }, // Added
    tasks: [
      {
        statusCode: 1, // active
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete UI Design",
        description: "Design the login and dashboard UI",
        category: "Design",
        date: "2024-01-15"
      },
      {
        statusCode: 3, // completed
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue",
        category: "Development",
        date: "2024-01-10"
      },
      {
        statusCode: 4, // failed
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate user authentication API",
        category: "Backend",
        date: "2024-01-05"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ahmed",
    email: "employee2@example.com",
    password: "123",
    taskCounts: { newTask: 2, active: 1, completed: 1, failed: 1 }, // Added
    tasks: [
      {
        statusCode: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Product Cards",
        description: "Build reusable product card components",
        category: "Frontend",
        date: "2024-01-18"
      },
      {
        statusCode: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress images for better performance",
        category: "Optimization",
        date: "2024-01-12"
      },
      {
        statusCode: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement dark mode using Tailwind",
        category: "UI/UX",
        date: "2024-01-20"
      },
      {
        statusCode: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment Gateway",
        description: "Setup Stripe payment gateway",
        category: "Integration",
        date: "2024-01-08"
      }
    ]
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskCounts: { newTask: 1, active: 0, completed: 1, failed: 0 }, // Added
    tasks: [
      {
        statusCode: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Write unit tests for auth module",
        category: "Testing",
        date: "2024-01-22"
      },
      {
        statusCode: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Refactor",
        description: "Refactor old components",
        category: "Maintenance",
        date: "2024-01-09"
      },
      {
        statusCode: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Form Validation",
        description: "Add validation to forms",
        category: "Frontend",
        date: "2024-01-19"
      }
    ]
  },
  {
    id: 4,
    firstName: "Hassan",
    email: "employee4@example.com",
    password: "123",
    taskCounts: { newTask: 1, active: 0, completed: 1, failed: 1 }, // Added
    tasks: [
      {
        statusCode: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Prepare project demo slides",
        category: "Documentation",
        date: "2024-01-25"
      },
      {
        statusCode: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Feedback",
        description: "Review and apply client feedback",
        category: "Communication",
        date: "2024-01-11"
      },
      {
        statusCode: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deployment",
        description: "Deploy app to production",
        category: "DevOps",
        date: "2024-01-06"
      },
      {
        statusCode: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Bug Fixing",
        description: "Fix reported UI bugs",
        category: "Debugging",
        date: "2024-01-21"
      }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCounts: { newTask: 1, active: 0, completed: 1, failed: 0 }, // Added
    tasks: [
      {
        statusCode: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Admin Panel",
        description: "Design admin dashboard layout",
        category: "Admin",
        date: "2024-01-24"
      },
      {
        statusCode: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "User Roles",
        description: "Implement role-based access",
        category: "Security",
        date: "2024-01-13"
      },
      {
        statusCode: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Search Feature",
        description: "Add search functionality",
        category: "Feature",
        date: "2024-01-23"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};