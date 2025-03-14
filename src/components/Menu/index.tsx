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
        className={clsx(isOpen ? 'opacity-100' : 'opacity-0')}
      >
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon aria-label="Close Menu" />
        </button>
      </nav>
    </menu>
  )
}
export default Menu
