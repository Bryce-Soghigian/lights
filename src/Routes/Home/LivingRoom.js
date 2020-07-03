import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SketchPicker } from "react-color";
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



  return (
    <div>
      <Container>
      <AdjustLightColor requestUrl="http://localhost:5555/api/v1/lights/couch" lightLocation="couch"/>
      {/* <AdjustLightColor />
      <AdjustLightColor />
      <AdjustLightColor /> */}
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
