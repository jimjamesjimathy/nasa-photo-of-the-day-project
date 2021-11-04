import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ReadableText } from "./styled-components/ReadableText";
// import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styled from 'styled-components';



const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-image: linear-gradient(to left top,var(--lBlue), var(--text));
`;

const Titleh1 = styled.h1`
  font-size: 5rem;
  color: #000;
`;


export default class Objects extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <StyledContainer className="card">
        {/* Title */}
        <Titleh1>{this.props.data[0].title}</Titleh1>
        {/* Youtube Video */}
        {this.props.data[0].url.includes("image") ? (
          <Tooltip title="Click on image to view the image in HD">
            <img
              src={this.props.data[0].url}
              alt="Space Img"
              onClick={() => window.open(this.props.data[0].hdurl, "_blank")}
            />
          </Tooltip>
        ) : (
          // Embeded Youtube Video
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            align="middle"
          />
        )}

        {/* Description */}
        <ReadableText>{this.props.data[0].explanation}</ReadableText>
        {/* <Placeholder dates={this.state.startDate} /> */}
      </StyledContainer>
    );
  }
}
