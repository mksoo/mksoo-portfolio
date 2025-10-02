import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative mb-8">
      <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-gray-700 to-gray-500 p-1">
        <Image
          src="/profile.jpeg"
          alt="문광수 프로필"
          width={160}
          height={160}
          className="w-full h-full rounded-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
