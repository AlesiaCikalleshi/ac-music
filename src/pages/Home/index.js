import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Hero, Genres, Artists } from "components/Homepage";
import { ContentWrapper, GreyTitle, TrendsAndArtistSection } from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SectionTitle } from "components/ui/Typography";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await axios.get("/chart");
      setChart(data.data);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <div>Songs Table</div>
        </div>
        <aside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </aside>
      </TrendsAndArtistSection>
    </ContentWrapper>
  );
}

export default Home;
