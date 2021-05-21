import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Character from "../components/Character";

const GET_CHARACTERS = gql`
    {
        characters{
            results{
                id,
                name,
                image
            }
        }
    }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #52bbde, #f5ed5f);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Characters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 70%;
  position: relative;
  top: 20px;
`;


export default () => {
    const { loading, data } = useQuery(GET_CHARACTERS);
    return (
      <Container>
        <Header>
          <Title>2021: Characters Shining the World</Title>
          <Subtitle>2021 당신의 캐릭터는 바로 !</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        <Characters>
            {data?.characters?.results?.map(m => (
            <Character
                key={m.id} 
                id={m.id} 
                bg={m.image}
                name={m.name}
                />
            ))}
        </Characters>     
      </Container>
    );
    return <h1>Home</h1>
  };