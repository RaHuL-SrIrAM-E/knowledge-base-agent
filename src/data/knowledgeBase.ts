export type KnowledgeEntry = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const TOPIC = {
  title: "BARE Agent",
  description:
    "Ask questions about how teams can start, scope, and launch new MFEs.",
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "what-is-initiative",
    question: "What is a new initiative?",
    answer:
      "A new initiative is a focused effort to explore or deliver a product, process, or capability that supports our strategic goals. Initiatives typically start with a problem statement, a small cross-functional team, and a short discovery phase before scaling.",
    keywords: ["initiative", "what is", "define", "meaning"],
  },
  {
    id: "how-to-start",
    question: "How do I start a new initiative?",
    answer:
      "Start by identifying the problem you want to solve and who it affects. Draft a one-page brief covering the goal, expected impact, and initial stakeholders. Share it with your lead or program sponsor to get alignment, then form a small working group for discovery.",
    keywords: ["start", "begin", "launch", "kick off", "how do i"],
  },
  {
    id: "who-to-contact",
    question: "Who should I contact for help?",
    answer:
      "For general guidance, reach out to your initiative lead or program sponsor. For tooling, budget, or staffing questions, contact the platform or operations partner listed in the initiative playbook. You can also post in the #new-initiatives channel for peer support.",
    keywords: ["contact", "help", "who", "reach out", "support"],
  },
  {
    id: "timeline",
    question: "What is the typical timeline?",
    answer:
      "Most initiatives follow a 4–6 week discovery phase, followed by a 8–12 week pilot if approved. Timelines vary by scope—small experiments may ship in 2–3 weeks, while platform-level efforts can take a quarter or more.",
    keywords: ["timeline", "how long", "duration", "weeks", "schedule"],
  },
  {
    id: "approval",
    question: "Do I need approval before starting?",
    answer:
      "Lightweight discovery work usually does not require formal approval. If your initiative needs dedicated headcount, budget, or customer-facing changes, you'll need sign-off from your lead and the initiative review board before moving to pilot.",
    keywords: ["approval", "sign off", "permission", "review", "board"],
  },
  {
    id: "resources",
    question: "What resources are available to teams?",
    answer:
      "Teams get access to initiative templates, a shared discovery workspace, office hours with program coaches, and a curated list of approved vendors and tools. Budget for pilots is allocated case-by-case after your brief is reviewed.",
    keywords: ["resources", "tools", "budget", "templates", "available"],
  },
  {
    id: "success-metrics",
    question: "How is success measured?",
    answer:
      "Success is measured against clear outcomes defined in your initiative brief—such as user adoption, time saved, revenue impact, or risk reduced. You'll set baseline metrics during discovery and report progress at pilot checkpoints.",
    keywords: ["success", "metrics", "measure", "kpi", "outcomes"],
  },
  {
    id: "pilot-vs-experiment",
    question: "What's the difference between a pilot and an experiment?",
    answer:
      "An experiment is a small, time-boxed test to validate a hypothesis—often with a single team or user group. A pilot is a broader rollout with more polish, support, and success criteria, usually after an experiment shows promising results.",
    keywords: ["pilot", "experiment", "difference", "test", "rollout"],
  },
];

export const suggestedQuestions = knowledgeBase.map((entry) => entry.question);
