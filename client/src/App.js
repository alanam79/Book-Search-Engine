import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <ApolloProvider client={client}>
    // Switch must be changed to router below and up in the import
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* switched from components */}
          <Route exact path="/" element={<SearchBooks />} />
          <Route exact path="/saved" element={<SavedBooks />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
    // </ApolloProvider>
  );
}

export default App;
