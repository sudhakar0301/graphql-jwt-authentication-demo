import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries";
import IsJwtValid, { GenerateIdentityToken } from "../validateToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const SECRET_KEY = "myFirstSecretKey";
  const [login, { data }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const result = await login({ variables: { username, password } });
      const token = result.data.login;
      localStorage.setItem("jwt", token);
      console.log(data);

      // Store the JWT token in your preferred way (e.g., local storage, cookies)
      // For security reasons, consider using secure storage methods.

      console.log("JWT Token:", token);
      //IsJwtvalid(token, SECRET_KEY);
      console.log(IsJwtValid(token, SECRET_KEY));
    } catch (error: any) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button
        onClick={() =>
          console.log(IsJwtValid(localStorage.getItem("jwt"), "s"))
        }
      >
        Check token validity
      </button>
      <br />
      <button
        onClick={() => GenerateIdentityToken(localStorage.getItem("token"))}
      >
        Generate identity token
      </button>
    </div>
  );
};

export default Login;
