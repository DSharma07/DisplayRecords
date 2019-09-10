## Coding Challenge - Frontend

Details:-

1. This task is listing out music festival data in a particular manner: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended.
2. This application is designed in MERN Stack (API, React.js, Express.js, Node.js) using ES6. 
3. Webpacks, lint tools are used.
4. I am using styled-components which is the latest form. Styled-components are pure visual primitives that act as a wrapping component; they can be mapped to actual html tags and what they do is wrap the children components with the styled-component. CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components.
5. Data displayed on the Website is retrieved from "http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals". 
6. This api throws throttling issues and at that time just reload the browser. 

To get started:-

1. npm install // This will install server side dependencies
2. To run the server: npm start  // Server will run at http://localhost:4000
3. cd client // Move to client directory. React code lies here
4. npm install // This will install client side dependenices
5. To run the client: npm start  // Server will run at http://localhost:3000


Features:-

1. Open application at http://localhost:3000
2. Landing page will be displayed with tree view : Record Lable -> Band Name -> Festival attended.