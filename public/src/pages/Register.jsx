import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

import styled from "styled-components";

const Register = () => {
  const [inputsValue, setInputsValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
  };

  console.warn(inputsValue);

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <img src={logo} alt="LOGO" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={inputsValue.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputsValue.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputsValue.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={inputsValue.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <span>
            already have an account ? <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #131324;

    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;

      img {
        height: 5rem;
      }

      h1 {
        color: white;
        text-transform: uppercase;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;

      input {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
          border: 0.1rem solid #997af0;
          outline: none;
        }
      }

      button {
        background-color: #997af0;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease;
        &:hover {
          background-color: #4e0eff;
        }
      }

      span {
        color: white;
        text-transform: uppercase;
        a {
          color: #4e0eff;
          text-decoration: none;
          font-weight: bold;
        }
      }
    }
`;

export default Register;