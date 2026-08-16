export type Proposal = {
  id: string;
  version: string;
  objective: string;
  scope: string;
  assumptions: string[];
  constraints: string[];
  evidence: string[];
  risks: string[];
  reviewQuestions: string[];
};

export type ValidationFinding = {
  field: keyof Proposal | "proposal";
  severity: "error" | "warning";
  message: string;
};

export function validateProposal(proposal: Proposal): ValidationFinding[] {
  const findings: ValidationFinding[] = [];

  if (!proposal.id.trim()) findings.push({ field: "id", severity: "error", message: "Proposal id is required." });
  if (!proposal.version.trim()) findings.push({ field: "version", severity: "error", message: "Proposal version is required." });
  if (!proposal.objective.trim()) findings.push({ field: "objective", severity: "error", message: "Objective is required." });
  if (!proposal.scope.trim()) findings.push({ field: "scope", severity: "error", message: "Scope is required." });
  if (proposal.constraints.length === 0) findings.push({ field: "constraints", severity: "warning", message: "No explicit constraints were declared." });
  if (proposal.assumptions.length === 0) findings.push({ field: "assumptions", severity: "warning", message: "No assumptions were declared." });
  if (proposal.reviewQuestions.length === 0) findings.push({ field: "reviewQuestions", severity: "warning", message: "No human review questions were declared." });

  return findings;
}
