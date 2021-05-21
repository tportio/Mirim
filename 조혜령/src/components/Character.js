import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Character = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Name = styled.h3`
  font-size: 25px;
  color:black;
`;

export default ({ id, bg, name }) => {
    console.log(name);
    return (
      <Container>
          <Name>{name}</Name>
          <Link to={`/${id}`}>
            <Character bg={bg}></Character>
          </Link>
      </Container>
    );
  };