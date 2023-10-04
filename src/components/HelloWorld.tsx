import React from "react";
import { Button, Block } from "vcc-ui/dist/components";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}{" "}
    </Block>
  );
};
