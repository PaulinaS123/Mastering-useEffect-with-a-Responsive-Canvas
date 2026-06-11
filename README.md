# Mastering-useEffect-with-a-Responsive-Canvas

## Student

Victoria Salomon

# Responsive Card with useEffect

## Overview

This project demonstrates how to use React's `useEffect` hook to synchronize a component with an external browser event. The application tracks the browser window size in real time and updates the user interface whenever the window is resized.

The project was created to practice working with side effects in React, specifically:

* Using `useEffect`
* Managing component state with `useState`
* Listening for browser resize events
* Cleaning up event listeners to prevent memory leaks
* Creating a responsive user interface

---

## Features

### Real-Time Window Tracking

The application continuously monitors the browser window's width and height using the `resize` event.

Current dimensions are displayed on the screen and update automatically whenever the browser size changes.

### Responsive Layout

The application determines whether the screen is considered Mobile or Desktop based on a breakpoint of **768 pixels**.

* Width less than 768px → Mobile View
* Width greater than or equal to 768px → Desktop View

### Dynamic Styling

The card changes its appearance based on screen size:

| View    | Background Color |
| ------- | ---------------- |
| Mobile  | Light Pink       |
| Desktop | Light Blue       |

### Cleanup Function

A cleanup function is included inside the `useEffect` hook.

This removes the resize event listener when the component unmounts, preventing memory leaks and unnecessary event listeners from remaining active.

---

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS
* React Hooks (`useState`, `useEffect`)

---

## How the Code Works

### State Management

The application uses the `useState` hook to store the current browser dimensions.

```javascript
const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});
```

### useEffect Hook

The `useEffect` hook runs once when the component mounts.

```javascript
useEffect(() => {
  ...
}, []);
```

The empty dependency array means the effect only runs one time during the component's initial render.

### Event Listener

The application listens for browser resize events.

```javascript
window.addEventListener("resize", handleResize);
```

Whenever the window changes size, the state is updated with the latest dimensions.

### Cleanup Function

The cleanup function removes the event listener.

```javascript
return () => {
  window.removeEventListener("resize", handleResize);
};
```

Without this cleanup, multiple listeners could accumulate and cause memory leaks.

---

## Test Cases

### Normal Test Cases

#### Test Case 1: Desktop View

Input:

```text
Width = 1200px
```

Expected Result:

```text
Desktop View
Blue Background
```

---

#### Test Case 2: Tablet Width

Input:

```text
Width = 800px
```

Expected Result:

```text
Desktop View
Blue Background
```

---

#### Test Case 3: Mobile Width

Input:

```text
Width = 500px
```

Expected Result:

```text
Mobile View
Pink Background
```

---

### Edge Test Cases

#### Test Case 4: Breakpoint Boundary

Input:

```text
Width = 768px
```

Expected Result:

```text
Desktop View
Blue Background
```

---

#### Test Case 5: Extremely Small Width

Input:

```text
Width = 200px
```

Expected Result:

```text
Mobile View
Pink Background
```

---

#### Test Case 6: Rapid Resizing

Action:

```text
Continuously resize the browser window
```

Expected Result:

```text
Width and height update correctly
No crashes
No console errors
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd responsive-canvas
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser using the URL displayed in the terminal.

---

## Project Structure

```text
src/
├── App.jsx
├── ResponsiveCard.jsx
├── App.css
├── main.jsx
```

### File Descriptions

**App.jsx**

* Main application component.
* Renders the ResponsiveCard component.

**ResponsiveCard.jsx**

* Contains the main application logic.
* Uses `useState` and `useEffect`.
* Tracks browser dimensions.
* Handles responsive behavior.

**App.css**

* Provides styling for the card and page layout.

---

## Learning Outcomes

Through this project I learned how to:

* Use React's `useEffect` hook for side effects.
* Register browser event listeners.
* Remove event listeners using cleanup functions.
* Manage state with `useState`.
* Create responsive React components.
* Prevent memory leaks by cleaning up resources.
* Synchronize React components with browser events.
