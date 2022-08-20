import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Buffer } from "buffer";

import { setAvatarRoute } from "../utils/API";

import loader from "../assets/loader.gif";

import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const SetAvatar = () => {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();

  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const setPrifilePicture = async () => {};

  const getAvatars = async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      );
      const buffer = new Buffer(image.data);
      data.push(buffer.toString("base64"));
    }
    setAvatars(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getAvatars()
  }, []);

  return (
    <>
      <Container>
        <div className="title-container">
          <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <div
              className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
              key={Date.now() + index}>
              <img
                src={`data:image/svg+xml;base64,${avatar}`}
                alt="avatar"
                onClick={() => setSelectedAvatar(index)}
              />
            </div>
          ))}
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

const Container = styled.div``;

export default SetAvatar;
