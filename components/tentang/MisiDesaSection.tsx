const misiItems = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

export default function MisiDesaSection() {
  return (
    <section className="px-6 py-16 sm:px-12"
    style={{
        backgroundImage: "url('/backgrounddesa.webp')",
      }}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-[#3F4E20] sm:text-3xl">
          Misi Desa
        </h2>

        <ul className="space-y-4">
          {misiItems.map((text, index) => (
            <li
              key={index}
              className="rounded-full bg-[#485935] px-6 py-4 text-sm font-medium text-white shadow-sm sm:px-8 sm:text-base"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
