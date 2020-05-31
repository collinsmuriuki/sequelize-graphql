import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

const Hero = ({ icon, headerMessage }) => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name={icon} circular />
        <Header.Content>{headerMessage}</Header.Content>
      </Header>
    </div>
  );
};

export default Hero;
