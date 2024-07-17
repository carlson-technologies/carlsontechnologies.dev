'use client'
import { NavItem } from '@/components/navigation/Navbar'
import { Page } from '@/components/Page'
import { Gradient } from '@/components/common/Gradient'

export default function Home() {
  return (
    <Page active={NavItem.Home}>
      <section className="flex md:h-[calc(100vh/2)] md:flex-row flex-col">
        <Gradient />
        <div className="flex md:w-1/2 items-center justify-center md:pr-2">
          <h1 className="my-6 md:my-0 text-4xl md:text-6xl lg:text-7xl font-medium font-ls text-center md:text-left">
            Creating tools <br className="hidden lg:block" /> to help people
          </h1>
        </div>
        <div className="flex md:w-1/2 justify-center flex-col md:pl-2 text-center md:text-left">
          <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-inter">
            Since 2021, Carlson Technologies LLC has been creating educational content and tools for
            coding and finance with the simple goal of helping people live fulfilling, stress free
            lives.
          </p>
        </div>
      </section>
    </Page>
  )
}
