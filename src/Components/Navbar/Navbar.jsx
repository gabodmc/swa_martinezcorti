import React from "react";
import Logo from "../../Assets/workflow-logo-indigo-500-mark-white-text.png";
import LogoMini from "../../Assets/snow_mini.png";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CartWidget } from "./CartWidget/CartWidget";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Tablas de snowboard", href: "/category/tablas", current: true },
  { name: "Indumentaria", href: "/category/indumentaria", current: true },
  { name: "Accesorios", href: "/category/accesorios", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={LogoMini}
                        alt="Snow Warehouse"
                      />

                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={Logo}
                        alt="Snow Warehouse"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link to={item.href}>
                          <button
                            key={item.name}
                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="true"
                          >
                            {item.name}
                          </button>
                        </Link>
                      ))}

                      <button
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        aria-current="true"
                      >
                        <CartWidget />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link to={item.href}>
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
                <CartWidget />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
