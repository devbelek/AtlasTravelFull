import React, { ReactNode } from "react";
import styles from "./offer_cards_list.module.css";
import Container from "../../layout/container/Container";
import PaginationControls from "../../ui/pagination_controls/PaginationControls";

type OffersListProps = {
  children: ReactNode;
  itemQuantity: number;
  url: string;
  per_page: any;
};

const OffersList: React.FC<OffersListProps> = ({
  children,
  itemQuantity,
  url,
  per_page }) => {
  return (
    <section className={styles.cards_section}>
      <Container isVisible={true}>
        <div className={styles.cards_flex}>{children}</div>
        <PaginationControls itemQuantity={itemQuantity} url={url} per_page={per_page}/>
      </Container>
    </section>
  );
};

export default OffersList;
