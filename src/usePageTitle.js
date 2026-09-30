import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · Dr. Geetanand Rao`
      : 'Dr. Geetanand Rao · Medical Oncologist'
  }, [title])
}
