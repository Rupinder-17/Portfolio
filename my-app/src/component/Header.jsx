// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Headers() {
//   return (
//     <>
//       <Disclosure as="nav" className="bg-white shadow">
//         <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//           <div className="flex h-16 justify-between">
//             <div className="flex px-2 lg:px-0">
//               <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
//                 <a
//                   href="#"
//                   className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                 >
//                   Work
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                 >
//                   Contact
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                 >
//                   Projects
//                 </a>
//               </div>
//             </div>
//             {/* <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
//               <div className="w-full max-w-lg lg:max-w-xs">
//                 <label htmlFor="search" className="sr-only">
//                   Search
//                 </label>
//                 <div className="relative">
//                   <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                     <MagnifyingGlassIcon
//                       aria-hidden="true"
//                       className="h-5 w-5 text-gray-400"
//                     />
//                   </div>
//                   <input
//                     id="search"
//                     name="search"
//                     type="search"
//                     placeholder="Search"
//                     className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div> */}
//             <div className="flex items-center lg:hidden">
//               {/* Mobile menu button */}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon
//                   aria-hidden="true"
//                   className="block h-6 w-6 group-data-[open]:hidden"
//                 />
//                 <XMarkIcon
//                   aria-hidden="true"
//                   className="hidden h-6 w-6 group-data-[open]:block"
//                 />
//               </DisclosureButton>
//             </div>
//             <div className="hidden lg:ml-4 lg:flex lg:items-center">
//               <button
//                 type="button"
//                 className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View notifications</span>
//                 {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
//               </button>
//             </div>
//           </div>
//         </div>

//         <DisclosurePanel className="lg:hidden">
//           <div className="space-y-1 pb-3 pt-2">
//             {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
//             >
//               About
//             </DisclosureButton>
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//             >
//               Work
//             </DisclosureButton>
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//             >
//               Contact
//             </DisclosureButton>
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//             >
//               Projects
//             </DisclosureButton>
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </>
//   );
// }
