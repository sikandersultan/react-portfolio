import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://user-images.githubusercontent.com/94229291/163630896-0de15411-187e-41ca-9fbe-d6f947838e91.jpg"
            alt="Fight Club"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">MovieWatchList</MDBCardTitle>
            <MDBCardText>
              MOVVIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE AAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </MDBCardText>
            <MDBBtn
              href="https://github.com/JosephCurtis1999/MovieWatchList"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
