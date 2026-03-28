interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col">
      <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 border-t border-gray-100 pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            GitHub &nearr;
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            Live Demo &nearr;
          </a>
        )}
      </div>
    </div>
  );
}
