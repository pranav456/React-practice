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

