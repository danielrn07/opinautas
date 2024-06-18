import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    const loadDocument = async () => {
      if (cancelled) return

      setLoading(true)

      try {
        const docRef = await doc(database, docCollection, id)
        const docSnap = await getDoc(docRef)

        setDocument({
          id: docSnap.id,
          ...docSnap.data(),
        })
        
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadDocument()
  }, [docCollection, id, cancelled])

  useEffect(() => {
    return setCancelled(true)
  }, [])

  return { document, loading, error }
}
