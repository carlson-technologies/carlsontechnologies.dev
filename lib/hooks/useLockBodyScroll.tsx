import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useLockBodyScroll(open: boolean) {
  useIsomorphicLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    let resizeListener: () => void

    if (open) {
      document.body.style.overflow = 'hidden'
      resizeListener = () => {
        if (window.innerWidth > 768) {
          document.body.style.overflow = originalStyle
        } else {
          document.body.style.overflow = 'hidden'
        }
      }
      window.addEventListener('resize', resizeListener)
    } else {
      document.body.style.overflow = originalStyle
    }

    return () => {
      document.body.style.overflow = originalStyle
      if (resizeListener) {
        window.removeEventListener('resize', resizeListener)
      }
    }
  }, [open])
}
