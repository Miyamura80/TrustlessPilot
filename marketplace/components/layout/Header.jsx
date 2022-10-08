import { ConnectButton, ThemeButton } from './Header';

export function Header() {
  return (
    <nav className="flex flex-row justify-between p-4 items-center sm:p-6 mx-8 lg:mx-20 mt-2">
      <h2 className="text-2xl">
        W3Rate
      </h2>
      <div className="flex flex-row">
        <h5 className="text-xl mx-2">
          Page One
        </h5>
        <h5 className="text-xl mx-2">
          Page One
        </h5>
        <h5 className="text-xl mx-2">
          Page One
        </h5>
      </div>
      <div>
        <ThemeButton />
        <ConnectButton />
      </div>
    </nav>
  )
}
