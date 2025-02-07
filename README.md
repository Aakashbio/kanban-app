# **Kanban Task Manager**

## **Project Overview**  

The **Kanban Task Manager** is a simple and interactive task management app that helps users organize their work using a Kanban board. It allows users to **add, update, delete, drag & drop tasks** across different statuses while ensuring smooth animations and data persistence.  

## **Live Preview**  
🚀 **[Kanban Task Manager Live](https://kanban-app-by-akash-tripathi.vercel.app/)**  

## **Features**  

✅ **Add Tasks** – Users can create tasks with a title and assign them to the "Todo" column.  
✅ **Drag & Drop** – Move tasks between "Todo," "In Progress," "Done," and "Testing" with smooth animations.  
✅ **Search Tasks** – Quickly find tasks by title using the search bar.  
✅ **Delete Tasks** – Remove tasks instantly with real-time updates.  
✅ **Persistent Data** – Uses **Zustand** for state management, ensuring tasks remain after page refresh.  
✅ **Droppable Area Highlighting** – The background color of columns changes when dragging a task over them.  
✅ **Responsive UI** – Fully responsive and optimized for mobile, tablet, and desktop.  

## **Tech Stack**  

- **Frontend**: Next.js 13, Tailwind CSS  
- **State Management**: Zustand
- **Drag & Drop**: @hello-pangea/dnd  

## **Setup Instructions**  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/Aakashbio/kanban-app.git
   cd kanban-app  
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