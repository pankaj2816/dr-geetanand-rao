import { useEffect } from 'react'

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Original certificate">
      <button className="lightbox-backdrop" type="button" aria-label="Close" onClick={onClose} />
      <div className="lightbox-panel">
        <div className="lightbox-bar">
          <p>Original certificate, shown unchanged</p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <img src={item.image} alt={item.imageAlt} />
      </div>
    </div>
  )
}
