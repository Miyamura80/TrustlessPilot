export function Hero() {
  return (
    <div className="flex flex-row justify-center my-10">
      <div className="w-[80vw] min-h-[25vh] bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 p-6 rounded-3xl shadow-lg flex flex-col">
        <div className="my-auto">
          <h1 className="text-5xl font-bold text-white text-center my-4">
            KeyboardLand
          </h1>
          <p className="text-2xl text-white text-center my-2">
            Your favorite place to buy keyboards
          </p>
        </div>
      </div>
    </div>
  )
}
