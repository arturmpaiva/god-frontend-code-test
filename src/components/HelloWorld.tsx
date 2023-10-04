import React from "react";
import { Button, Block } from "vcc-ui/dist/components";
import { useCars } from "../hooks/useCars";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  console.log(cars);
  return (
    <Block extend={{ padding: 20 }}>
      <Button>Click me!</Button>
    </Block>
  );
};
