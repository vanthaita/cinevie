'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const navItems = [ 
    {
      name: 'Personal data',
      href: '/settings',
    },
    {
      name: 'Order history',
      href: '/settings/order-history',
    },
    {
      name: 'My cards',
      href: '/settings/my-cards',
    },
    {
        name: 'Wallet',
        href: '/settings/wallet',
    },
    {
        name: 'Change password',
        href: '/settings/change-password',
    },
  ];
export default function NavbarSetting() {
    const pathname = usePathname();
    if (!Array.isArray(navItems) || navItems.length === 0) {
        return null; // or handle empty case gracefully
    }
    return (
        <div className=" h-[85%] w-[20%] bg-[#111111] mt-8 rounded-xl justify-between flex flex-col items-start px-6 py-8">
            {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    <h2 className={cn(" font-bold text-xl", 
                        pathname === item.href ? 'text-blue-500' : ''
                    )}>{item.name}</h2>
                </Link>
            ))}
            <h2 className=" font-bold text-xl cursor-pointer">Log out</h2>
        </div>
        
    )
}
