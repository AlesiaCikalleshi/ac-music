import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";
import { SubTitle } from "components/ui/Typography";

function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SubTitle>{name}</SubTitle>
    </Wrapper>
  );
}

GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
