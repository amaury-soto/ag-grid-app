import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
