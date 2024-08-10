import React from "react";
import {
  Wrapper,
  TrackInfoWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";
import { ContentWrapper } from "Layout";
import { Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import { SkipLeft, SkipRight, Play, Volume } from "components/ui/Icons";
import Slider from "rc-slider";
import { theme } from "styles/Theme";
const track = {
  id: 2843869922,
  title: "Alibi (with Pabllo Vittar & Yseult)",
  title_short: "Alibi (with Pabllo Vittar & Yseult)",
  title_version: "",
  link: "https://www.deezer.com/track/2843869922",
  duration: 161,
  rank: 988399,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdn-preview-6.dzcdn.net/stream/c-66405b13ab8bbcb8b73068d249178650-1.mp3",
  md5_image: "ab69ef08c72c425dbf21889c84035966",
  position: 1,
  artist: {
    id: 5683028,
    name: "Sevdaliza",
    link: "https://www.deezer.com/artist/5683028",
    picture: "https://api.deezer.com/artist/5683028/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/a9f7776cfb75bc6fa08024975f86b8fd/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/a9f7776cfb75bc6fa08024975f86b8fd/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/a9f7776cfb75bc6fa08024975f86b8fd/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/a9f7776cfb75bc6fa08024975f86b8fd/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/5683028/top?limit=50",
    type: "artist",
  },
  album: {
    id: 600656732,
    title: "Alibi (with Pabllo Vittar & Yseult)",
    cover: "https://api.deezer.com/album/600656732/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/ab69ef08c72c425dbf21889c84035966/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/ab69ef08c72c425dbf21889c84035966/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/ab69ef08c72c425dbf21889c84035966/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/ab69ef08c72c425dbf21889c84035966/1000x1000-000000-80-0-0.jpg",
    md5_image: "ab69ef08c72c425dbf21889c84035966",
    tracklist: "https://api.deezer.com/album/600656732/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage src={track?.album.cover} alt={`${track.album.title}'s cover`}></TrackImage>
          <TrackInfoTextWrapper>
            <Text>{track?.title}</Text>
            <ArtistName>{track?.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>

        <ControlsWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play />
          </IconButton>
          <IconButton>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>

        <ProgressWrapper>
          <TrackTime>00:00</TrackTime>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime>12:00</TrackTime>
        </ProgressWrapper>

        <VolumeWrapper>
          <IconButton height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
