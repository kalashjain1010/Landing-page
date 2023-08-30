import React from 'react';

function Navbar() {
  return (
    <div className='text-white h-[6vh] flex p-3 bg-slate-500'>
      <div className='relative flex items-center'>logo</div>
      <div className='flex flex-grow justify-center items-center space-x-4'>
        <h4 className='cursor-pointer underline'>Home</h4>
        <h4 className='cursor-pointer'>Work</h4>
        <h4 className='cursor-pointer'>Studio</h4>
        <h4 className='cursor-pointer'>Contact</h4>
      </div>
    </div>
  );
}

export default Navbar;
