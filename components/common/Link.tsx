import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

interface IProps {
  href: string
  isExternal?: boolean
  className?: string
  children: React.ReactNode
}

export const Link = ({ href, isExternal, className, children }: IProps) => {
  return (
    <NextLink
      href={href}
      target={isExternal ? '_blank' : undefined}
      className={twMerge('underline text-blue-500 hover:opacity-90', className)}
    >
      {children}
    </NextLink>
  )
}
