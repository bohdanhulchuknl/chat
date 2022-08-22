import React, { useState, useEffect } from "react";

import Logo from "../assets/logo.svg";

import styled from "styled-components";

const Contacts = ({ contacts, currentUser }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  const changeCurrentChat = (index, contact) => {};

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>snappy</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={Date.now() + index}>
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h1>{currentUserName}</h1>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;

    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        img {
            height: 2rem;
        }

        h3 {
            color: white;
        }
    }
`;

export default Contacts;
