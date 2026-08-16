# The Lexicon Protocol

**An experimental open-source framework for structured, machine-verifiable governance and human-centered AI-assisted decision systems.**

The Lexicon Protocol explores how complex public rules and collective decisions can be expressed in a structured form that is easier to inspect, test, challenge, simulate, and version — while preserving human authority over final decisions.

> **Status:** early research and reference implementation. The protocol is a theoretical and experimental framework, not a deployed governance system.

## Why this project exists

Natural-language rules are flexible, but that flexibility also creates ambiguity, inconsistent interpretation, hidden assumptions, and difficult-to-audit decision paths. The Lexicon Protocol investigates whether a combination of controlled language, explicit constraints, symbolic validation, adversarial AI analysis, probabilistic risk modeling, and transparent human review can make complex rule systems more inspectable.

The core principle is **human sovereignty**: AI may analyze, challenge, simulate, and explain a proposal, but it should not possess final decision authority.

## Research architecture

The current framework is organized around several interacting layers:

1. **Axiomatic Kernel** — explicit invariant principles and system constraints.
2. **Logical Interface / Genesis Lexicon** — controlled natural language and constrained proposal construction.
3. **Verification Shield** — semantic consistency checks, adversarial AI review, and risk analysis.
4. **Blind Consensus** — mechanisms intended to reduce popularity and identity effects during human review.
5. **Judicial / Expert Layer** — structured expert input, adversarial synthesis, and ratification concepts.
6. **Execution & Evolution** — auditable versioning of accepted rules and protocol evolution.

The public specification and conceptual material are available at **https://www.thelexiconprotocol.org/**.

## Open-source implementation goals

This repository is being developed as a reference implementation for the parts of the protocol that can be tested independently of any political deployment:

- structured proposal schemas;
- a constrained proposal-authoring interface;
- deterministic constraint and consistency checks;
- an AI-assisted **Semantic Firewall** for identifying ambiguity, contradictions, missing assumptions, and possible axiom conflicts;
- adversarial multi-perspective analysis that exposes trade-offs rather than producing a single authoritative answer;
- synthetic benchmark generation for edge cases and failure modes;
- reproducible evaluation datasets and scoring rubrics;
- auditable explanations linked to the underlying proposal, assumptions, checks, and model outputs.

## Human-in-the-loop design

The project deliberately separates **verification** from **authority**.

AI outputs should be:

- attributable to explicit inputs and assumptions;
- challengeable by other models and by humans;
- accompanied by uncertainty or limitations where appropriate;
- recorded for audit and reproducibility;
- treated as advisory evidence, not as autonomous law or final judgment.

## OpenAI API research plan

If API credits are available, they will be used for four open-source workstreams:

### 1. Semantic Firewall

Evaluate structured proposals for contradictions, ambiguous interpretations, missing assumptions, constraint violations, and conflicts with explicit system axioms. Model-based checks will be combined with deterministic and symbolic checks rather than replacing them.

### 2. Adversarial evaluation

Run independent analyses under different optimization objectives — such as efficiency, systemic stability, individual autonomy, and long-horizon risk — and expose disagreements, counterarguments, and uncertainty for human review.

### 3. Synthetic benchmarks

Generate and curate test cases containing logical inconsistencies, hidden conflicts, ambiguous wording, edge cases, and second-order effects. These datasets will be used to measure precision, recall, consistency, calibration, and robustness of the verification layer.

### 4. Auditable explanations

Prototype concise explanations for non-specialist users while preserving links to source rules, assumptions, deterministic checks, and model outputs.

See [`docs/API_CREDITS.md`](docs/API_CREDITS.md) for the planned credit allocation and evaluation approach.

## Repository structure

```text
app/                  Minimal reference web interface
lib/                  Proposal schema and deterministic validation helpers
docs/ARCHITECTURE.md  Research architecture and trust boundaries
docs/API_CREDITS.md   Planned API-credit usage and evaluation plan
ROADMAP.md             Open-source development roadmap
LICENSE                MIT License
```

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Safety and scope

The reference implementation is intended for research, simulation, and transparent decision-support experiments. It should not be used to automate binding public decisions, legal determinations, coercive action, or safety-critical operational control without appropriate human authority, domain validation, and institutional safeguards.

## Contributing

Contributions are welcome in areas such as AI safety, formal methods, controlled natural language, constraint solving, uncertainty modeling, evaluation design, distributed systems, governance research, accessibility, and interface design. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT License. See [`LICENSE`](LICENSE).

## Maintainer

Ali Akgöz — initial designer and developer.
