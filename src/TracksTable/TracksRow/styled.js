import IconButton from "components/ui/IconButton";
import { Text, SubText } from "components/ui/Typography";
import styled from "styled-components";

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    .text {
      display: none;
    }

    .icon {
      display: block;
    }
    background-color: ${({ theme }) => theme.colors.lightWhite};
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackInfoImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const TrackInfoTextWraper = styled(TableData)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SongNumberText = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
`;

export const IconWrapper = styled.div`
  display: none;
  width: 20px;
  width: 20px;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TrackSubText = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
