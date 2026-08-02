import { AlemDoCodigo } from "@/components/alem-do-codigo";
import { BrandOutro } from "@/components/brand-outro";
import { Depoimentos } from "@/components/depoimentos";
import { Empresas } from "@/components/empresas";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Formacoes } from "@/components/formacoes";
import { Garantia } from "@/components/garantia";
import { Hero } from "@/components/hero";
import { ModulosBonus } from "@/components/modulos-bonus";
import { Professores } from "@/components/professores";
import { ProjetosReais } from "@/components/projetos-reais";
import { Reel } from "@/components/reel";
import { Salarios } from "@/components/salarios";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reel />
      <Formacoes />
      <AlemDoCodigo />
      <Empresas />
      <ProjetosReais />
      <Depoimentos />
      <Professores />
      <ModulosBonus />
      <Salarios />
      <Garantia />
      <Faq />
      <Footer />
      <BrandOutro />
    </main>
  );
}
