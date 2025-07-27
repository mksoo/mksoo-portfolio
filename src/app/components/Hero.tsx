import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section className="w-full flex flex-col items-center justify-center text-center py-24 gap-6">
        <Image
          src="/profile.jpeg"
          alt="프로필 사진"
          width={120}
          height={120}
          className="rounded-full border border-gray-200 shadow-sm mb-4"
        />
        <p className="text-lg text-gray-600 max-w-xl">
          저는 세상의 문제를 찾아 코드로서 해결하는 개발자입니다.<br />
          모바일과 웹을 넘나들며, 사용성과 완성도를 함께 고민합니다.
        </p>
      </section>
    </div>
  );
} 