import { Footer } from '@/components/navigation/Footer'
import { NavItem, Navbar } from '@/components/navigation/Navbar'
import React from 'react'

interface IProps {
  active: NavItem
  children: React.ReactNode
}

export const Page = ({ active, children }: IProps) => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <div className="min-h-screen">
        <Navbar active={active} />
        <main className="flex flex-col px-8">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
