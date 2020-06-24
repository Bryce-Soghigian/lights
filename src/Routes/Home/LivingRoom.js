import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { SketchPicker } from 'react-color';

const LivingRoom = () => {
  const [musicState, setMusicState] = useState({
    color: "#808080",
    isToggled: false,
  });
  const [lightColorState,setLightColorState] = useState({couchColor:"#e8e8e8"})
  const ToggleMusicModeButton = styled.button`
  background:${musicState.color}
  `;

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
  const handleCouchColorChange = (color) =>{
    setLightColorState({...lightColorState,couchColor: color.hex})
  }
  return (
    <div>
      <div>
      <h3>Toggle on the music</h3>
      <ToggleMusicModeButton onClick={toggleMusicMode} >Toggle Music </ToggleMusicModeButton>
      </div>
      <div>
        <h3>Change Couch Light Colors</h3>
          <SketchPicker color={lightColorState.couchColor} onChange={handleCouchColorChange}/>
      </div>

    </div>
  );
};

export default LivingRoom;
