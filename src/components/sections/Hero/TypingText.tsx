interface TypingTextProps {
  text: string;
}

export default function TypingText({ text }: TypingTextProps) {
  return (
    <div className="text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center justify-center">
      <span className="border-r-2 border-gray-700 animate-pulse">
        {text}
      </span>
    </div>
  );
}
