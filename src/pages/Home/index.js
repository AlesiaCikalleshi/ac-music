import { Hero } from "components/Homepage";
import React from "react";
import { ContentWrapper } from "./styled";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Songs Table</div>
      <aside>Top Artists</aside>
    </ContentWrapper>
  );
}

export default Home;
