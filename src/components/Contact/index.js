import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://avatars.githubusercontent.com/u/94651057?v=4"
            class="pr-4 pb-3 img-fluid"
            alt="github pfp"
          />
          <h4>
          
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="phone">
            <MDBIcon icon="phone-alt" /> +44 7783 060374
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:sikandersultanmirza@gmailcomm">
            <MDBIcon icon="envelope" /> sikandersultanmirza@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
