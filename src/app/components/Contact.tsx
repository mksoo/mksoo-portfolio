export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-black mb-8 relative">
          CONTACT
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full"></div>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요
        </p>

        <div className="flex justify-center gap-12 mb-12 flex-wrap">
          <div className="flex items-center gap-4">
            <a
              href="mailto:mgs3067@gmail.com"
              aria-label="Send email to mgs3067@gmail.com"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.1-.75a.75.75 0 0 0-.6.3l7.2 5.4a.75.75 0 0 0 .9 0l7.2-5.4a.75.75 0 0 0-.6-.3h-14.1Zm15.9 2.04-6.87 5.15a2.25 2.25 0 0 1-2.76 0L3.75 8.04v9.21c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.04Z" />
              </svg>
            </a>
            <div className="text-left">
              <div className="text-sm text-gray-400 mb-1">Email</div>
              <div className="text-lg">mgs3067@gmail.com</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
              📍
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400 mb-1">Location</div>
              <div className="text-lg">Hwasung, South Korea</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/mksoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.794 7.953 6.675 9.243.488.09.675-.212.675-.477 0-.236-.009-.864-.014-1.696-2.716.59-3.29-1.309-3.29-1.309-.444-1.127-1.085-1.427-1.085-1.427-.887-.606.067-.594.067-.594.982.069 1.498 1.008 1.498 1.008.872 1.495 2.289 1.063 2.846.813.088-.631.342-1.063.62-1.309-2.168-.247-4.448-1.084-4.448-4.827 0-1.066.38-1.938 1.004-2.622-.101-.247-.435-1.241.096-2.586 0 0 .82-.263 2.686 1.002.78-.217 1.617-.326 2.45-.33.833.004 1.67.113 2.45.33 1.867-1.265 2.686-1.002 2.686-1.002.532 1.345.198 2.339.097 2.586.625.684 1.004 1.556 1.004 2.622 0 3.752-2.284 4.578-4.46 4.821.352.303.665.902.665 1.818 0 1.313-.012 2.37-.012 2.692 0 .267.186.57.68.473 3.878-1.292 6.669-4.942 6.669-9.242 0-5.385-4.365-9.75-9.75-9.75Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kwangsu-mun-%EB%AC%B8%EA%B4%91%EC%88%98-95681b229/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.606 0 4.272 2.374 4.272 5.46v6.281zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z"/>
            </svg>
          </a>
          <a
            href="https://sept-moon.tistory.com"
            target="_blank"
            aria-label="Open Blog"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M19.5 3.75h-15A1.5 1.5 0 0 0 3 5.25v13.5A1.5 1.5 0 0 0 4.5 20.25h15a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 3v1.5H6V6.75h12Zm0 3.75v1.5H6V9.75h12Zm0 3.75v1.5H6v-1.5h12Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
