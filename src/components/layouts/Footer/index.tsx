import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-gray-400 text-sm">
          © {dayjs().year()} mksoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
