'use client'

import { Link } from '@/components/common/Link'
import { Title } from '@/components/common/Title'
import { NavItem, Navbar } from '@/components/navigation/Navbar'
import { Page } from '@/components/Page'

export default function Home() {
  return (
    <Page active={NavItem.About}>
      <Title title="About" />
      <section className="max-w-4xl mx-auto w-full">
        <p className="mt-10 text-lg">
          Carlson Technologies, LLC was founded by{' '}
          <Link href="https://www.benjamincarlson.io" isExternal>
            Benjamin Carlson
          </Link>{' '}
          in 2021 as a single-member Limited Liability Company. Initially launched with a YouTube
          channel dedicated to teaching programming, the company has since expanded its offerings to
          include a comprehensive coding website, a finance website, and, soon, a new app for
          managing personal finances aimed at improving the tools we currently have. Today, Carlson
          Technologies encompasses all of Ben&apos;s online ventures, serving as the umbrella
          organization for his initiatives.
        </p>
      </section>
    </Page>
  )
}
