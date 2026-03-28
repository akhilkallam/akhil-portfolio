export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Akhil
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/akhil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:akhil@example.com"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
