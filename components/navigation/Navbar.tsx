'use client'

import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useLockBodyScroll } from '@/lib/hooks/useLockBodyScroll'
import { IoClose } from 'react-icons/io5'

export const enum NavItem {
  Home = '/',
  About = '/about',
  Projects = '/projects',
  Contact = '/contact'
}

const navItems = [
  { name: 'Home', href: NavItem.Home },
  { name: 'About', href: NavItem.About },
  { name: 'Projects', href: NavItem.Projects }
]

interface IProps {
  active: NavItem
}

export const Navbar = ({ active }: IProps) => {
  const [open, setOpen] = useState(false)
  useLockBodyScroll(open)

  return (
    <>
      {/* desktop */}
      <nav className="items-center w-full mx-auto py-20 px-8 hidden md:flex">
        <div className="w-1/3">
          <Link href="/" className="cursor-dot-hover">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 justify-center space-x-4 w-1/3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={twMerge(
                'text-gray-600 hover:bg-gray-50 px-5 py-1.5 rounded-[5px] text-lg relative font-bg cursor-dot-hover',
                active === item.href && 'text-black font-medium'
              )}
            >
              <ActiveDot item={item} active={active} />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 w-1/3 justify-end">
          <Link href="https://www.linkedin.com/company/carlson-technologies/" target="_blank">
            <FaLinkedinIn className="text-2xl cursor-pointer hover:opacity-90" />
          </Link>
          <Link href="https://github.com/carlson-technologies" target="_blank">
            <FaGithub className="text-2xl cursor-pointer hover:opacity-90" />
          </Link>
        </div>
      </nav>

      {/* mobile */}
      <div className="flex md:hidden px-8 py-12 justify-between">
        <Link href="/" className="cursor-dot-hover">
          <Logo />
        </Link>
        <RxHamburgerMenu className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <nav
        className={twMerge(
          'absolute top-0 left-0 z-10 flex flex-col md:hidden bg-white w-screen h-screen p-4 justify-center items-center',
          !open && 'hidden'
        )}
      >
        <div className="flex justify-between w-full absolute top-12 px-8">
          <Link href="/" className="cursor-dot-hover">
            <Logo />
          </Link>
          <IoClose className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={twMerge(
              'text-gray-600 w-fit hover:bg-gray-50 px-5 py-1.5 rounded-[5px] text-lg relative font-bg cursor-dot-hover mt-3 first:mt-0',
              active === item.href && 'text-black font-medium'
            )}
          >
            <ActiveDot item={item} active={active} />
            {item.name}
          </Link>
        ))}
        <div className="flex space-x-4 absolute bottom-12 px-8">
          <Link href="https://www.linkedin.com/company/carlson-technologies/" target="_blank">
            <FaLinkedinIn className="text-2xl cursor-pointer hover:opacity-90" />
          </Link>
          <Link href="https://github.com/carlson-technologies" target="_blank">
            <FaGithub className="text-2xl cursor-pointer hover:opacity-90" />
          </Link>
        </div>
      </nav>
    </>
  )
}

const ActiveDot = ({ item, active }: { item: { name: string; href: string }; active: string }) => {
  return (
    <span
      className={twMerge(
        'h-2 w-2 bg-brand-primary absolute bottom-0 right-1/2 translate-x-1/2 rounded-full hidden',
        active === item.href && 'block'
      )}
    />
  )
}
