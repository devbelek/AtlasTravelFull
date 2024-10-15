import type { PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FixedContacts from "./fixed_contacts/FixedContacts";

export default function GlobalLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <FixedContacts />
      {children}
      <Footer />
    </>
  );
}
