import {CardSender} from './Components/CardSender'
import {CardReceiver} from './Components/CardReceiver'

import {Logo} from './Components/Logo'
export function App() {
  return (
    <>
      <header className='mt-8'>
        <Logo />
      </header>
      <main className='main__parent'>
        <CardSender />
        <CardReceiver />
      </main>
    </>
  )
}
