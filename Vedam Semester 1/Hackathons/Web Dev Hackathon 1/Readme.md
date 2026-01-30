VST ClubSphere: College Event Showcase (Hackathon Submission) This project is a single-page, fully responsive website designed for a college event page hackathon problem statement. It showcases three distinct club events and promotes a major upcoming Tech Fest.

The core requirement of the hackathon was to use HTML and CSS only. To simulate complex, multi-page interactions and dynamic elements without using JavaScript, this project extensively leverages advanced CSS techniques.

🚀 Project Overview Title: VST ClubSphere: College Event Showcase Goal: To create an attractive, responsive event page featuring navigation, event details, a registration form, and CSS animations, strictly adhering to the HTML & CSS constraint. Events Featured: Clue Pursuit (Entrepreneurship), Vedostav (Cultural), and BGMI Tournament (E-Sports).

✨ Key Features & Technical Highlights

Pure CSS Dynamic Routing Technique: Uses the :target pseudo-class to simulate multi-page navigation.
Benefit: Allows users to navigate to detailed event pages (Clue Pursuit, Vedostav, BGMI) and return to the home view seamlessly without reloading the page or requiring any JavaScript.

CSS-Only Interactions & Components Mobile Menu: Implemented using the "Checkbox Hack".
FAQ Accordion: Implemented using the "Checkbox Hack" and the General Sibling Combinator (~) to allow users to expand and collapse answers without JavaScript.

Advanced Visual Effects & Animations Video Background: Uses the
Staggered Fade-In Animation: Event cards in the "Our Signature Events" section use a custom @keyframes animation (slideUpFadeIn) and the :nth-child selector with staggered animation-delay to create a smooth, sequential entry effect upon page load.

Pulsing Button: The main "Register Now" button features a continuous CSS @keyframes pulse animation.

Modern Design & Responsiveness Built using a dark theme with vibrant Cyan and Fuchsia accents.
Utilizes Tailwind CSS (via CDN) for utility-first styling, ensuring the layout is fully responsive across mobile, tablet, and desktop views.

Note on Local Assets: The HTML file references local image and video assets (e.g., ./YAYYY.mp4, ./IMG_3964.JPG). For the project to display correctly outside of the development environment:

Ensure all referenced files (images, videos) are placed in the same directory as landingpagev2.html.

Replace the placeholder video source (./YAYYY.mp4) with your actual event video, or comment out the

👥 Credits & Contact Developed by: Aareev, Revansh, Mohit, Avika & Nishtha Built for: Club Event Web Page Question Technology: HTML5, CSS3, Tailwind CSS