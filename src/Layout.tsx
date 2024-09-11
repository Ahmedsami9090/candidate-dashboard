import Applied from './Components/Applied/Applied'
import ShortListed from './Components/ShortListed/ShortListed'
import Interview from './Components/Interview/Interview'

export default function Layout() {
  return (
    <div className='flex flex-col md:flex-row'>
        <Applied />
        <ShortListed />
        <Interview />
    </div>
  )
}

