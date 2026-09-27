
import DareButton from "./components/DareButton";
import DareCard from "./components/DareCard";
import Footer from "./components/Footer";
import { useDares } from "./hooks/useDares";

export default function App() {
  const {
    currentDare,
    getNextDare,
    clearHistory,
  } = useDares();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa] text-neutral-950">

      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-neutral-100
          blur-3xl
          animate-float-slow
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-96
          w-96
          rounded-full
          bg-neutral-100
          blur-3xl
          animate-float-reverse
        "
      />

      {/* Tiny floating shape */}
      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[35%]
          h-3
          w-3
          rounded-full
          bg-neutral-300
          animate-float-slow
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[25%]
          h-2
          w-2
          rounded-full
          bg-neutral-300
          animate-float-reverse
        "
      />

      {/* Header */}
      <header className="absolute left-0 top-0 z-10 w-full px-6 py-6">
        <h1
          className="
            text-center
            text-lg
            font-black
            tracking-[0.35em]
          "
        >
          DARE
        </h1>
      </header>

      {/* Main */}
      <div
        className="
          relative
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          pb-24
          pt-20
        "
      >
        <section className="flex w-full max-w-3xl flex-col items-center">

          {!currentDare ? (
            <div className="flex flex-col items-center text-center">

              <div
                className="
                  mb-5
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                Are you ready?
              </div>

              <h2
                className="
                  mb-10
                  max-w-xl
                  text-5xl
                  font-bold
                  tracking-[-0.04em]
                  sm:text-7xl
                "
              >
                Give me a dare.
              </h2>

              <DareButton onClick={getNextDare}>
                Give Me a Dare
              </DareButton>

            </div>
          ) : (
            <div className="flex w-full flex-col items-center">

              <p
                className="
                  mb-8
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                Your dare
              </p>

              <DareCard dare={currentDare} />

              <div className="mt-10">
                <DareButton
                  onClick={getNextDare}
                  secondary
                >
                  Next
                </DareButton>
              </div>

            </div>
          )}

        </section>
      </div>

      <Footer onClear={clearHistory} />
    </main>
  );
}