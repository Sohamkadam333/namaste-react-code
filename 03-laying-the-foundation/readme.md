# 04 Assignment - Laying the foundation

---

## What is JSX?

### JSX stands for JavaScript XML. It's a syntax extension used primarily in React, a JavaScript library for building user interfaces. JSX allows developers to write HTML-like code within JavaScript, making it easier to create and manage UI components. This code is then transformed into regular JavaScript using tools like Babel, enabling the integration of dynamic data and logic seamlessly into the user interface. By combining the power of JavaScript and HTML-like syntax, JSX simplifies the process of building interactive and dynamic web applications.


## Superpowers of JSX

### JSX wields superpowers by fusing JavaScript with HTML-like syntax. It empowers developers to construct dynamic and interactive user interfaces in React effortlessly. JSX enables the seamless embedding of logic, allowing variables and expressions to coexist with UI elements. This fusion enhances code readability and maintainability, promoting component-based development. Its flexibility supports creating reusable and modular components, boosting efficiency. Through JSX, React efficiently updates the Virtual DOM, optimizing performance. Its concise, intuitive structure fosters collaboration among developers, accelerating frontend development. By harnessing JSX's superpowers, programmers can craft sophisticated web applications with fluidity, speed, and elegance.

## Role of type attribute in script tag? What options can I use there?

### The `type` attribute in the `<script>` tag specifies the media type of the script content. It helps the browser identify how to interpret and execute the script. Common options for the `type` attribute include:

1. `text/javascript`: This is the default value. It indicates that the content of the `<script>` tag contains JavaScript code.

2. `module`: This indicates that the script is a JavaScript module, allowing the use of modern module syntax (`import` and `export` statements).

3. `text/ecmascript`: Used to specify that the content contains ECMAScript, which is the standard behind JavaScript.

4. `application/javascript`: Similar to `text/javascript`, it specifies that the content is JavaScript code.

5. `application/x-javascript`: This is an older type that's equivalent to `text/javascript`.

It's important to note that with the advent of modern web development practices, the `type` attribute is not always required. In HTML5, the default `type` is assumed to be `text/javascript`, and for JavaScript modules, the `type` can be omitted altogether as the browser will treat it as a module by default.