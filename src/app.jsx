import useAsset from "ultra/hooks/use-asset.js";
import { Link, Route, Switch } from "wouter";
import withMessage from './components/withMessage.jsx'
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";

export default function App() {

  const HomePage_message = withMessage(HomePage)
  const AboutPage_message = withMessage(AboutPage)

  const handleInstall = async (ev) => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          'sw.js',
          {
            scope: './',
          }
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
          //navigator.serviceWorker.dispatchEvent('install')
        } else if (registration.active) {
          console.log('Service worker active');
          //navigator.serviceWorker.dispatchEvent('install')
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  }

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
          <div onClick={handleInstall}>Install Local</div>
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
