import RouterItem from './router-item'
import { GithubSvg, SearchSvg } from './svg-list'

const Navbar = () => {
  const handleClick = (id) => {
    const input = document.getElementById(id)
    return input.focus()
  }

  return (
    <nav className='z-20 fixed top-0 left-0 w-full h-14 flex justify-around items-center text-white bg-neutral-800/30 backdrop-blur-xl backdrop-saturate-150'>
      <div>
        <RouterItem href='/'>
          <h1 className='text-xl font-bold hover:scale-105 hover:translate-y-1 duration-300'>ALG Projects</h1>
        </RouterItem>
      </div>
      <div className='flex items-center'>
        <div className='w-40 h-6 flex items-center justify-between mr-4 border border-white rounded-lg px-3 hover:scale-95 duration-300'>
          <input id='search-input' className='outline-none bg-transparent w-4/5' />
          <SearchSvg onClick={() => handleClick('search-input')} className='cursor-pointer hover:scale-125 hover:translate-y-1 duration-300' />
        </div>
        <RouterItem href='https://github.com/slydragonn/alg-projects-blog' target='_blank'>
          <GithubSvg color='#fff' className='hover:scale-125 duration-300' />
        </RouterItem>
      </div>
    </nav>
  )
}

export default Navbar
