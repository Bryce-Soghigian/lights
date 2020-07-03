import React,{useState} from 'react'
import styled from "styled-components";
import axios from "axios";
import { SketchPicker } from "react-color";

export default function AdjustLightColor(props) {
    /**
     * REQUIRED PROPS
     * lightLocation = a string of the location this light is located
     * requestUrl = server url that will update the light
     */
    const [lightColor,setColor] = useState("#e8e8e8");
    const [success,setSuccess] = useState("")
    const AdjustLightColorContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${lightColor};
    
    `
    const AdjustLightButton = styled.button`
    background: black;
    color: ${lightColor};
    
    `
    const Message = styled.h3`
    text-transform:bold;
    `
    const removeHash = (hexcode) => {
        hexcode = hexcode.split("").filter(item => item !== "#").join("")
        return hexcode
    }
    const handleChange = color => {
        console.log(`Changing color to ${color}`)

        console.log()
        setColor(color.hex)
    }
    const updateLights = (color) => {
        console.log("REQUEST URL: " ,`${props.requestUrl}/${color}`)
        axios.get(`${props.requestUrl}/${color}`)
        .then(res => {
           console.log(res) 
           setSuccess(`Successfully Updated Lights to ${lightColor}`)
        }).catch(err => {
            console.log(err)
            setSuccess(`Failed to update lights because of ${err.message}`)
        })
    }

    return (
        <AdjustLightColorContainer>
            <Message>{success}</Message>
            <h3>Change {props.lightLocation} Color</h3>
            <SketchPicker
            color={lightColor}
            onChange={handleChange}
            />
            <AdjustLightButton onClick={() => updateLights(removeHash(lightColor))}>Update {props.lightLocation}</AdjustLightButton>
        </AdjustLightColorContainer>
    )
}
