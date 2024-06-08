'use client'
import { ChevronDown,MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ShowTimeDropDown({ title, value }) {
  const [selected, setSelected] = useState(title);

  const handleSelect = (val) => {
    setSelected(val);
  };

  return (
    <div className=" dropdown dropdown-bottom ">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-[#8B5CF6] rounded-full gap-x-12 text-white w-[13rem] "
      >
        <div className=' flex flex-row justify-between items-center w-full gap-x-8'>
            <div className=' flex flex-row justify-center items-center gap-x-2'>
                <MapPin />
                {selected}
            </div>
            <ChevronDown />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow text-black rounded-box w-[215px] bg-white"
      >
        <li>
          <a onClick={() => handleSelect(value[0])}>{value[0]}</a>
        </li>
        <li>
          <a onClick={() => handleSelect(value[1])}>{value[1]}</a>
        </li>
      </ul>
    </div>
  );
}
