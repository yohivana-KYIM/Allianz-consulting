import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceExplorer from "@/components/services/ServiceExplorer";

export const metadata: Metadata = {
  title: "Services — Allianz Consulting Sarl",
  description:
    "Huit domaines d'intervention : fiscalité, comptabilité, management, ingénierie financière, audit, douane & transit, ressources humaines, création d'entreprise.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader variant="sub" current="services" />
      <ServiceExplorer />
      <SiteFooter variant="sub" />
    </>
  );
}
