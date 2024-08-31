import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.open ? "flex-start" : "center")};
  background-color: ${({ theme, open }) =>
    open ? theme.colors.black : theme.colors.secondaryBlack};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${PLAYER_HEIGHT}px;
  z-index: ${({ theme }) => theme.zIndex["30"]};

  ${device.lg} {
    height: ${(props) =>
      props.open ? `calc(100vh - ${MOBILE_PLAYER_HEIGHT}px)` : `${MOBILE_PLAYER_HEIGHT}px`};
    border-top-right-radius: ${(props) => (props.open ? 0 : "25px")};
    border-top-left-radius: ${(props) => (props.open ? 0 : "25px")};
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;

  @media (max-width: 1400px) {
    min-width: 280px;
  }

  ${device.lg} {
    gap: 15px;
  }
`;

export const MobileTrackRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;

  ${device.md} {
    height: 45px;
    width: 45px;
  }
`;

export const BigTrackImage = styled.img`
  height: 311px;
  width: 311px;
  border-radius: 10px;
  margin: 0 auto 37px;
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

  ${device.lg} {
    gap: 2px;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin: ${(props) => (props.open ? "0 auto" : 0)};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;

  ${device.xl} {
    margin: ${(props) => (props.open ? "40px 0" : 0)};
  }
`;

export const VolumeWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  margin-left: 130px;
  min-width: 180px;

  ${device.xl} {
    margin: ${(props) => (props.open ? "48px auto 0" : "0 0 0 60px")};
    width: ${(props) => (props.open ? "65%" : "auto")};
  }
`;

export const TrackTime = styled(SubText)`
  margin: 0 20px;
  width: 80px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};

  ${device.lg} {
    margin: ${(props) => (props.last ? "0 0 0 20px" : 0)};
    text-align: ${(props) => (props.last ? "right" : "inherit")};
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: 18px;
  line-height: 27px;
  padding: 10px 0;
  margin: 28px 0 30px;
  cursor: pointer;
`;
