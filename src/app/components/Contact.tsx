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
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
              ✉️
            </div>
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
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-bold">G</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kwangsu-mun-%EB%AC%B8%EA%B4%91%EC%88%98-95681b229/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-bold">L</span>
          </a>
          <a
            href="https://sept-moon.tistory.com"
            target="_blank"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-bold">B</span>
          </a>
        </div>
      </div>
    </section>
  );
}
