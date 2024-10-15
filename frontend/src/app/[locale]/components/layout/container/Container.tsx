import type { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  isVisible?: boolean;
}

export default function Container({ children, isVisible = false }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`${styles.global_container} ${isVisible ? styles.global_container_visible : ''}`}>
      {children}
    </div>
  );
}
