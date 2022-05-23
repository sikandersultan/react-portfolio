import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars.githubusercontent.com/u/94651057?v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Sikander Mirza"
          />
          <p style={{ fontSize: "27px" }}>
          A Computer Science student currently
          studying in University of Stirling. Currently
          doing my bachelors in Computing Science
          and looking to do masters in AI and Machine
          Learning Engineering. I am fairly proficient in
          full-stack web development, in a junior role as
          I have not yet had any official experience yet. I
          am generally good at understanding new
          computer programs, which is why I've gained
          some basic skills in many different software
          and mediums. Like digital drawing or 3D
          rendering mediums like Fusion 360.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
