import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute right-4 bottom-4 md:bottom-10 md:right-10 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        {/* overflow-hidden removes the text if it doesn't fit */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}

// export function Widget() {
//     const [isWidgetOpen, setIsWidgetOpen] = useState(false);

//     function toggleWidgetVisibility() {
//         setIsWidgetOpen(!isWidgetOpen);
//     }

//     return (
//        <div className="absolute right-5 bottom-5">
//            {isWidgetOpen && <p>Hello</p>}

//             <button
//             onClick={toggleWidgetVisibility}
//             className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
//             <ChatTeardropDots className="w-6 h-6"/>

//             {/* overflow-hidden removes the text if it doesn't fit */}
//             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
//             <span className="pl-2">Feedback</span>
//             </span>
//         </button>
//        </div>
//     );
// }
