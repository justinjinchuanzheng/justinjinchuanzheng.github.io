import React, {lazy, Suspense, useEffect, useState} from "react";

import "./App.scss";

import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Main from "./containers/Main";
import SplashScreen from "./containers/splashScreen/SplashScreen";
import {splashScreen} from "./portfolio";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

const Courses = lazy(() => import("./containers/courses/Courses"));

const ContactPage = lazy(() => import("./containers/contact/ContactPage"));

const PublicationsPage = lazy(() =>
  import("./containers/publications/PublicationsPage")
);

const ResearchPage = lazy(() => import("./containers/research/ResearchPage"));

const ResearchDetailPage = lazy(() =>
  import("./containers/research/ResearchDetailPage")
);

function App() {
  const [isDark] = useLocalStorage("isDark", true);
  const [showIntro, setShowIntro] = useState(splashScreen.enabled);

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(
      () => setShowIntro(false),
      splashScreen.duration
    );

    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <HashRouter>
      {showIntro ? (
        <StyleProvider value={{isDark}}>
          <SplashScreen />
        </StyleProvider>
      ) : (
        <Suspense
          fallback={
            <div className="route-loading" role="status">
              <span className="route-loading-spinner" aria-hidden="true" />
              <span>Loading…</span>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Main} />

            <Route exact path="/about" component={Main} />

            <Route exact path="/education" component={Main} />

            <Route
              exact
              path="/research/soft-robotics"
              render={() => (
                <ResearchDetailPage
                  title="Soft Robotics"
                  pageId="soft-robotics"
                />
              )}
            />

            <Route
              exact
              path="/research/wearable-electronics"
              render={() => (
                <ResearchDetailPage
                  title="Wearable Electronics"
                  pageId="wearable-electronics"
                />
              )}
            />

            <Route
              exact
              path="/research/next-generation-batteries"
              render={() => (
                <ResearchDetailPage
                  title="Next-Generation Batteries"
                  pageId="next-generation-batteries"
                />
              )}
            />

            <Route
              exact
              path="/research/agrivoltaic-agrotunnel"
              render={() => (
                <ResearchDetailPage
                  title="Agrivoltaic Agrotunnel"
                  pageId="agrivoltaic-agrotunnel"
                />
              )}
            />

            <Route exact path="/research" component={ResearchPage} />

            <Route exact path="/publications" component={PublicationsPage} />

            <Route exact path="/blogs" component={Main} />

            <Route exact path="/talks" component={Main} />

            <Route exact path="/resume" component={Main} />

            <Route exact path="/courses" component={Courses} />

            <Route exact path="/achievements" component={Courses} />

            <Route exact path="/contact" component={ContactPage} />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      )}
    </HashRouter>
  );
}

export default App;