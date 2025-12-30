const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete UI Design",
        description: "Design the login and dashboard UI",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate user authentication API",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Product Cards",
        description: "Build reusable product card components",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress images for better performance",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement dark mode using Tailwind",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment Gateway",
        description: "Setup Stripe payment gateway",
        category: "Integration"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Write unit tests for auth module",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Refactor",
        description: "Refactor old components",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Form Validation",
        description: "Add validation to forms",
        category: "Frontend"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Prepare project demo slides",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Feedback",
        description: "Review and apply client feedback",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deployment",
        description: "Deploy app to production",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Bug Fixing",
        description: "Fix reported UI bugs",
        category: "Debugging"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Admin Panel",
        description: "Design admin dashboard layout",
        category: "Admin"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "User Roles",
        description: "Implement role-based access",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Search Feature",
        description: "Add search functionality",
        category: "Feature"
      }
    ]
  }
]

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
]
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || []
  const admin = JSON.parse(localStorage.getItem("admin")) || []
  return { employees, admin }
}
