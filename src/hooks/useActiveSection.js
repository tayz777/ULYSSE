import { useState, useEffect, useRef } from 'react'

/**
 * Returns the id of the section currently most visible in the viewport.
 * @param {string[]} sectionIds  Array of HTML section ids to watch.
 * @param {number}   [threshold] IntersectionObserver threshold (0–1).
 */
export function useActiveSection(sectionIds, threshold = 0.4) {
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold },
    )

    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [sectionIds, threshold])

  return activeId
}
