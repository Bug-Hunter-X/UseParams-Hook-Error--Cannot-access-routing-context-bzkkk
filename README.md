# useParams Hook Error in React Router v6

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6. The error occurs when `useParams` is used outside a route component, leading to an undefined value or an error.

The `useParamsError.js` file shows the incorrect implementation, where `useParams` is called in a component not directly nested within a route. The `useParamsSolution.js` demonstrates the corrected approach, ensuring `useParams` is used within the route component's scope.

## How to reproduce the error:
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Observe the error in the console and the application's behavior.

## Solution:
The solution involves restructuring the component tree to ensure `useParams` is used only within the appropriate route component.