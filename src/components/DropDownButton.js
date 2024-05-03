import { ChevronDown } from 'lucide-react';
export default function DropDownButton({title}) {
    return (
        <div className="dropdown dropdown-bottom ">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#8B5CF6] rounded-full gap-x-8 text-white">{title}
                <ChevronDown />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
    )
}