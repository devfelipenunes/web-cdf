import "@/styles/globals.css";
import "@/styles/index.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { IMyContext, MyContext, MyProvider } from "@/context/MyContext";
import { useContext, useEffect } from "react";
import api from "@/services/api";
import { NewsOrganism } from "@/components/organismos/NewsOrganism";
import { FooterOrganism } from "@/components/organismos/FooterOrganism";
import { NavBarMolecule } from "@/components/moleculas/NavBarMolecule";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <ThemeProvider>
        <NavBarMolecule />
        <Component {...pageProps} />
        <NewsOrganism />
        <FooterOrganism />
      </ThemeProvider>
    </MyProvider>
  );
}
