import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AdjustLightColor from "../../Components/AdjustLightColor";

const LivingRoom = () => {
  const [musicState, setMusicState] = useState({
    color: "#808080",
    isToggled: false,
  });

  const toggleMusicMode = () => {
    axios
      .post(`http://localhost:5000/musictoggle`, {})
      .then((res) => {
        if (musicState.isToggled === false) {
          setMusicState({ color: "#7fff7f", isToggled: true }); //Sets button color to be green
        } else {
          setMusicState({ color: "#808080", isToggled: false });
        }
      })
      .catch((err) => {
        setMusicState({ color: "#808080", isToggled: false });
      });
  };



  const Container = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const ToggleMusicModeButton = styled.button`
    background: ${musicState.color};
  `;

  const Title = styled.h1`
  color:"#4A90E2";
  margin:0;
  `
  const TitleContainer = styled.div`
  text-align:center;
  background:#e8e8e8;
  `

  return (
    <div>
    <TitleContainer>
    <Title>Living Room Lights</Title>

    </TitleContainer>
      <Container>
      <AdjustLightColor requestUrl="http://localhost:5555/api/v1/lights/couch" lightLocation="Couch"/>
      <AdjustLightColor requestUrl="http://localhost:5555/api/v1/lights/stairs" lightLocation="Stairs"/>
      </Container>
      <Container>
      <AdjustLightColor requestUrl="http://localhost:5555/api/v1/lights/ceiling" lightLocation="Ceiling"/>
      <AdjustLightColor requestUrl="http://localhost:5555/api/v1/lights/floor" lightLocation="Floor"/>
      </Container>
      <div>
        <h3>Toggle on the music</h3>
        <ToggleMusicModeButton onClick={toggleMusicMode}>
          Toggle Music{" "}
        </ToggleMusicModeButton>
      </div>
    </div>
  );
};

export default LivingRoom;
