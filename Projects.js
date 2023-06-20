import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
      <h3>1. Task Manager App</h3>
      <p>
      The Task Manager App is a powerful web application designed to streamline task management and enhance productivity. 
      With its intuitive interface and robust features, this app simplifies the process of creating, assigning, and 
      tracking tasks.The app provides a centralized platform where users can efficiently manage their tasks, set <br />
      priorities, and monitor progress. It incorporates user authentication for secure access and offers customizable
      task categorization for easy organization. Real-time <br />notifications keep users informed about task updates and 
      deadlines. Leveraging technologies like React and Node.js, the Task Manager App ensures a responsive and <br />seamless 
      user experience. It is a valuable tool for individuals and teams seeking effective task management solutions.
      The Task Manager App is a web application built <br /> using React and Node.js. It is a task management system that 
      allows users to create, assign, and track tasks. The project includes features such as user authentication, <br /> task 
      categorization, and real-time notifications. I utilized technologies such as Redux and MongoDB to ensure data 
      persistence and manage state effectively.
      </p>
    </div>
    <div className="project">
      <h3>2. E-Commerce Website</h3>
      <p>
      An E-commerce website is a digital platform that facilitates online buying and selling of products or services. 
      It provides customers with a convenient and secure way to <br />browse, select, and purchase items from the comfort of 
      their homes. E-commerce websites offer a wide range of products from various sellers, making it easy for <br />customers 
      to find what they need. These websites typically include features such as product search, detailed product 
      descriptions, customer reviews, secure payment gateways, and order tracking. They enable businesses to expand 
      their reach and tap into a global customer base. E-commerce websites play a vital role in the modern marketplace, 
      offering convenience, accessibility, and a seamless shopping experience to users.The E-Commerce Website is a 
      responsive online store developed using <br />React and Express.js. It offers a seamless shopping experience with 
      features like product catalog, shopping cart functionality, and secure payment gateway integration. <br />The project 
      involved integrating with third-party APIs to fetch product data and manage inventory.
      </p>
    </div>
    <div className="project">
      <h3>3. Social Media App</h3>
      <p>
      A Social Media App is a digital platform that allows users to connect, interact, and share content with others 
      across the globe. It provides a virtual space where individuals, <br />communities, and businesses can communicate, 
      share ideas, and stay updated on current trends and events. Social media apps offer features such as user profiles,<br /> 
      friend/follower connections, news feeds, messaging, and the ability to post and share various forms of content like 
      text, photos, videos, and links. They enable users to <br />express themselves, build networks, and engage in discussions
       on diverse topics. Social media apps have become an integral part of our daily lives, fostering connections <br />and 
       facilitating information exchange on a massive scale. The Social Media App is a mobile application built with 
       React Native. It is a social media platform that allows users <br />to share photos and connect with friends. The app 
       includes features such as user profiles, photo filters, and real-time chat functionality. I utilized Firebase for 
       backend services, ensuring a seamless and interactive user experience.
      </p>
    </div>
    </div>
  );
}

export default Projects;
