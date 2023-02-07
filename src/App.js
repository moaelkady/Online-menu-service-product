import React, { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-boundry/error-boundary.component";
import Loading from "./components/loading/loading.component";
import "./App.css";

const Navbar = React.lazy(() => import("./routes/navbar/navbar.component"));
const Menu = React.lazy(() => import("./routes/menu/menu.component"));
const Footer = React.lazy(() => import("./routes/footer/footer.component"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading />}>
          <Menu />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
