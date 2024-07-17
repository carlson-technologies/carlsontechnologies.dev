'use client'

import { NavItem } from '@/components/navigation/Navbar'
import { Page } from '@/components/Page'
import { IProject, ProjectCard } from '@/components/ProjectCard'
import { Title } from '@/components/common/Title'

const projects: IProject[] = [
  {
    name: 'YouTube',
    description:
      'Learn to code with free tutorials on YouTube. Over 1 million views and 9k subscribers. This channel mainly focuses on modern web development.',
    href: 'https://www.youtube.com/channel/UCLMdmCCRFGWt7rktx6tMErw',
    logo: '/logos/youtube.png',
    stats: [
      { name: 'Total Views', value: '1M+' },
      { name: 'Subscribers', value: '9k+' }
    ],
    date: 'April 2020'
  },
  {
    name: 'coffeeclass.io',
    description:
      "Learn to code for free with tutorials and courses. This is an open source project and over the years we've had multiple contributors for both the website code and articles.",
    href: 'https://www.coffeeclass.io/',
    logo: '/logos/coffeeclass.png',
    stats: [
      { name: 'Page Views', value: '250K+' },
      { name: 'Countries Served', value: '209' }
    ],
    date: 'April 2021'
  },
  {
    name: 'Wealth Wisdom',
    description:
      'Learn good personal finance and investing habits through articles, newsletters, and tools.',
    href: 'https://www.wealthwisdomfinancial.com',
    logo: '/logos/wealth_wisdom.png',
    date: 'October 2023'
  },
  {
    name: 'New Project',
    description: 'A tool that lets you view and manage your finances in a new way.',
    date: 'March 2024'
  }
]

export default function Home() {
  return (
    <Page active={NavItem.Projects}>
      <Title title="Projects" />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </Page>
  )
}
