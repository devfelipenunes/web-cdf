import { useContext, useEffect } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import { BlogOrganism } from "../../components/organismos/BlogOrganism";
import { BannerOrganism } from "../../components/organismos/BannerOrganism";
import { ClientsOrganism } from "../../components/organismos/ClientsOrganism";
import { WelcomeOrganism } from "../../components/organismos/WelcomeOrganism";
import { SimulationOrganism } from "../../components/organismos/SimulationOrganismo";
import { PlansOrganism } from "../../components/organismos/PlansOrganism";
import api from "@/services/api";

export default function Home() {
  const { allSiteTexts } = useContext(MyContext) as IMyContext;

  const { setAllSiteTexts, showMenu, setShowMenu } = useContext(
    MyContext
  ) as IMyContext;

  async function item() {
    const response = await api.get("/pages");
    localStorage.setItem("home", JSON.stringify(response));
    setAllSiteTexts(response as any);
  }

  useEffect(() => {
    item();
  }, []);

  return (
    <>
      <WelcomeOrganism data={allSiteTexts} />

      <PlansOrganism data={allSiteTexts} />

      <SimulationOrganism data={allSiteTexts} />

      {allSiteTexts?.data.paulo.banner[0].enable && (
        <BannerOrganism data={allSiteTexts} />
      )}

      <BlogOrganism />

      <ClientsOrganism />

      {allSiteTexts?.data.paulo.banner[1].enable && (
        <BannerOrganism data={allSiteTexts} />
      )}
    </>
  );
}
