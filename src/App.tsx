export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-slate-100">
      <div className="mx-auto flex max-w-xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Level Mapper
        </p>
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Level Mapper – App Loaded
        </h1>
        <p className="text-sm text-slate-300">
          The preview pipeline is now wired to Vite, React, TypeScript, and
          Tailwind. This placeholder confirms the root route renders correctly.
        </p>
      </div>
    </main>
  );
}
