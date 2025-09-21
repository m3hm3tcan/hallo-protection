export const Footer = () => {
  return (
    <footer id="footer" className="bg-white dark:bg-black text-black dark:text-white">
      <hr className="w-11/12 mx-auto border-gray-300 dark:border-gray-600" />

      <section className="w-full px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="col-span-1 sm:col-span-2 xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-2xl flex items-center justify-center sm:justify-start"
          >
            Holló Protection
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
          <span className="font-semibold text-sm sm:text-base">+36 00 0000000</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          <span className="font-semibold text-sm sm:text-base">contact@holloprotection.com</span>
        </div>
      </section>
    </footer>
  );
};
