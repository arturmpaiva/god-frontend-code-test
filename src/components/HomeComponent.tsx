import React from "react";
import { Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import { Spacer } from "./Spacer";
import styles from "../../public/css/home.module.css";
import PaginationDesktop from "./PaginationDesktop";
import PaginationMobile from "./PaginationMobile";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();

  const onClickLeft = () => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    cardList?.scrollTo({ left: scrollPosition - cardSize });
  };
  const onClickNavigate = (left: boolean) => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize });
    else cardList?.scrollTo({ left: scrollPosition + cardSize });
  };

  const onClickMobile = (index: number) => {};

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)}
      />
      <PaginationMobile
        onClick={onClickMobile}
        total={cars.length}
      ></PaginationMobile>
    </div>
  );
};
