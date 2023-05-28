import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function useImage() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

   const supabase = createClient('https://hzoyavtwhgwinhojrfla.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6b3lhdnR3aGd3aW5ob2pyZmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzNDgyMTAsImV4cCI6MTk5ODkyNDIxMH0.K6xzKxBgQm7ejT3IpM2xX3oXRkm7qwXzn6BEm1H0FAk')

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
    //change image name to be unique
    setImageName(`${Date.now()}-${file.name}`);
  };

  const uploadImage = async () => {
    if (!image) {
      return null;
    }
    const { data, error } = await supabase.storage.from('salonServices/hairStyle').upload(imageName, image,{
      cacheControl: '3600',
      upsert: false,
    })
  }
  return { image, imageName, handleChangeImage, uploadImage };
}
