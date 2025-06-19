import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Header />
          <main>
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
