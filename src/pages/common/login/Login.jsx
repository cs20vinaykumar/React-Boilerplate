import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { create } from "../../../services/services";
import { login } from "../../../services/apiEndpoints";
import Input from "../../../components/Input";

const Login = () => {
  const navigate = useNavigate();

  const [emailAddress, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await create(login, { emailAddress: emailAddress, password: password })
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("token", data.data.authToken);
        navigate("/");
      })
      .catch((error) => {
        console.log("data", error);
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <Input
        type="email"
        value={emailAddress}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
