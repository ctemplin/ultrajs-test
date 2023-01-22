import React from "react";
import useAsset from "ultra/hooks/use-asset.js";
import { Link, Route, Switch } from "wouter";
import withMessage from './components/withMessage.jsx'
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
//import Posts from "./components/posts.jsx";

export default function App() {
  const [postId, setPostId] = React.useState(-1);
  console.log("Hello world!");

  const HomePage_message = withMessage(HomePage)
  const AboutPage_message = withMessage(AboutPage)

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
            
          {/*
          {postId > -1 ? (
            <Post postId={postId} setPostId={setPostId} />
          ) : (
            <Posts setPostId={setPostId} />
          )}
          */}
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
              <HomePage_message msgText="show/hide message" />
            </Route>
            <Route path="/about">
              <AboutPage_message msgText="reveal/conceal message" />
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
