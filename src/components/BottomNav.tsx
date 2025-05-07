// 'use client';

// import { usePathname } from 'next/navigation';

// const navItems = [
//   { label: 'Explore', icon: '🔍', href: '/' },
//   { label: 'Wishlists', icon: '💖', href: '/wishlists' },
//   { label: 'Log in', icon: '👤', href: '/login' },
// ];

// export default function BottomNav() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md flex justify-around items-center h-16 md:hidden">
//       {navItems.map((item) => {
//         const isActive = pathname === item.href;
//         return (
//           <a
//             key={item.label}
//             href={item.href}
//             className={`bottom-nav-button ${isActive ? 'bottom-nav-button-active' : ''}`}
//           >
//             <span className="text-xl">{item.icon}</span>
//             <span className="text-xs">{item.label}</span>
//           </a>
//         );
//       })}
//     </nav>
//   );
// }