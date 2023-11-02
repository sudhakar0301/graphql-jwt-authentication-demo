import React, { useEffect } from "react";
import Hello from "./components/Hello";
import Login from "./components/Login";

function App() {
  useEffect(() => {
    //create script element
    const script = document.createElement("script");
    //set the source attribute to your desired file
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jsonwebtoken/9.0.2/index.js";
    //append it to the body of your html page
    //document && document.body.appendChild(script);
  }, []);
  return (
    <div>
      <h1>My GraphQL App</h1>
      <Hello />
      <Login />
    </div>
  );
}

export default App;
