'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChangeEvent, useState } from 'react';

type EditProfileProps = {
  children: React.ReactNode;
};

type FromData = {
  name: string;
  noHP: string;
};

const EditProfile = ({ children }: EditProfileProps) => {
  const [formData, setFormData] = useState<FromData>({
    name: '',
    noHP: '',
  });
  const [fotoProfile, setFotoProfile] = useState<null | File>(null);

  const handleChangInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      setFotoProfile(null);
      return;
    }

    const selectedFile = files[0];

    if (selectedFile && selectedFile.size > 1000000) {
      alert('Ukuran file maksimal 1 MB');
      setFotoProfile(null);
      event.target.value = null as unknown as string;
      return;
    }

    if (selectedFile && !selectedFile.type.includes('image')) {
      alert('File harus berupa gambar');
      setFotoProfile(null);
      event.target.value = null as unknown as string;
      return;
    }

    if (
      selectedFile &&
      selectedFile.size <= 1000000 &&
      selectedFile.type.includes('image')
    ) {
      setFotoProfile(selectedFile);
      return;
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      noHP: '',
    });
  };

  return (
    <Sheet
      onOpenChange={() => {
        setFormData({
          name: '',
          noHP: '',
        });
        setFotoProfile(null);
        return true;
      }}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full md:max-w-xl">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Silahkan rubah profile disini. Klik simpan perubahan ketika selesai.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              className="col-span-3"
              onChange={handleChangInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="noHP" className="text-right">
              No. HP
            </Label>
            <Input
              id="noHP"
              name="noHP"
              value={formData.noHP}
              className="col-span-3"
              onChange={handleChangInput}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fotoProfile" className="text-right">
              Foto Profile
            </Label>
            <Input
              id="fotoProfile"
              name="fotoProfile"
              type="file"
              className="col-span-3"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleReset}>
              Simpan Perubahan
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfile;
