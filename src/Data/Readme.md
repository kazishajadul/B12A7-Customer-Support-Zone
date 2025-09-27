1. What is JSX, and why is it used?

JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within their JavaScript code. It is primarily used with libraries like React to define the structure and appearance of user interface components.

2. What is the difference between State and Props?
Props (properties) are data passed from a parent component to a child component, are read-only, and cannot be changed by the child. 
State is internal data that a component manages and can change over time, often due to user interactions, making it mutable. When state changes, it triggers a re-render of the component to reflect the new data in the UI. 

3. What is the useState hook, and how does it work?
The useState hook in React is a function that adds a state variable and a function to update it to function components, allowing them to remember and react to changes in data across re-renders. It returns a two-element array: the first element is the current state value, and the second is the "set" function that updates the state and triggers a component re-render to display the new value. 

4. How can you share state between components in React?
Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state.
Props → Parent ↔ Child communication.
Lifting state up → For sibling sharing.
Context API → Avoid prop drilling, share globally.
State libraries → For big/complex apps.

5. How is event handling done in React?
Event handling in React is similar to how it's done in plain HTML, but with a few key differences following React's JSX syntax and component-based approach.

Key Differences and Practices
Here's how event handling is typically done in React:
CamelCase for Event Names: React events are named using camelCase instead of lowercase, which is used in plain HTML.

HTML: onclick
React (JSX): onClick

Functions as Handlers: You pass a function as the event handler, not a string. This is a crucial difference from typical HTML, where you might pass a string of JavaScript code.

HTML: <button onclick="doSomething()">
React (JSX): <button onClick={doSomething}>

The SyntheticEvent System: React implements a SyntheticEvent system, which is a cross-browser wrapper around the browser's native event. This ensures that the events behave identically across different browsers.

The event object (e) passed to your handler function is a synthetic event. It has the same interface as the browser's native event, including methods like stopPropagation() and preventDefault().

To access the underlying browser event, you can use e.nativeEvent.

