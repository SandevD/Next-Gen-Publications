import {
    AcademicCapIcon,
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from "@heroicons/react/outline";
  
  const actions = [
    {
      title: "NEXTGEN Digital Library",
      desc: "Get access to thousands of e-books and study videos.",
      href: "#",
      icon: ClockIcon,
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
    },
    {
      title: "NEXTGEN Blog Page",
      desc: "Our blog page opens up a world of knowledge to everyone.",
      href: "#",
      icon: BadgeCheckIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  export default function Upcoming() {
    return (
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white space-x-2"
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
                <a disabled className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </span>
            </div>
            <div className="mt-8">
              <p className="mt-2 text-sm text-gray-500">{action.desc}</p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    );
  }
  