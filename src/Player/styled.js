import { SubText } from "components/ui/Typography";
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
  height: 105px;
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

export const ArtistName = styled.div`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  gap: 22px;
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
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
`;
