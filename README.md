React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:





@vitejs/plugin-react uses Babel for Fast Refresh



@vitejs/plugin-react-swc uses SWC for Fast Refresh

Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.

Project Modifications

Implemented Features in Homepage (HomePage.jsx)

The HomePage.jsx serves as the main page of the application, rendering several components including VideoCollection.jsx. The following features have been implemented in the VideoCollection.jsx component:





Implementation of useState:





The useState hook is used to manage the state of the video collection (videos), form inputs for adding/editing videos (newVideo), and the currently edited video (editVideo).



This allows the component to dynamically respond to user interactions, such as adding, editing, or deleting videos.



Implementation of Array Object for CRUD Operations:





An array of objects (videos) is used to store video data, with each object containing properties like id, img, title, rating, reviews, and price.



The following CRUD (Create, Read, Update, Delete) operations are implemented:





Get: Display the list of videos in a grid layout.



Add: Add a new video to the array via a form, with default values for img, rating, and reviews.



Update: Edit an existing video's title and price through the form.



Delete: Remove a video from the array based on its id.



Data persistence is achieved using localStorage, ensuring that the video list persists across page refreshes.

These modifications enhance the interactivity of the homepage, allowing users to manage a collection of video cards dynamically.
