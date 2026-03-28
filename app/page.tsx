import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Express", "gRPC"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
  },
];

const featuredProjects = [
  {
    title: "InventoryOS",
    description:
      "Multi-tenant SaaS platform for inventory management with real-time sync across locations. Serves 200+ businesses.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "FlowBoard",
    description:
      "Real-time project management tool with WebSocket-based collaboration, handling 50k+ concurrent users.",
    tech: ["React", "FastAPI", "WebSockets", "MongoDB", "Docker"],
    github: "https://github.com",
  },
  {
    title: "PulsePay",
    description:
      "Payment processing microservice with ML-based fraud detection. Handles 10k+ transactions/day at 99.9% uptime.",
    tech: ["Node.js", "gRPC", "PostgreSQL", "Stripe", "Kubernetes"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="text-sm text-gray-400 mb-5 tracking-widest uppercase font-medium">
            Senior Software Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Hi, I&apos;m Akhil.
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            I build scalable, high-performance web applications. 5+ years of
            experience turning complex engineering problems into clean,
            maintainable solutions — from API design to deployment pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              View Projects
            </Link>
            <a
              href="mailto:akhil@example.com"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">About</h2>
        <div className="max-w-2xl space-y-4">
          <p className="text-gray-500 leading-relaxed">
            I&apos;m a senior full-stack engineer who specializes in building
            robust, scalable web products. My stack spans React and Next.js on
            the frontend, Node.js and Python on the backend, and everything in
            between — from database design to cloud infrastructure.
          </p>
          <p className="text-gray-500 leading-relaxed">
            I care deeply about code quality, system reliability, and developer
            experience. I&apos;ve led engineering efforts at startups and scaled
            teams, and I enjoy mentoring engineers as much as I enjoy writing
            code.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Outside of work, I&apos;m always chasing the next adventure —
            whether that&apos;s exploring a new country, training for a race, or
            finding a new climbing route.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg">
          Open to senior engineering roles, tech lead positions, and interesting
          project collaborations. Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:akhil@example.com"
            className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            akhil@example.com
          </a>
          <a
            href="https://linkedin.com/in/akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
