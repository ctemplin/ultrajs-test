import useAsset from "ultra/hooks/use-asset.js";
import { Link, Route, Switch } from "wouter";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <main>
          <h1>
            <span></span>__<span></span>
          </h1>
          <p>
            Welcome to{" "}
            <strong>Ultra</strong>.
          </p>
          <p>
            Take{" "}
            <a
              href="https://ultrajs.dev/docs"
              target="_blank"
            >
              this
            </a>, you may need it where you are going. It will show you how to
            customize your routing, data fetching, and styling with popular
            libraries.
          </p>
          <Switch>
            <Route path="/">
              <HomePage msgText="show/hide message" />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route>
              404
            </Route>
          </Switch>
        </main>
      </body>
    </html>
  );
}
