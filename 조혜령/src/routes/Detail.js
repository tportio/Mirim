import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";

const GET_CHARACTERS = gql`
  query getCharacter($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_intro
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

export default () => {
    const { id } = useParams();
    console.log(id);
    return "Detail";
};