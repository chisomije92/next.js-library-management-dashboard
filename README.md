# 📚 Library Management Dashboard

This is a **Next.js** project designed as a **library management dashboard**. It includes a fully functional **frontend** built with **React.js, TypeScript, and TailwindCSS**, and a **mock API** for handling book data. The project is **pre-configured** with all necessary dependencies.

---

## 📌 **Project Overview**
This application provides a simple **library management system** where users can view books, filter them by author or availability, and interact with book details.  

### **Tech Stack**
- **Next.js 15** – For Server-Side Rendering (SSR) & API Routes.
- **React.js 18** – Component-based UI.
- **TypeScript** – Static typing for better maintainability.
- **TailwindCSS** – Utility-first CSS framework.
- **MobX** – For managing global application state.

---

## 🛠 **Setup Instructions**

### 1️⃣ **Clone the Repository**
```sh
git clone https://gitlab.com/search-atlas-interviews/next.js-library-management-dashboard.git
cd next.js-library-management-dashboard
```

### 2️⃣ **Configure Your Git Remote**
To work with your own repository, you need to replace the default remote with one you control. We recommend using **GitHub** for this, it's free.

#### 🏗 **Create an Empty Public Repository on GitHub**
1. Go to [GitHub](https://github.com/) and sign in.
2. Click on the **+** in the top-right corner and select **New repository**.
3. Enter a repository name (e.g., `next.js-library-management-dashboard`).
4. Choose **Public**.
5. **Do not** initialize with a README, `.gitignore`, or license.
6. Click **Create repository**.
7. Copy the repository URL (it should look like `https://github.com/your-username/your-repo.git`).

#### 🔧 **Replace the Default Git Remote**
Run the following commands to rename the existing remote and add your newly created repository:

```sh
git remote rename origin upstream
git remote add origin [YOUR_GITHUB_REPOSITORY_URL]
git push -u origin main
```

### 3️⃣ **Install Dependencies**
```sh
npm install
```

### 4️⃣ **Run the Development Server**
```sh
npm run dev
```
➡ The app will be available at:  
👉 **http://localhost:3000**

### 5️⃣ **Verify API Routes**
Check if the API is running by opening:  
👉 **http://localhost:3000/api/books**

---

## 📂 **Project Structure**
```plaintext
next.js-library-management-dashboard/
│── public/                # Static assets (logos, icons, images)
│── src/                   # Main source code
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages (routing)
│   ├── state/             # MobX state management
│   ├── styles/            # TailwindCSS styles
│   ├── utils/             # Utility functions
│── api/                   # Mock API endpoints
│── .gitignore             # Files ignored in version control
│── package.json           # Project dependencies and scripts
│── tailwind.config.js     # TailwindCSS configuration
│── tsconfig.json          # TypeScript configuration
│── next.config.ts         # Next.js configuration
```

---

## 📦 **Key Libraries & Dependencies**
| Library          | Purpose |
|-----------------|----------|
| **Next.js 15**  | Server-side rendering & API routes |
| **React 18**    | UI development |
| **TypeScript**  | Type safety |
| **TailwindCSS** | Styling & layout |
| **MobX**        | State management |
| **ESLint**      | Linting & code quality |

---

## 📌 **API Endpoints**
### 📚 **Books API**
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| `GET`  | `/api/books`   | Fetch all books |
| `GET`  | `/api/books/:id` | Fetch book details |
| `PUT`  | `/api/books/:id` | Update book availability |

---

## 📌 **Development Guidelines**
- Follow **component-based architecture** for maintainability.
- Keep state logic inside **MobX stores** for better separation of concerns.
- Use **React Query or SWR** for efficient API fetching.
- Maintain **clean & consistent code formatting** with ESLint.

---

## 📌 **Additional Resources**
- **Next.js Docs** – [https://nextjs.org/docs](https://nextjs.org/docs)
- **MobX Docs** – [https://mobx.js.org/](https://mobx.js.org/)

---

## 🎯 **License**
This project is licensed under the **MIT License**.

---

🚀 **Happy coding!** 🎉
