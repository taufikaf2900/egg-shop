import ToggleMode from '@/components/ToggleMode';
import { Menu } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import CurrentUser from '../CurrentUser';

type HeaderProps = {
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsShow }: HeaderProps) => {
  return (
    <div className="flex p-4 justify-between items-center dark:bg-slate-950 border-b-[1.75px] border-slate-300">
      {/* Left Header */}
      <div className="flex items-center gap-4">
        <Menu
          onClick={() => setIsShow((prev) => !prev)}
          className="cursor-pointer"
        />
        <h1 className="text-[24px]">Egg Shop</h1>
      </div>
      {/* Right Header */}
      <div className="flex items-center justify-between gap-3">
        <CurrentUser />
        <ToggleMode />
      </div>
    </div>
  );
};

export default Header;
