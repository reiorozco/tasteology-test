Website: https://tasteology-test.vercel.app/

**Modern responsive interface built with Next.js, Tailwind CSS, and TypeScript.**
## Technologies and Libraries Used
- **Next.js**       was chosen to take advantage of Server-Side Rendering (SSR), which improves performance, SEO, and initial load times. It also makes it easy to integrate interactive client-side components using the `use client` directive only where needed.

- **Tailwind CSS**    is used for its utility-first approach, which speeds up styling and simplifies the creation of responsive designs. Its predefined classes help maintain clean and consistent CSS throughout the project.

- **TypeScript**    was selected to provide static typing, which enhances code robustness and maintainability. It helps catch errors during compilation and facilitates collaborative development.

- **Prettier**    is integrated to ensure consistent code formatting, making the codebase easier to read and maintain.

- **Swiper**    is used to implement a carousel for presenting an image gallery on mobile devices. It is ideal for touch interfaces and optimizes the mobile user experience.

- **Radix UI**    was chosen for its accessible, customizable components, which simplify the implementation of modals, buttons, and other interactive elements. It helps ensure that our UI adheres to modern accessibility standards.

## Project Features

- **Mobile Carousel:**  
  A carousel (implemented with Swiper) displays an image gallery on mobile devices. On large (lg) devices, the layout switches to a different presentation suitable for wider screens.

- **CSS Effects:**  
  Hover effects and smooth transitions have been implemented to enhance interactivity and provide a visually engaging experience.

- **Semantic HTML5:**  
  The project adheres to modern HTML5 standards using semantic tags (such as `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`) to improve SEO and accessibility.

- **Event Logging:**  
  JavaScript is used to capture click events on all `<a>` elements and log the clicked element to the console. This functionality is implemented in interactive components marked with `use client`.

- **Responsive Design:**  
  The application is fully responsive and displays correctly on devices as narrow as 320px, thanks to Tailwind CSS and media queries.

- **Image Modals:**  
  Images open in a modal when clicked, using Radix UI components to ensure both accessibility and usability.

## How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.8 or later)
- [Git](https://git-scm.com/)

### Installation Instructions

1. **Install the dependencies:**
   ```bash
      npm install
2. **Start the development server:**
     ```bash
      npm run dev
This will launch the Next.js development server. You can view the application at http://localhost:3000.

3. **Build for production (optional):**
   ```bash
      npm run build
      npm start
