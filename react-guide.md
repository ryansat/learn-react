Start Learn React :

1. **Create an HTML file:**
   - You start by creating a simple HTML file. Let's call it `index.html`. In the `head` section, you need to include three script tags to load React, ReactDOM and Babel. Babel is used to transpile JSX into regular JavaScript.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // Your React code will go here
    </script>
  </body>
</html>
```

2. **Write your React code:**
   - You write your React code in a script tag with `type="text/babel"`. This is necessary because browsers don't understand JSX natively, so we use Babel to transpile it into regular JavaScript on the fly.

```html
<script type="text/babel">
  function App() {
    return <h1>Hello, world!</h1>;
  }

  ReactDOM.render(<App />, document.getElementById('root'));
</script>
```

In this example, a function component `App` is declared and then rendered into the `root` div using `ReactDOM.render`.

This setup is great for learning and simple projects, but for larger applications, you'll likely want to set up a development environment with a module bundler like Webpack or Vite, a linter like ESLint, and a testing framework. The Create React App project can help with this.