import {
  AlignLeft as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import Logo from '../Logo'

const Menu = () => (
  <menu className="flex text-white items-center py-4 relative">
    <MenuIcon />

    <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0">
      <Logo hideOnMobile />
    </div>

    <div className="flex flex-grow justify-end gap-2">
      <SearchIcon />

      <ShoppingCartIcon />
    </div>
  </menu>
)
export default Menu
