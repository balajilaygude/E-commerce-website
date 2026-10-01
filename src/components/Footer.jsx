export default function Footer({ onClear }) {
  const handleClear = () => {
    const confirmed = window.confirm(
      "Clear your dare history? Previously shown dares can appear again."
    );

    if (confirmed) {
      onClear();
    }
  };

  return (
    <footer className="absolute bottom-0 left-0 w-full px-6 py-5">
      <div className="flex justify-center">
        <button
          onClick={handleClear}
          className="text-xs text-neutral-400 transition-colors hover:text-neutral-700"
        >
          clear history
        </button>
        <div>
          cool
        </div>
      </div>
    </footer>
  );
}