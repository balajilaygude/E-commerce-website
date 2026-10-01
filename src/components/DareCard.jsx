


import { useEffect, useState } from "react";

export default function DareCard({ dare }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 30);

    return () => clearTimeout(timer);
  }, [dare]);

  if (!dare) return null;

  return (
    <div
      className={`
        w-full
        max-w-2xl
        ${visible ? "animate-dare-enter" : "opacity-0"}
      `}
    >
      <div className="card-float relative">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-neutral-200/50 blur-2xl" />

        {/* Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-4xl
            border
            border-neutral-200
            bg-white
            px-7
            py-10
            shadow-[0_25px_80px_rgba(0,0,0,0.10)]
            sm:px-12
            sm:py-14
          "
        >
          {/* Small decorative circle */}
          <div
            className="
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-neutral-100
            "
          />

          {/* Another decorative circle */}
          <div
            className="
              absolute
              -bottom-10
              -left-10
              h-28
              w-28
              rounded-full
              border
              border-neutral-100
            "
          />

          <div className="relative">
            <div className="mb-8 flex justify-center">
              <span
                className="
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-950
                  text-sm
                  text-white
                "
              >
                ✦
              </span>
            </div>

            <p
              className="
                text-center
                text-2xl
                font-medium
                leading-[1.15]
                tracking-tight
                text-neutral-950
                sm:text-4xl
              "
            >
              {dare.text}
            </p>

            <div className="mt-8 flex justify-center">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-300">
                Do it.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}