export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            Holló Protection
          </a>
        </div>

        <div className="flex flex-row gap-2 justify-center align-middle">
          <div className="pt-1">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>

          </div>
          <div className="font-bold text-base">+36 00 0000000</div>
        </div>

        <div className="flex flex-row gap-2 justify-center align-middle">
          <div className="pt-1">


            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke={"currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>



          </div>
          <div className="font-bold text-base">contact@holloprotection.com</div>
        </div>


      </section>


    </footer>
  );
};
