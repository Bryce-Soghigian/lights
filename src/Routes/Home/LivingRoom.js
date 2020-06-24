import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SketchPicker } from "react-color";

const LivingRoom = () => {
  const [musicState, setMusicState] = useState({
    color: "#808080",
    isToggled: false,
  });
  const [lightColorState, setLightColorState] = useState({
    couchColor: "#e8e8e8",
    ceilingColor:"#e8e8e8"
  });
  const [message, setMessage] = useState({message:""});



  const ToggleMusicModeButton = styled.button`
    background: ${musicState.color};
  `;

  const CouchContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  `
  const CouchPostButton = styled.button`
    background: ${lightColorState.couchColor};
  `;
  const LivingRoomCeilingContainer = styled.div`
    display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  `


  const toggleMusicMode = () => {
    axios
      .post(`http://localhost:5555/musictoggle`, {})
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

  const updateLightColor = (url, color) => {
    console.log(url, color);
    axios
      .get(`${url}/${color}`)
      .then((res) => {
        setMessage({message: `Successfully Set Lights To ${color}`});
      })
      .catch((err) => {
        setMessage({message:`Failed To Set Lights To ${color} because of ${err.message}`});
      });
  };
  const handleCouchColorChange = (color) => {
    setLightColorState({ ...lightColorState, couchColor: color.hex });
  };
  const handleCeilingChange = (color) => {
    setLightColorState({...lightColorState, ceilingColor:color.hex })
  }
  return (
    <div>
      <h3>{message.message}</h3>
      <div>
        <h3>Toggle on the music</h3>
        <ToggleMusicModeButton onClick={toggleMusicMode}>
          Toggle Music{" "}
        </ToggleMusicModeButton>
      </div>
      <CouchContainer>
        <h3>Change Couch Light Colors</h3>
        <SketchPicker
          color={lightColorState.couchColor}
          onChange={handleCouchColorChange}
        />
        <CouchPostButton
          onClick={() =>
            updateLightColor(
              `http://localhost:5555/lights/couch`,
              lightColorState.couchColor
            )
          }
        >
          Change Lights
        </CouchPostButton>
        
      </CouchContainer>
      <LivingRoomCeilingContainer>
        <h3>Change Ceiling Lights</h3>
        <SketchPicker
        color={lightColorState.ceilingColor}
        onChange={handleCeilingChange}
        />
      </LivingRoomCeilingContainer>
    </div>
  );
};

export default LivingRoom;
