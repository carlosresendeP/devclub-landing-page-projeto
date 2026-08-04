import { AlemDoCodigo } from "@/components/sections/alem-do-codigo";
import { BrandOutro } from "@/components/sections/brand-outro";
import { Certificado } from "@/components/sections/certificado";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Empresas } from "@/components/sections/empresas";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Formacoes } from "@/components/sections/formacoes";
import { Garantia } from "@/components/sections/garantia";
import { Hero } from "@/components/sections/hero";
import { ModulosBonus } from "@/components/sections/modulos-bonus";
import { Professores } from "@/components/sections/professores";
import { ProjetosReais } from "@/components/sections/projetos-reais";
import { Reel } from "@/components/sections/reel";
import { Salarios } from "@/components/sections/salarios";
import { Tecnologias } from "@/components/sections/tecnologias";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reel />
      <Formacoes />
      <AlemDoCodigo />
      <Empresas />
      <ProjetosReais />
      <Tecnologias />
      <Depoimentos />
      <Professores />
      <Certificado />
      <ModulosBonus />
      <Salarios />
      <Garantia />
      <Faq />
      <Footer />
      <BrandOutro />
    </main>
  );
}
