Sure, here's a basic "cheat sheet" for using Vite to develop React apps:

1. **Installation:**
    - You need to have Node.js (version 12.0.0 or higher) and npm installed on your system.
    - Install create-vite package globally using npm:
    ```bash
    npm install -g create-vite
    ```

2. **Creating a New Project:**
    - To scaffold a new project:
    ```bash
    create-vite my-react-app --template react
    ```

3. **Running the Development Server:**
    - To start the development server:
    ```bash
    cd my-react-app
    npm run dev
    ```
    - This will start the server, usually at `localhost:5000` (the port number might vary).

4. **Building for Production:**
    - To create an optimized production build:
    ```bash
    npm run build
    ```
    - This will create a `dist` folder with your optimized app.

5. **Serving the Production Build:**
    - To serve the production build locally:
    ```bash
    npm run serve
    ```
    - This will start a local server serving your production build, which can be useful for testing.

6. **Adding a New React Component:**
    - You can add a new React component by creating a new `.jsx` file in the `src` directory, for example:
    ```jsx
    // src/MyComponent.jsx
    import React from 'react';

    const MyComponent = () => <div>Hello from MyComponent</div>;

    export default MyComponent;
    ```
    - And then you can use it in another component like this:
    ```jsx
    // src/App.jsx
    import React from 'react';
    import MyComponent from './MyComponent';

    const App = () => (
      <div>
        <h1>Hello Vite + React!</h1>
        <MyComponent />
      </div>
    );

    export default App;
    ```

7. **Environment Variables:**
    - You can define environment variables in a `.env` file in the root of your project. Variables should start with `VITE_` to be imported in your application:
    ```bash
    # .env
    VITE_APP_TITLE=My React App
    ```
    - You can then use it in your application like this:
    ```jsx
    console.log(import.meta.env.VITE_APP_TITLE);
    ```