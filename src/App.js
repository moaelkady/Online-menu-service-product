import React, { Suspense } from "react";

import "./App.css";

const Navbar = React.lazy(() => import("./routes/navbar/navbar.component"));
const Menu = React.lazy(() => import("./routes/menu/menu.component"));
const Footer = React.lazy(() => import("./routes/footer/footer.component"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
