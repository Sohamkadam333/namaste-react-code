<h1>Chapter 01 Inception</h1>

<br />


<h2> What is Emmet? </h2>

<p> Emmet is a powerful web development tool designed to boost the productivity of front-end developers. It enables rapid and efficient creation of HTML and CSS code by using concise abbreviations and shortcuts. Originally known as Zen Coding, Emmet allows developers to write complex code structures with just a few keystrokes, saving significant time and effort. It integrates seamlessly with popular code editors and Integrated Development Environments (IDEs), such as Visual Studio Code and Sublime Text. By automating repetitive tasks and providing a more intuitive coding experience, Emmet has become an indispensable tool in the modern web development workflow. </p>

<h2>Difference between a Library and Framework? </h2>
<p>
A library and a framework are both reusable software components, but they differ in their usage and control flow. A library is a collection of functions or modules that developers can use to perform specific tasks. Developers have more control over their code and decide when to use the library's functions. On the other hand, a framework provides a structured architecture where developers build their applications. It dictates the flow of control, and developers fill in the specific functionality. While libraries offer more flexibility, frameworks provide a comprehensive structure and impose a specific design pattern, making development faster but potentially less customizable.
</p>

<h2>What is CDN? Why do we use it? </h2>
<p>
CDN stands for Content Delivery Network. It is a network of distributed servers located at various data centers worldwide. The purpose of a CDN is to deliver web content, such as images, CSS files, JavaScript, and other resources, to users more efficiently and with higher performance. When a user requests a webpage, the CDN serves the content from the nearest server, reducing latency and load times. This improves overall website speed, user experience, and decreases the load on the origin server. CDN usage is crucial for websites with global audiences, as it ensures faster delivery and better scalability for handling high traffic volumes.
</p>


<h2>Why is React known as React?</h2>
<p>
React is known as "React" because of its core feature, which is its ability to react to changes in data and efficiently update the user interface. Developed by Facebook, React introduced a novel approach called "Reacting to State Changes," where the UI dynamically updates in response to changes in application state without requiring a full page reload. This concept of reactive and declarative programming became the foundation of React's design philosophy. By efficiently managing the DOM updates, React significantly improved web application performance and became one of the most popular and influential JavaScript libraries for building user interfaces.
</p>

<h2>What is crossorigin in script tag?</h2>
<p>
The `crossorigin` attribute in the `<script>` tag is used to control how the browser fetches and handles JavaScript files from different origins (domains) to ensure security and prevent cross-origin issues. When a script with `crossorigin` is loaded, the browser will check the CORS (Cross-Origin Resource Sharing) headers of the server's response to allow or restrict access to the script's content. If the server doesn't include the appropriate CORS headers, the script may not be accessible to the page, thus enhancing security by mitigating potential risks associated with loading scripts from external sources.
</p>


<h2>What is difference between React and ReactDOM? </h2>
<p>
React and ReactDOM are two distinct packages in the React ecosystem. React is a JavaScript library for building user interfaces and managing application state. It provides the core functionality of React, including components, state management, and the virtual DOM.

On the other hand, ReactDOM is a specific package that serves as the bridge between React and the actual DOM in the web browser. It contains methods like `ReactDOM.render()` used to render React components into the real DOM, updating the UI when state changes. ReactDOM handles the interactions with the browser's DOM, while React focuses on managing the UI components and application logic.
</p>

<h2>What is difference between react.development.js and react.production.js files via CDN?</h2>
<p>
The difference between `react.development.js` and `react.production.js` files lies in how they are optimized for different environments. 

`react.development.js` is intended for development purposes and provides useful error messages and warnings to help developers identify issues during the development process. It includes additional checks and debugging tools, making the file larger in size.

`react.production.js`, on the other hand, is optimized for production environments. It removes the development-specific code, error messages, and debugging tools, resulting in a smaller file size. This improves the performance of the application in production and reduces unnecessary overhead, making it suitable for deployment to end-users. Developers should use the appropriate version based on their development or production needs.
</p>

<h2>What is async and defer?</h2>
<p>
`async` and `defer` are attributes used in the `<script>` tag when including external JavaScript files in an HTML document.

1. `async`: When used, the browser continues parsing the HTML document while fetching the script in the background. Once the script is fetched, it is executed, which can potentially interrupt the parsing of the document. This attribute is suitable for non-blocking scripts that don't rely on the DOM or other scripts.

2. `defer`: When used, the script is fetched in the background, but it is only executed after the HTML document is fully parsed. This attribute is ideal for scripts that require the DOM to be available, and it ensures proper script execution order while not blocking the document parsing.
</p>