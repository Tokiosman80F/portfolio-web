import React from 'react'
import TechIcon from './TechIcon'
import { twMerge } from 'tailwind-merge'

interface ToolboxItemProps{
    items:{title:string,iconType:React.ElementType}[],
    className?:string,
    itemWrapperClassName?:string
}

export default function ToolboxItem({items,className,itemWrapperClassName}:ToolboxItemProps) {
  return (
    <div className= {twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)} >
             <div className={twMerge('flex flex-none gap-6 py-0.5',itemWrapperClassName)}>
                 {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-3 outline outline-2 outline-white/10  rounded-xl px-4 py-1 "
                >
                  <TechIcon component={item.iconType}  />
                  <div>{item.title}</div>
                </div>
              ))}
             </div>
    </div>
  )
}
