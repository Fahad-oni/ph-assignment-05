
# 🚀 Dev Stack

A modern technology discovery platform built with React, TypeScript, Tailwind CSS, and Vite.


- Dev Stack is a modern, responsive web application designed to help developers explore and discover essential web development technologies. It features categorized technology listings with detailed descriptions, ratings, difficulty levels, and technology-specific information. Built with a clean and user-friendly interface, the project demonstrates responsive UI development, reusable React components, state management, and dynamic data rendering.

# 🛠️ Technologies Used

This project was built using the following technologies and tools:

- Frontend

  React — Component-based UI development
  TypeScript — Type-safe and maintainable code
  ES6+ JavaScript — Modern JavaScript features and syntax
  Tailwind CSS — Utility-first responsive styling
  DaisyUI — Pre-built UI components and Tailwind CSS extensions
  React Icons — Consistent and reusable icon components
  React Toastify — Toast notifications and user feedback

# Development & Build Tools

 - Vite — Fast development server and optimized production builds
 - JSON — Structured data management and dynamic content rendering

# Version Control

- Git — Source code version control
- GitHub — Repository hosting and project management

# Core Concepts Implemented

- Reusable React components
- Type-safe data handling with TypeScript
- Props and state management
- Dynamic data rendering
- Responsive and mobile-first design
- Interactive UI components
- Client-side data fetching
- Modern ES6+ JavaScript practices
- Toast notifications and user feedback
- Clean and maintainable project structure


# Answering Questions

1.What is JSX, and why is it used in React?
- JSX means JavaScript XML. A syntax extantion for JavaScript that allows us to write HTML like code inside JS.

2.What is the difference between props and state?
- Props are read-only data passed from a parent component to a child and state is data managed and updated within a component. State can be updated.

3.What does the useState hook do, and where did you use it in this project?
- useState is a React Hook. A React Hook is used to create and manage changing data (state) inside a component.

  In this project, I used useState in the Technology.tsx component and passed it's value to TechnologyCard.tsx to track whether a technology has been added to the selectedTechnology stack.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
- useEffect is a React Hook used to perform side effects, such as fetching data from an API or JSON file.

  useEffect is need to fetch the JSON data when the component loads and store the technology data in state.

5.Why does every item in a .map() list need a unique key prop?
- Every item in a .map() list needs a unique key so React can identify which items have changed, been added, or removed and update the UI efficiently.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
- Conditional rendering means displaying different UI elements based on a condition.
  
  In this project I used it to show stack message,button clicked message. For example,if selectedTechnology.length === 0, I display the empty stack message; otherwise, I display the selected technologies.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- We pass data from parent to child by props and to pass data from child to parent we pass a callback function as a prop from the parent, then call it from the child with the data.