export default function Header() {
  return (
    <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">문광수</h1>
        <div>
          <button className="py-2 px-4 rounded underline hover:bg-black hover:text-white transition duration-300">
            RESUME
          </button>
        </div>
      </header>
  )
}