import styles from "../../public/css/components/paginationMobile.module.css";

interface PaginationMobileProps {
  total: number;
  onClick: (i: number) => void;
}

export default function PaginationMobile({
  total,
  onClick,
}: PaginationMobileProps) {
  return (
    <div className={styles.btnWrapper}>
      {Array.from({ length: total }).map((element, i) => (
        <button className={styles.btn} key={i} onClick={() => onClick}></button>
      ))}
    </div>
  );
}
