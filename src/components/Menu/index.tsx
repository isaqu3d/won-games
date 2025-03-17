'use client'

import clsx from 'clsx'
import {
  X as CloseIcon,
  AlignLeft as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import { useState } from 'react'
import Logo from '../Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <menu className="flex text-white items-center py-4 relative">
      <button onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
        <Logo hideOnMobile />
      </div>

      <div className="flex flex-grow justify-end gap-4">
        <SearchIcon aria-label="search" />

        <ShoppingCartIcon aria-label="open shopping cart" />
      </div>

      <nav
        aria-hidden={!isOpen}
        className={clsx(
          'bg-white absolute top-0 bottom-0 left-0 right-0 h-screen overflow-hidden text-black',
          isOpen ? 'opacity-100' : 'opacity-0',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0 m-4"
        >
          <CloseIcon aria-label="Close Menu" />
        </button>
      </nav>
    </menu>
  )
}
export default Menu
