export function HeroCta() {
  return (
    <>
      <div className="gradient-border-pill mt-6 inline-block opacity-0 animate-fade-up [animation-delay:3.2s]">
        <button
          type="button"
          className="group relative z-10 inline-flex items-center overflow-hidden rounded-full bg-ink-button px-7 py-3.5 text-sm font-medium text-white"
        >
          <span className="pointer-events-none absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-pop group-hover:translate-x-0" />
          <span className="relative z-10 inline-flex items-center gap-2">
            Quero ser aluno
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
