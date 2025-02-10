import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import type { NavItem } from "../types";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Calculator", href: "/calculator" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Rewards", href: "/rewards" },
  { title: "About", href: "/about" },
];

export function Navigation() {
  const location = useLocation();
  const { isSignedIn, user } = useUser();

  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <Leaf className='h-8 w-8 text-green-600' />
              <span className='ml-2 text-xl font-bold text-gray-900'>
                UrjaTech
              </span>
            </Link>
          </div>

          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === item.href
                    ? "border-green-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            {isSignedIn ? (
              <>
                <span className='text-sm text-gray-700'>
                  Welcome, {user.firstName || user.username}
                </span>
                <UserButton afterSignOutUrl='/' />
              </>
            ) : (
              <SignInButton mode='modal'>
                <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700'>
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
