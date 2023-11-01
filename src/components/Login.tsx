import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const result = await login({ variables: { username, password } });
      const token = result.data.login;

      // Store the JWT token in your preferred way (e.g., local storage, cookies)
      // For security reasons, consider using secure storage methods.

      console.log("JWT Token:", token);
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
    </div>
  );
};

export default Login;
