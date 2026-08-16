const layers = [
  ["01", "Axiomatic Kernel", "Explicit invariants and system constraints."],
  ["02", "Genesis Lexicon", "Structured proposals, assumptions, evidence and constraints."],
  ["03", "Semantic Firewall", "Deterministic checks plus AI-assisted ambiguity and conflict analysis."],
  ["04", "Adversarial Review", "Independent perspectives expose trade-offs and failure scenarios."],
  ["05", "Human Authority", "People review evidence, uncertainty and objections before any decision."],
  ["06", "Audit & Evolution", "Versioned proposals, model runs, decisions and rationale."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">OPEN-SOURCE RESEARCH PROJECT</p>
        <h1>The Lexicon Protocol</h1>
        <p className="lead">
          A reference framework for structured, machine-verifiable rules and human-centered
          AI-assisted decision systems.
        </p>
        <p className="principle">
          AI may analyze, challenge, simulate and explain. Final authority remains human.
        </p>
        <div className="actions">
          <a href="https://www.thelexiconprotocol.org/">Public specification</a>
          <a href="https://github.com/aliakgoz/thelexiconprotocol">GitHub repository</a>
        </div>
      </section>

      <section>
        <h2>Verification architecture</h2>
        <div className="grid">
          {layers.map(([id, title, description]) => (
            <article key={id}>
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Open-source workstreams</h2>
        <ul>
          <li>Structured proposal schemas and deterministic constraint validation</li>
          <li>Semantic Firewall for ambiguity, contradiction and missing-assumption analysis</li>
          <li>Adversarial multi-perspective AI evaluation</li>
          <li>Synthetic benchmarks, red-team cases and technical scoring rubrics</li>
          <li>Auditable explanations linked to inputs, assumptions and model outputs</li>
        </ul>
      </section>

      <footer>
        Experimental research software. Not an autonomous legal, political or safety-critical decision system.
      </footer>
    </main>
  );
}
