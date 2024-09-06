import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
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
  TrackTitle,
  MobileTrackRow,
  BackButton,
  BigTrackImage,
} from "./styled";
import { ContentWrapper } from "Layout";
import IconButton from "components/ui/IconButton";
import { SkipLeft, SkipRight, Play, Volume, Pause } from "components/ui/Icons";
import Slider from "rc-slider";
import { theme } from "styles/Theme";
import { formatSecondsToMSS } from "utils/time";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { useLocation } from "react-router-dom";

function Player() {
  const { width } = useWindowSize();

  const {
    toggleOpen,
    togglePlay,
    toggleVolume,
    handleNextSong,
    handlePrevSong,
    onTimeUpdate,
    onTrackTimeDrag,
    onVolumeChange,
    isPlaying,
    track,
    audioRef,
    playerState,
  } = usePlayer({ width });

  if (!track) return null;

  return (
    <Wrapper onClick={playerState.isOpened ? null : toggleOpen} open={playerState.isOpened}>
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        hidden
        onEnded={handleNextSong}
      />
      <PlayerLayout
        track={track}
        handlePrevSong={handlePrevSong}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        handleNextSong={handleNextSong}
        playerState={playerState}
        onTrackTimeDrag={onTrackTimeDrag}
        toggleVolume={toggleVolume}
        toggleOpen={toggleOpen}
        onVolumeChange={onVolumeChange}
        width={width}
        open={playerState.isOpened}
      />
    </Wrapper>
  );
}

function PlayerLayout({
  track,
  handlePrevSong,
  togglePlay,
  isPlaying,
  handleNextSong,
  playerState,
  onTrackTimeDrag,
  toggleVolume,
  onVolumeChange,
  width,
  toggleOpen,
  open,
}) {
  if (open) {
    return (
      <ContentWrapper display="flex" direction="column" gap={14}>
        <BackButton onClick={toggleOpen}>Back</BackButton>
        <BigTrackImage
          src={track?.album?.cover_big}
          alt={`${track.album.title}'s cover`}
        ></BigTrackImage>
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackInfoTextWrapper>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist?.name}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
        </MobileTrackRow>

        <ProgressWrapper open={1}>
          <TrackTime>{formatSecondsToMSS(playerState.currentTime)}</TrackTime>
          <Slider
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            onChange={onTrackTimeDrag}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime last={1} grey={1}>
            {formatSecondsToMSS(playerState.duration)}
          </TrackTime>
        </ProgressWrapper>
        <ControlsWrapper open={1}>
          <IconButton onClick={handlePrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <VolumeWrapper open={1}>
          <IconButton onClick={toggleVolume} height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            step={0.01}
            min={0}
            max={1}
            value={playerState.volume}
            onChange={onVolumeChange}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    );
  }

  if (width < breakpoints.lg) {
    return (
      <ContentWrapper display="flex" items="center" direction="column" gap={14}>
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackImage src={track?.album?.cover} alt={`${track.album.title}'s cover`}></TrackImage>
            <TrackInfoTextWrapper>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist?.name}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
          <IconButton
            onClick={(event) => {
              event.stopPropagation(), togglePlay();
            }}
            width={55}
            height={55}
            withBackground
          >
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
        </MobileTrackRow>

        <ProgressWrapper onClick={(event) => event.stopPropagation()}>
          <TrackTime>{formatSecondsToMSS(playerState.currentTime)}</TrackTime>
          <Slider
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            onChange={onTrackTimeDrag}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime last={1} grey={1}>
            {formatSecondsToMSS(playerState.duration)}
          </TrackTime>
        </ProgressWrapper>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper display="flex" items="center">
      <TrackInfoWrapper>
        <TrackImage src={track?.album?.cover} alt={`${track.album.title}'s cover`}></TrackImage>
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title}</TrackTitle>
          <ArtistName>{track?.artist?.name}</ArtistName>
        </TrackInfoTextWrapper>
      </TrackInfoWrapper>

      <ControlsWrapper>
        <IconButton onClick={handlePrevSong}>
          <SkipLeft />
        </IconButton>
        <IconButton onClick={togglePlay} width={55} height={55} withBackground>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
        <IconButton onClick={handleNextSong}>
          <SkipRight />
        </IconButton>
      </ControlsWrapper>

      <ProgressWrapper>
        <TrackTime>{formatSecondsToMSS(playerState.currentTime)}</TrackTime>
        <Slider
          step={0.2}
          min={0}
          max={playerState.duration}
          value={playerState.currentTime}
          onChange={onTrackTimeDrag}
          style={{ padding: "3px 0" }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
        <TrackTime grey={1}>{formatSecondsToMSS(playerState.duration)}</TrackTime>
      </ProgressWrapper>

      <VolumeWrapper>
        <IconButton onClick={toggleVolume} height={24} width={24}>
          <Volume />
        </IconButton>
        <Slider
          step={0.01}
          min={0}
          max={1}
          value={playerState.volume}
          onChange={onVolumeChange}
          style={{ padding: "3px 0" }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
      </VolumeWrapper>
    </ContentWrapper>
  );
}

function usePlayer(width) {
  const location = useLocation();
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);

  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.7,
    isOpened: false,
  });
  const audioRef = useRef();

  // TIME
  // for button play or pause
  const togglePlay = () => {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
  };

  const toggleOpen = () => {
    if (width > breakpoints.lg && !playerState.isOpened) return;
    setPlayerState((prev) => ({ ...prev, isOpened: !prev.isOpened }));
  };

  // when songs starts, updates the time (seconds)
  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  // when songs starts, updates the time (seconds)
  const onTrackTimeDrag = (newTime) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  // VOLUME
  // to mute volume button
  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  };

  // when songs starts, updates the time (seconds)
  const onVolumeChange = (newVolume) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });
  const handlePrevSong = () => dispatch({ type: actions.PREV_SONG });

  useEffect(() => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, track, isPlaying]);

  useEffect(() => {
    if (playerState.isOpened) toggleOpen();
  }, [location]);

  useEffect(() => {
    if (playerState.isOpened) {
      window.scroll(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [playerState.isOpened]);

  if (width > breakpoints.lg && playerState.isOpened) toggleOpen();

  return {
    toggleOpen,
    togglePlay,
    toggleVolume,
    handleNextSong,
    handlePrevSong,
    onTimeUpdate,
    onTrackTimeDrag,
    onVolumeChange,
    isPlaying,
    track,
    audioRef,
    playerState,
  };
}

PlayerLayout.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
      cover_big: PropTypes.string,
    }),
  }),
  handlePrevSong: PropTypes.func,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  handleNextSong: PropTypes.func,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
  onTrackTimeDrag: PropTypes.func,
  toggleVolume: PropTypes.func,
  onVolumeChange: PropTypes.func,
  width: PropTypes.number,
  toggleOpen: PropTypes.func,
  open: PropTypes.bool,
};
export default Player;
