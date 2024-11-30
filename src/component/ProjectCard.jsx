const ProjectCard = ({
  imgSrc,
  imgAlt,
  projectLink,
  projectName,
  projectDescription,
  projectWebsite,
  githubLink,
}) => (
  <li className="relative flex flex-col items-start border border-zinc-100 bg-zinc-50 rounded-2xl p-4">
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <img
        alt={imgAlt}
        loading="lazy"
        width="32"
        height="32"
        decoding="async"
        className="h-8 w-8"
        src={imgSrc}
        style={{ color: "transparent" }}
      />
    </div>
    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {projectName}
    </h2>
    <p
      dangerouslySetInnerHTML={{ __html: projectDescription }}
      className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
    />
    <div className="relative z-10 mt-6 flex space-x-4 text-sm font-medium text-zinc-400 dark:text-zinc-200">
      <a href={projectWebsite} className="flex items-center transition hover:text-emerald-500">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
          <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-2">Website</span>
      </a>
      <a href={githubLink} className="flex items-center transition hover:text-emerald-500">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-2">GitHub</span>
      </a>
    </div>
  </li>
);

export default ProjectCard;
