import { NoiseOrb } from "@/components/ui/noise-orb";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <NoiseOrb className="absolute inset-0 size-full opacity-90" />
      <BackgroundBeams className="opacity-30" />
    </div>
  );
}
