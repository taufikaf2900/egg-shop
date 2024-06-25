import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const CurrentUser = () => {
  const name = 'Taufik Akbar Firmansyah';
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Card className="w-fit">
            <CardHeader className="w-fit px-2 py-1">
              <CardTitle className="flex items-center justify-between gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-[12px]">TA</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-[12px]">
                    {name.length <= 15 ? name : name.substring(0, 15) + '...'}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-[12px]">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CurrentUser;
