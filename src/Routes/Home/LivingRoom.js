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
    couchColor: "e8e8e8",
    ceilingColor: "e8e8e8",
    stairsColor: "e8e8e8",
    floorColor: "e8e8e8",
  });
  const [message, setMessage] = useState({ message: "" });

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

  const updateLightColor = (url, color) => {
    console.log("Color", color);
    console.log(`${url}/${color}`);

    axios
      .get(`${url}/${color}`)
      .then((res) => {
        console.log(res, "res");
        setMessage({ message: `Successfully Set Lights To ${color}` });
      })
      .catch((err) => {
        setMessage({
          message: `Failed To Set Lights To ${color} because of ${err.message}`,
        });
      });
  };

  const handleCouchColorChange = (color) => {
    setLightColorState({ ...lightColorState, couchColor: color.hex });
  };
  const handleCeilingChange = (color) => {
    setLightColorState({ ...lightColorState, ceilingColor: color.hex });
  };
  const handleStairsChange = (color) => {
    setLightColorState({ ...lightColorState, stairsColor: color.hex });
  };
  const handleFloorChange = (color) => {
    setLightColorState({ ...lightColorState, floorColor: color.hex });
  };

  const Container = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const ToggleMusicModeButton = styled.button`
    background: ${musicState.color};
  `;
  const StairsContianer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${lightColorState.stairsColor};
  `;
  const CouchContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${lightColorState.couchColor};
  `;

  const CouchPostButton = styled.button`
    border: 2px black solid;
    background: white;
    color: ${lightColorState.couchColor};
  `;

  const LivingRoomCeilingContainer = styled.div`
    width: 50vw;
    background: ${lightColorState.ceilingColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const CeilingPostButton = styled.button`
    border: 2px black solid;
    background: white;
    color: ${lightColorState.ceilingColor};
  `;

  const StairsPostButton = styled.button`
    border: 2px black solid;
    background: white;
    color: ${lightColorState.stairsColor};
  `;

  const FloorContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${lightColorState.floorColor};
  `;
  const FloorPostButton = styled.button`
    border: 2px black solid;
    background: white;
    color: ${lightColorState.floorColor};
  `;

  return (
    <div>
      <h3>{message.message}</h3>

      <Container>
        <CouchContainer>
          <h3>Change Couch Light Colors</h3>
          <SketchPicker
            color={lightColorState.couchColor}
            onChange={handleCouchColorChange}
          />
          <CouchPostButton
            onClick={() => {
              let newState = Array.from(lightColorState.couchColor);
              newState.shift();
              newState = newState.join("");
              console.log(String(newState), "newState");
              setLightColorState({ ...lightColorState, couchColor: newState });
              updateLightColor(
                `http://127.0.0.1:5000/api/v1/lights/couch`,
                newState
              );
            }}
          >
            Change Lights
          </CouchPostButton>
        </CouchContainer>
        <StairsContianer>
          <h3>Change Stair Lights</h3>
          <SketchPicker
            color={lightColorState.stairsColor}
            onChange={handleStairsChange}
          />
          <StairsPostButton
            onClick={() =>
              updateLightColor(
                `http://localhost:5555/lights/stairs`,
                lightColorState.stairsColor
              )
            }
          >
            Change Lights
          </StairsPostButton>
        </StairsContianer>
      </Container>
      <Container>
        <LivingRoomCeilingContainer>
          <h3>Change Ceiling Lights</h3>
          <SketchPicker
            color={lightColorState.ceilingColor}
            onChange={handleCeilingChange}
          />
          <CeilingPostButton
            onClick={() =>
              updateLightColor(
                `http://localhost:5555/lights/livingroominceiling`,
                lightColorState.ceilingColor
              )
            }
          >
            Change Lights
          </CeilingPostButton>
        </LivingRoomCeilingContainer>
        <FloorContainer>
          <h3>Change Floor Lights</h3>
          <SketchPicker
            color={lightColorState.floorColor}
            onChange={handleFloorChange}
          />
          <FloorPostButton
            onClick={() =>
              updateLightColor(
                `http://localhost:5555/lights/floor`,
                lightColorState.floorColor
              )
            }
          >
            Change Lights
          </FloorPostButton>
        </FloorContainer>
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
