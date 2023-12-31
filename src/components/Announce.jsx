import { React, useState } from 'react';
import { Close } from '@material-ui/icons';

const Annoucne = () =>
{
  const [announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');

  const handleClose = () =>
  {
    setAnnounceStyle(announceStyle + " hidden")
  }

  return <div className={announceStyle}>
    Hurry up 50% off Sale!
    <Close className='cursor-pointer' onClick={handleClose} />
  </div>;
};

export default Annoucne;
