
export default function DareButton({
  children,
  onClick,
  secondary = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        button-shine
        group
        rounded-full
        px-8 py-4
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        active:scale-90

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-neutral-900
        focus-visible:ring-offset-4

        ${
          secondary
            ? `
              border
              border-neutral-200
              bg-white
              text-neutral-900
              shadow-sm
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-lg
            `
            : `
              bg-neutral-950
              text-white
              shadow-lg
              shadow-neutral-950/10
              hover:-translate-y-1
              hover:bg-neutral-800
              hover:shadow-xl
              hover:shadow-neutral-950/20
            `
        }
      `}
    >
    </button>
  );
}