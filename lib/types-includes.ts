export type DomainCategory =
  | "ui-components"
  | "system-architecture"
  | "backend-databases"
  | "cloud-infrastructure"
  | "application-security"
  | "production-engineering"
  | "devops-cicd"
  | "ai-agents"
  | "rag-vector"
  | "agent-memory"
  | "ai-safety";

export type IncludeFormat = "markdown" | "typescript" | "json" | "yaml";

export interface IncludeItem {
  id: string;
  code: string;
  title: string;
  domain: DomainCategory;
  domainLabel: string;
  category: string;
  summary: string;
  promptText: string;
  tokenCount: number;
  tags: string[];
  format: IncludeFormat;
  parameters?: string[];
  keylineIcon: string;
  componentType?:
    | "snackbar"
    | "bottom-sheet"
    | "dialog"
    | "bottom-nav"
    | "toggle-switch"
    | "chips"
    | "fab"
    | "card"
    | "dropdown"
    | "tooltip";
}

export interface DomainMeta {
  id: DomainCategory;
  label: string;
  codePrefix: string;
  description: string;
  totalIncludes: number;
}
