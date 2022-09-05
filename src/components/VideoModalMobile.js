import React from "react"
import {
  Overlay,
  Content,
  CloseContainer,
} from "../styles/StyledVideoModalMobile"
import VideoList from "./VideoModalMobileVidList"

const VideoModalMobileComponent = ({ videos, handleClose }) => (
  <Overlay>
    <Content>
      <CloseContainer onClick={handleClose}>
        <p>CLOSE</p>
      </CloseContainer>
      <VideoList videos={videos} />
    </Content>
  </Overlay>
)

export default VideoModalMobileComponent
