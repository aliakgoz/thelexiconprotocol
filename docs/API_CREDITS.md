# OpenAI API Credit Plan

This document describes how API credits would be used to advance the open-source verification components of The Lexicon Protocol.

## Objective

Use model APIs as an inspectable analytical layer within a broader verification pipeline that combines deterministic checks, explicit constraints, structured data, human review, and reproducible evaluation.

## Workstream A — Semantic Firewall

API calls would analyze structured proposals for:

- ambiguous or underspecified language;
- internal contradictions;
- missing assumptions;
- conflicts between objectives and constraints;
- possible conflicts with explicitly declared axioms;
- unsupported causal claims;
- edge cases not covered by the proposal.

Outputs would follow versioned JSON schemas and remain distinct from deterministic findings.

## Workstream B — Adversarial evaluation

Independent model runs would evaluate the same proposal from explicitly different perspectives. The goal is not to average opinions into a final answer, but to expose competing arguments, hidden trade-offs, and failure scenarios for human review.

Candidate perspectives include efficiency, systemic stability, individual autonomy, equity, resilience, and long-horizon risk.

## Workstream C — Synthetic benchmark generation

Credits would support generation and curation of benchmark cases such as:

- rules containing subtle contradictions;
- ambiguous definitions;
- mutually incompatible constraints;
- missing dependencies;
- misleading but superficially coherent proposals;
- long-horizon second-order effects;
- adversarial formulations intended to evade simple checks.

Human-reviewed benchmark labels and rubrics would be stored separately from generated cases.

## Workstream D — Auditable explanations

Models would help produce concise explanations for non-specialist reviewers while preserving links to:

- source proposal sections;
- assumptions;
- deterministic checks;
- model-generated findings;
- unresolved uncertainty;
- human review status.

## Evaluation approach

The project would measure, where applicable:

- precision and recall of known issues;
- false-positive rates;
- consistency across repeated runs;
- agreement/disagreement across adversarial perspectives;
- calibration of uncertainty fields;
- robustness to wording changes and adversarial prompts;
- traceability completeness;
- human reviewer usefulness.

## Reproducibility and open-source outputs

Where licensing and privacy constraints permit, the project intends to publish:

- prompts and structured-output schemas;
- synthetic benchmark cases;
- human-authored evaluation rubrics;
- deterministic validation code;
- model adapters;
- experiment manifests;
- aggregate benchmark results;
- reference implementation code.

No sensitive institutional, personal, classified, or proprietary datasets are required for the planned research. Initial evaluations will use public, synthetic, or purpose-built test materials.

## Indicative credit allocation

A practical initial allocation would be:

- **35%** Semantic Firewall development and evaluation;
- **25%** adversarial multi-perspective runs;
- **25%** synthetic benchmark generation and red-team cases;
- **15%** auditable explanation and developer tooling experiments.

Allocation would be adjusted based on measured performance and benchmark needs rather than maximizing token consumption.
