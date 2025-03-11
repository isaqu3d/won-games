import {
  AlignLeft as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import Logo from '../Logo'

const Menu = () => (
  <menu className="flex text-white items-center py-4 relative">
    <MenuIcon aria-label="Open Menu" />

    <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
      <Logo hideOnMobile />
    </div>

    <div className="flex flex-grow justify-end gap-4">
      <SearchIcon aria-label="search" />

      <ShoppingCartIcon aria-label="open shopping cart" />
    </div>
  </menu>
)
export default Menu
