# **Kanban Task Manager**

## **Project Overview**  

The **Kanban Task Manager** is a simple and interactive task management app that helps users organize their work using a Kanban board. It allows users to **add, update, delete, drag & drop tasks** across different statuses while ensuring smooth animations and data persistence.  

## **Live Preview**  
🚀 **[Kanban Task Manager Live](https://your-vercel-deployment-url.vercel.app)**  

## **Features**  

✅ **Add Tasks** – Users can create tasks with a title and assign them to the "Todo" column.  
✅ **Drag & Drop** – Move tasks between "Todo," "In Progress," "Done," and "Testing" with smooth animations.  
✅ **Search Tasks** – Quickly find tasks by title using the search bar.  
✅ **Delete Tasks** – Remove tasks instantly.

✅ **Responsive UI** – Fully responsive and optimized for mobile, tablet, and desktop.  

## **Tech Stack**  

- **Frontend**: Next.js 13, Tailwind CSS  
- **State Management**: Zustand
- **Drag & Drop**: @hello-pangea/dnd  

## **Setup Instructions**  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/Aakashbio/kanban-task-manager.git  
   cd kanban-task-manager  
   ```
2. **Install dependencies:**  
   ```sh
   npm install  
   ```
3. **Run the development server:**  
   ```sh
   npm run dev  
   ```
4. **Open the app in your browser:**  
   http://localhost:3000  

## **Folder Structure**  

```
src/
├── app/                   # Main entry point of the app
├── components/            # UI components like task lists and search
├── store/                 # Zustand store for managing app state
├── styles/                # Global styles
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for more information.
