import React from "react";
import { Button, Block } from "vcc-ui/dist/components";

export const HelloWorld: React.FC = () => {
  return (
    <Block extend={{ padding: 20 }}>
      <Button>Click me!</Button>
    </Block>
  );
};
