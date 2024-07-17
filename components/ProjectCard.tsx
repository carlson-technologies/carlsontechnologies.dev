import Image from 'next/image'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { Tilt } from 'react-tilt'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
  project: IProject
}

export interface IProject {
  name: string
  description: string
  date: string
  href?: string
  logo?: string
  stats?: IStat[]
}

type IStat = {
  name: string
  value: string
}

export const ProjectCard = ({ project }: IProps) => {
  const [hover, setHover] = useState(false)
  return (
    <Tilt className="flex">
      <div
        className="border p-4 sm:p-8 rounded-[5px] bg-opacity-10 space-y-6 flex justify-between flex-col w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          if (project.href) window.open(project.href, '_blank')
        }}
      >
        <div className="space-y-6">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex space-x-4 items-center">
              {project.logo && (
                <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
                  <Image src={project.logo} alt={project.name} fill className="object-contain" />
                </div>
              )}
              <h2 className="font-ls text-xl sm:text-2xl font-medium">{project.name}</h2>
            </div>
            <div className="flex flex-col sm:items-end mt-4 sm:mt-0">
              <p className="text-[10px]">Started</p>
              <p className="font-ls sm:ml-auto font-medium">{project.date}</p>
            </div>
          </div>
          <p className="font-inter text-lg">{project.description}</p>
        </div>
        <div className="flex justify-between items-center sm:items-end flex-col sm:flex-row">
          {project.stats && (
            <div className="flex space-x-12 justify-center">
              {project.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="font-bg text-2xl font-bold">{stat.value}</p>
                  <p className="font-inter text-sm text-gray-800 text-center">{stat.name}</p>
                </div>
              ))}
            </div>
          )}
          <p className="font-bg font-medium text-lg sm:ml-auto mt-8 sm:mt-0">
            Explore
            <IoChevronForwardSharp
              className={twMerge(
                'inline ml-2 transition-all duration-500 ease-in-out transform',
                hover && 'ml-4'
              )}
            />
          </p>
        </div>
      </div>
    </Tilt>
  )
}
