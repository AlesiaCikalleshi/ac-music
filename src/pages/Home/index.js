import React from "react";
import { useEffect, useState } from "react";
import { SectionTitle } from "components/ui/Typography";
import { toast } from "react-toastify";
import { Hero, Genres, Artists } from "components/Homepage";
import TracksTable from "TracksTable";
import { GreyTitle, TrendsAndArtistSection, StyledAside } from "./styled";
import { loadCharts, loadTopRadioTrack } from "services/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [chart, radio] = await Promise.all([loadCharts(), loadTopRadioTrack()]);
        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable isLoading={isLoading} tracks={chart?.tracks?.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistSection>
    </main>
  );
}

export default Home;
