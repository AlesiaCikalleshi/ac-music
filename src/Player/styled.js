import { PLAYER_HEIGHT } from "common/constants";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${PLAYER_HEIGHT}px;
  z-index: ${({ theme }) => theme.zIndex["30"]};
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;
`;

export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 15px;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  margin-left: 130px;
  min-width: 180px;
`;

export const TrackTime = styled(SubText)`
  margin: 0 20px;
  width: 80px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
`;
