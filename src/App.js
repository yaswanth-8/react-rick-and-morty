import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CharacterComponent from "./components/CharacterComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CharacterComponent />
      </QueryClientProvider>
    </div>
  );
}

export default App;
