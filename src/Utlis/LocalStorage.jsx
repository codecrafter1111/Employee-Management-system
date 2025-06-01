// Employees JSON data
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Complete project report",
        "description": "Prepare and submit the project report by the end of the week.",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-05-15",
        "taskNumber": "active1"
      },
      {
        "title": "Team meeting",
        "description": "Attend the weekly team meeting on Monday.",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-05-12",
        "taskNumber": "completed1"
      },
      {
        "title": "Update client database",
        "description": "Ensure all client information is up-to-date in the system.",
        "category": "Admin",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "date": "2025-05-20",
        "taskNumber": "active2"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 8,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare presentation",
        "description": "Create slides for the upcoming client presentation.",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-05-18",
        "taskNumber": "active1"
      },
      {
        "title": "Submit expense report",
        "description": "Submit the monthly expense report to the finance team.",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-05-10",
        "taskNumber": "completed1"
      }
    ],
    "taskCount": {
      "active": 5,
      "newTask": 1,
      "completed": 4,
      "failed": 2
    }
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Organize team outing",
        "description": "Plan and organize a team outing for next month.",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-05-25",
        "taskNumber": "active1"
      },
      {
        "title": "Fix software bugs",
        "description": "Resolve the reported bugs in the application.",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "date": "2025-05-14",
        "taskNumber": "active2"
      },
      {
        "title": "Conduct code review",
        "description": "Review the code submitted by junior developers.",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-05-09",
        "taskNumber": "completed1"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 4,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare training materials",
        "description": "Create training materials for the new hires.",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-05-22",
        "taskNumber": "active1"
      },
      {
        "title": "Update website content",
        "description": "Revise and update the content on the company website.",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-05-11",
        "taskNumber": "completed1"
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 5,
      "completed": 6,
      "failed": 2
    }
  },
  {
    "id": 5,
    "firstName": "Aditi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare budget proposal",
        "description": "Draft a budget proposal for the next quarter.",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-05-19",
        "taskNumber": "active1"
      },
      {
        "title": "Organize client meeting",
        "description": "Schedule and organize a meeting with the client.",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-05-13",
        "taskNumber": "completed1"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 3,
      "completed": 2,
      "failed": 3
    }
  }
];



// Admin JSON data
const admin =[ {
  "id": 1,
  "firstName" : "Prabhat",
  "email": "admin@example.com",
  "password": "123"
},
];


export const setLocalStorage = ()=>{
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees")) 
  const admin = JSON.parse(localStorage.getItem("admin")) 
  return{admin ,employees};
}