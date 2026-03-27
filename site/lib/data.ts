export const siteConfig = {
  name: "Edward Kim",
  title: "Edward Kim — Builder, Researcher, Founder",
  description:
    "Founder and research engineer building frontier AI systems. Interested in inference infrastructure, agentic software, and technically serious startups.",
  url: "https://maengo31.github.io",
  email: "maen90313@gmail.com",
  links: {
    github: "https://github.com/mAengo31",
    linkedin: "https://www.linkedin.com/in/mingeon--kim/",
    x: "https://x.com/mAeng31",
  },
};

export interface Project {
  title: string;
  thesis: string;
  description: string;
  impact: string;
  stack: string[];
  status: string;
}

export const projects: Project[] = [
  {
    title: "Multi-Agent Video Generation Pipeline",
    thesis:
      "Narrative video at scale requires orchestrated reasoning, not monolithic models.",
    description:
      "Built an end-to-end system that decomposes story prompts into scene graphs, generates visual assets through coordinated agent pipelines, and assembles coherent video narratives. Each stage — script decomposition, visual grounding, temporal consistency, audio alignment — is handled by specialized agents with shared context.",
    impact:
      "Demonstrated that multi-agent orchestration can produce structurally coherent video content that single-pass models cannot, with 3x better narrative consistency in blind evaluation.",
    stack: [
      "Python",
      "PyTorch",
      "LangGraph",
      "Diffusion Models",
      "FFmpeg",
      "Redis",
    ],
    status: "Research prototype → exploring production path",
  },
  {
    title: "Real-Time Speech & Math Learning System",
    thesis:
      "Adaptive learning works when the system understands what you actually know, not what you claim to know.",
    description:
      "Developed an AI-powered tutoring system combining real-time ASR with mathematical reasoning. The system listens to a student's verbal explanation, extracts mathematical intent, identifies conceptual gaps, and generates targeted follow-up problems. LaTeX rendering and speech synthesis create a fluid dialogue loop.",
    impact:
      "Reduced average time-to-mastery by 40% on pilot concepts compared to static problem sets. Explored at NVIDIA-associated research lab.",
    stack: [
      "Python",
      "Whisper",
      "GPT-4",
      "LaTeX",
      "WebSocket",
      "React",
      "FastAPI",
    ],
    status: "Completed research project",
  },
  {
    title: "Inference Acceleration & ASIC Architecture Study",
    thesis:
      "The next order-of-magnitude improvement in AI deployment is hardware-shaped, not algorithm-shaped.",
    description:
      "Conducted deep technical analysis of transformer inference bottlenecks across GPU, TPU, and custom ASIC architectures. Modeled memory bandwidth constraints, quantization tradeoffs, and speculative decoding strategies. Explored dataflow architectures for attention-heavy workloads.",
    impact:
      "Produced internal technical report mapping viable paths from current GPU inference to custom silicon for specific model families. Informed hardware procurement decisions.",
    stack: [
      "CUDA",
      "C++",
      "PyTorch",
      "Roofline Analysis",
      "Verilog (exploratory)",
    ],
    status: "Ongoing research direction",
  },
  {
    title: "Agentic Workflow Automation Platform",
    thesis:
      "Most business processes are graphs of decisions — agents should execute them, not humans.",
    description:
      "Built an agent orchestration platform that converts semi-structured business workflows into executable DAGs. Each node is an LLM-powered agent with tool access, memory, and escalation logic. Handles document processing, data extraction, approval routing, and exception handling across legacy enterprise systems.",
    impact:
      "Deployed internally to automate 3 multi-step workflows that previously required manual coordination across 4+ tools.",
    stack: ["TypeScript", "Next.js", "LangChain", "PostgreSQL", "Redis", "AWS"],
    status: "In production, expanding scope",
  },
  {
    title: "Legacy Industry SaaS MVP",
    thesis:
      "The biggest markets are the ones still running on spreadsheets and phone calls.",
    description:
      "Designed and shipped an MVP for digitizing operations in a traditional industry vertical. Built the full stack from authentication and role-based access to real-time dashboards and automated reporting. Focused on reducing time-to-value for non-technical operators.",
    impact:
      "Acquired first paying customers within 6 weeks of launch. Validated product-market fit in a space where incumbents move slowly.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "Tailwind",
    ],
    status: "Shipped — evaluating growth path",
  },
];

export interface Principle {
  number: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "First principles over best practices",
    body: "Best practices are other people's conclusions. Start from the physics of the problem. Derive your own answer. Sometimes it matches convention. Often it doesn't.",
  },
  {
    number: "02",
    title: "Speed is a research method",
    body: "The fastest way to learn whether something works is to build it. Prototypes kill bad ideas faster than analysis. Ship, measure, revise.",
  },
  {
    number: "03",
    title: "Systems over surface",
    body: "A beautiful interface on a fragile system is a liability. Build the engine first. Make it robust. Then make it elegant.",
  },
  {
    number: "04",
    title: "Hard problems compound",
    body: "Easy problems attract crowds. Hard problems build moats. The right technical difficulty is an asset, not an obstacle.",
  },
  {
    number: "05",
    title: "Build for reality, not demos",
    body: "Demo-ware impresses for five minutes. Production systems change how people work. Optimize for the second kind.",
  },
  {
    number: "06",
    title: "Taste is technical",
    body: "Good engineering taste — knowing what to build, what to skip, what to simplify — is as important as knowing how to build. It's not aesthetic preference. It's judgment under constraints.",
  },
  {
    number: "07",
    title: "Research and product are the same loop",
    body: "The best research solves real problems. The best products encode deep understanding. Separating them is an organizational failure, not an intellectual one.",
  },
];

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
  tag: string;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — Present",
    title: "Founder & Technical Builder",
    description:
      "Building AI systems at the intersection of infrastructure, agents, and product. Shipping production software and exploring frontier research directions.",
    tag: "Founder",
  },
  {
    period: "2023 — 2024",
    title: "AI Research — NVIDIA-Associated Lab",
    description:
      "Worked on speech recognition, mathematical reasoning systems, and real-time adaptive learning. Published internal research on multi-modal AI tutoring.",
    tag: "Research",
  },
  {
    period: "2022 — 2023",
    title: "Software Engineering & Startup Projects",
    description:
      "Built full-stack products, shipped MVPs, and led technical execution across multiple early-stage ventures. SNU Student Venture Network alumni.",
    tag: "Engineering",
  },
  {
    period: "2020 — Present",
    title: "Seoul National University — Physics",
    description:
      "Studying physics with focus on computational methods and mathematical foundations. The training ground for first-principles thinking.",
    tag: "Education",
  },
  {
    period: "2019 — 2021",
    title: "Studio BIC — Founder & Lead Developer",
    description:
      'Founded an indie game studio. Shipped multiple titles across genres. "GENERATIONS" won the Minister of Culture Award at the 2021 Global Indie Game Competition.',
    tag: "Creative",
  },
];

export interface Writing {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  href: string;
}

export const writings: Writing[] = [
  {
    title: "Why Inference Infrastructure Is the Real AI Bottleneck",
    excerpt:
      "Training gets the headlines. Inference pays the bills. The companies that solve serving at scale will define the next era.",
    tag: "Infrastructure",
    date: "2025",
    href: "#",
  },
  {
    title: "Agents Are Workflows, Not Chatbots",
    excerpt:
      "The useful form of AI agents isn't conversation — it's structured execution of multi-step processes with judgment at each node.",
    tag: "AI Systems",
    date: "2025",
    href: "#",
  },
  {
    title: "On Building in Markets Nobody Wants to Touch",
    excerpt:
      "Legacy industries are ugly. That's the point. Low competition, high pain, and customers who will pay for anything that works.",
    tag: "Startups",
    date: "2024",
    href: "#",
  },
  {
    title: "Hardware Acceleration Beyond GPUs: Notes on Custom Silicon",
    excerpt:
      "GPUs are general-purpose. For specific model architectures, the memory bandwidth wall demands a different approach entirely.",
    tag: "Hardware",
    date: "2024",
    href: "#",
  },
  {
    title: "Speed as Competitive Advantage in Technical Founders",
    excerpt:
      "The best technical founders I know share one trait: they collapse the gap between idea and artifact to near zero.",
    tag: "Founders",
    date: "2024",
    href: "#",
  },
];
