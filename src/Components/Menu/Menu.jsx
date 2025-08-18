import React from "react";

export default function Menu() {
  return (
    <nav className="flex w-full items-center justify-center mb-4">
      <div className="w-[90%] flex items-center justify-center mt-3">
        <ul
          className="flex bg-gray-300 shadow-2xl rounded-4xl p-2 w-full items-center justify-around flex-row-reverse h-14"
          style={{
            boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <li className="mr-3 font-bold   cursor-pointer ">
            <span className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-salad"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
                <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
                <path d="M8 8l1 -4l4 2.5" />
                <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
              </svg>
              پیش غذا
            </span>
          </li>
          <li className="mr-3 font-bold  cursor-pointer">
            <span className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-3"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
                <path d="M17 8m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
                <path d="M17 12v9" />
              </svg>
              غذای اصلی
            </span>
          </li>
          <li className="mr-3 font-bold cursor-pointer ">
            <span className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cake"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
                <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
                <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
              </svg>
              دسر
            </span>
          </li>
          <li className="mr-3 font-bold cursor-pointer">
            <span className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-milkshake"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 10a5 5 0 0 0 -10 0" />
                <path d="M6 10m0 1a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                <path d="M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" />
                <path d="M12 5v-2" />
              </svg>
              نوشیدنی
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
