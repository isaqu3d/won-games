'use client'

import clsx from 'clsx'
import {
  X as CloseIcon,
  AlignLeft as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <menu className="flex items-center py-4 relative">
      <button onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
        <Logo hideOnMobile />
      </div>

      <div className="flex flex-grow justify-end gap-4">
        <SearchIcon aria-label="Search" />
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
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

        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link
                href="#"
                className="relative text-xl font-medium text-black no-underline before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-primary before:transition-all before:duration-200 hover:before:animate-hoverUnderline"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="relative text-xl font-medium text-black no-underline before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-primary before:transition-all before:duration-200 hover:before:animate-hoverUnderline"
              >
                Explore
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col items-center p-6">
          <Button className="w-full" size="lg">
            Log in now
          </Button>
          <span className="my-2 text-sm">or</span>
          <Link href="#" className="text-primary border-b-2 border-primary">
            Sign Up
          </Link>
        </div>
      </nav>
    </menu>
  )
}

export default Menu
