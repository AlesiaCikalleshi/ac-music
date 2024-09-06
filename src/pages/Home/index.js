import { SectionTitle } from "components/ui/Typography";
import { Hero, Genres, Artists } from "components/Homepage";
import { GreyTitle, TrendsAndArtistSection, StyledAside } from "./styled";
import { loadCharts, loadTopRadioTrack } from "services/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TracksTable from "components/TracksTable";
import { useLoadData } from "hooks/useLoadData";

function Home() {
  const [data, isLoading] = useLoadData(Promise.all([loadCharts(), loadTopRadioTrack()]));
  const [chart, radio] = data || [];

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
