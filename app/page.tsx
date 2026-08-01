import { AlemDoCodigo } from "@/components/alem-do-codigo";
import { BrandOutro } from "@/components/brand-outro";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Formacoes } from "@/components/formacoes";
import { Garantia } from "@/components/garantia";
import { Hero } from "@/components/hero";
import { ModulosBonus } from "@/components/modulos-bonus";
import { Professores } from "@/components/professores";
import { ProjetosReais } from "@/components/projetos-reais";
import { Reel } from "@/components/reel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reel />
      <Formacoes />
      <AlemDoCodigo />
      <ProjetosReais />
      <Professores />
      <ModulosBonus />
      <Garantia />
      <Faq />
      <Footer />
      <BrandOutro />
    </main>
  );
}
