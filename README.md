# Namaste React


# Parcel(features)

- Dev build
- Local Server
- HMR - Hot Module Relpacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree  Shaking - remove unused code
- Different dev and prod bundles


Two types of Export/import:

- Default export/import 

  export default <Name of Component>
  import Component from "path"

- Named export/import

  export const <Name>
  import {Name} from "path"


  - two types of routing

    Client side routing - on the client side only component is changed, not the entire page. This can also be called SPA(Single page Application)
    Server side routing - request is made to server to serve the HTML



- Class Based Components

  - Whenever a class based component is called, a class is instantiated. When an instance of a class is   created,  a constructor is called.

  - First constructor is called and then render method is called.
  - react batches all the render phases


- Modularity
  
  Maintaining modularity in our code leads to better testability and maintainance.

- Single Responsibility principle
  
  Each and every part of our code(class, function etc..,) should have a single responsibility so as to make it lightweight.


- A hook is just a utility function.

- Uses of custom hook - more readable, reusable, modular

React Lazy - It is a function which is used defer a component's code until it's rendered for the first time

Suspense - Lets to display a fallback until its children have finished loading.

sass - adds superpowers to css. writing css becomes easy and little more advanced.

Different style frameworks in CSS - chakra UI, Bootstrap, Material UI, styled-components, Ant Design

Tailwind CSS - A utility first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

Tailwind CSS uses postCSS to transform CSS with JavaScript in the background

.postcssrc - used by parcel to understand tailwind

Disadvantages:
  (i) Initial learning curve is more
  (ii) Long lines of code should be written for complex applicaton.

Advantages:
  (i) Lightweight - bundle size is very light.
  (ii) it's possible to build a complex UI's using tailwind.



# Redux toolkit(RTK library):

  - Install @reduxjs/toolkit
  - Install react-redux
  - Configure the store
  - Dispatch action
  - Access data from store using selectors.




