Sure, here's a beginner-friendly cheat sheet for Yarn:

1. **Installation:**
   - Install Yarn globally on your system using npm:
   ```bash
   npm install -g yarn
   ```

2. **Creating a New Project:**
   - To initialize a new Yarn project:
   ```bash
   yarn init
   ```

3. **Adding Dependencies:**
   - To add a dependency to your project:
   ```bash
   yarn add [package]
   ```
   - To add a dev dependency to your project:
   ```bash
   yarn add --dev [package]
   ```

4. **Removing Dependencies:**
   - To remove a dependency from your project:
   ```bash
   yarn remove [package]
   ```

5. **Installing All Project Dependencies:**
   - To install all dependencies for your project:
   ```bash
   yarn install
   ```

6. **Running Scripts:**
   - To run a script defined in your `package.json` file:
   ```bash
   yarn run [script]
   ```

7. **Updating Dependencies:**
   - To update all your project's dependencies:
   ```bash
   yarn upgrade
   ```

8. **Checking For Outdated Dependencies:**
   - To see which of your project's dependencies are outdated:
   ```bash
   yarn outdated
   ```

Now, to create a new Vite project using Yarn:

1. **Creating a New Vite Project:**
   - Install `create-vite` package globally using Yarn:
   ```bash
   yarn global add create-vite
   ```

2. **Scaffolding a New Project:**
   - Scaffold a new Vite + React project:
   ```bash
   create-vite my-vite-project --template react
   ```

3. **Changing Into Your Project Directory:**
   - Change into your new project's directory:
   ```bash
   cd my-vite-project
   ```

4. **Installing Dependencies:**
   - Install all dependencies for your project:
   ```bash
   yarn install
   ```

5. **Running the Development Server:**
   - Start the development server:
   ```bash
   yarn dev
   ```

6. **Building for Production:**
   - Create an optimized production build:
   ```bash
   yarn build
   ```

7. **Serving the Production Build:**
   - Serve the production build locally:
   ```bash
   yarn serve
   ```