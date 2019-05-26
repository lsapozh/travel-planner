import React from "react";
import { Container, Title, GoogleMap } from "./components";

const Map = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <GoogleMap
        src="https://www.google.com/maps/d/u/0/embed?mid=1GYpPaCoeitsy00VIYzXP91Ar3rvn-vAR"
        // src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60197202.859383695!2d-17.699356816918986!3d22.944861293896466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1529761129410"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </Container>
  );
};

export default Map;
