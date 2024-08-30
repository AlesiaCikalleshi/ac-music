import React from "react";
import PropTypes from "prop-types";
import {
  TableData,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWraper,
  TrackTitle,
  TrackSubText,
  SongNumberText,
  StyledTrackRow,
  IconWrapper,
  StyledIconButton,
} from "./styled";
import { SubText } from "components/ui/Typography";
import { formatSecondsToMSS } from "utils/time";
import { Heart, Play, Pause } from "components/ui/Icons";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { breakpoints } from "styles/BreakPoints";

function TrackRow({
  track,
  index,
  onClick,
  isPlaying,
  handleSaveTrackClick,
  isSaved,
  screenWidth,
}) {
  const isMobileLayout = screenWidth > breakpoints.md;
  return (
    <StyledTrackRow key={track?.id} onClick={() => onClick(track)}>
      <TableData>
        <SongNumberText className="text">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={27} height={27} />}
        </SongNumberText>
        <IconWrapper className="icon">{isPlaying ? <Pause /> : <Play />}</IconWrapper>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album?.cover} alt={`${track?.album?.title}'s cover`} />
        ) : (
          <Skeleton
            width={isMobileLayout ? 65 : 45}
            height={isMobileLayout ? 65 : 45}
            borderRadius={isMobileLayout ? 15 : 10}
          />
        )}
        <TrackInfoTextWraper>
          <TrackTitle>{track?.title || <Skeleton width={isMobileLayout ? 320 : 110} />}</TrackTitle>
          <TrackSubText>
            {track?.artist?.name || <Skeleton width={isMobileLayout ? 250 : 80} />}
          </TrackSubText>
        </TrackInfoTextWraper>
      </TrackInfo>
      {screenWidth > breakpoints.md && (
        <TableData>
          <SubText>
            {track?.duration ? formatSecondsToMSS(track?.duration) : <Skeleton width={48} />}
          </SubText>
        </TableData>
      )}
      {screenWidth > breakpoints.md && (
        <TableData>
          <SubText>{track?.album?.title || <Skeleton width={350} />}</SubText>
        </TableData>
      )}
      <TableData>
        {track ? (
          <StyledIconButton
            width={25}
            height={25}
            onClick={(event) => {
              event.stopPropagation(), handleSaveTrackClick(track.id);
            }}
          >
            <Heart fill={isSaved ? theme.colors.white : "none"} />
          </StyledIconButton>
        ) : (
          <Skeleton width={25} height={25} style={{ margin: "0 auto", display: "block" }} />
        )}
      </TableData>
    </StyledTrackRow>
  );
}

TrackRow.propTypes = {
  onClick: PropTypes.func,
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
    }),
  }),
  index: PropTypes.number,
  isPlaying: PropTypes.bool,
  handleSaveTrackClick: PropTypes.func,
  isSaved: PropTypes.bool,
  screenWidth: PropTypes.number,
};

export default TrackRow;
