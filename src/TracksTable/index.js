import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableHeading,
  TableData,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWraper,
  TrackTitle,
  TrackSubText,
  SongNumberText,
  Line,
} from "./styled";
import { SubText } from "components/ui/Typography";
import { formatSecondsToMSS } from "utils/time";
import IconButton from "components/ui/IconButton";
import { Heart } from "components/ui/Icons";

function TracksTable({ tracks }) {
  console.log(tracks);
  console.log(tracks?.duration);
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Time</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Album Name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colspan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <tr key={track.id}>
            <TableData>
              <SongNumberText>{String(index + 1).padStart(2, "0")}</SongNumberText>
            </TableData>
            <TrackInfo>
              <TrackInfoImage src={track?.album?.cover} alt={`${track.album.title}]s cover`} />
              <TrackInfoTextWraper>
                <TrackTitle> {track.title}</TrackTitle>
                <TrackSubText> {track.artist.name}</TrackSubText>
              </TrackInfoTextWraper>
            </TrackInfo>
            <TableData>
              <SubText>{formatSecondsToMSS(track?.duration)}</SubText>
            </TableData>
            <TableData>
              <SubText>{track.album.title}</SubText>
            </TableData>
            <TableData>
              <IconButton width={25} height={25}>
                <Heart />
              </IconButton>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default TracksTable;
