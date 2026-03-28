import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Akhil",
  description: "Full-stack projects and engineering work by Akhil.",
};

const projects = [
  {
    title: "InventoryOS",
    description:
      "Multi-tenant SaaS platform for inventory management with real-time sync across locations. Serves 200+ businesses with a 99.9% uptime SLA.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "FlowBoard",
    description:
      "Real-time project management tool with WebSocket-based collaboration and custom analytics. Handles 50k+ concurrent users with sub-100ms message latency.",
    tech: ["React", "FastAPI", "WebSockets", "MongoDB", "Docker"],
    github: "https://github.com",
  },
  {
    title: "PulsePay",
    description:
      "Payment processing microservice with ML-based fraud detection pipeline. Processes 10k+ transactions/day with automated chargebback handling.",
    tech: ["Node.js", "gRPC", "PostgreSQL", "Stripe", "Kubernetes"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DataPulse",
    description:
      "Analytics dashboard with D3.js visualizations and a streaming data ingestion layer. Ingests 5M+ events/day from distributed services.",
    tech: ["React", "D3.js", "Python", "Kafka", "ClickHouse"],
    github: "https://github.com",
  },
  {
    title: "AuthKit",
    description:
      "Open-source authentication library with OAuth 2.0, PKCE, MFA, and session management. Used by 300+ developers on GitHub.",
    tech: ["TypeScript", "JWT", "Redis", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "DeployBot",
    description:
      "Internal CI/CD automation tool with Slack integration and deployment health monitoring. Reduced deployment time by 60% across 8 services.",
    tech: ["Go", "Docker", "Kubernetes", "Terraform", "Slack API"],
    github: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Projects</h1>
        <p className="text-gray-500 max-w-lg">
          A selection of work spanning SaaS products, open-source libraries, and
          internal tooling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
