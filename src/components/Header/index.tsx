import ToggleMode from '@/components/ToggleMode';
import { Menu } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsShow }: HeaderProps) => {
  return (
    <div className="flex p-4 justify-between items-center dark:bg-slate-950">
      {/* Left Header */}
      <div className="flex items-center gap-4">
        <Menu
          onClick={() => setIsShow((prev) => !prev)}
          className="cursor-pointer"
        />
        <h1 className="text-[24px]">Egg Shop</h1>
      </div>
      {/* Right Header */}
      <div>
        <ToggleMode />
      </div>
    </div>
  );
};

export default Header;
