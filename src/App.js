import Navbar from "./routes/navbar/navbar.component";
import Menu from "./routes/menu/menu.component";
import Footer from "./routes/footer/footer.component";

import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
