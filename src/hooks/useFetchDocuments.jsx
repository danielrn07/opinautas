import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

export const useFetchDocument = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return

      setLoading(true)

      const collectionRef = await collection(database, docCollection)

      try {
        let q

        q = await query(collectionRef, orderBy('createdAt', 'desc'))
        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        })
      } catch (error) {
        console.log(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [docCollection, search, uid, cancelled])

  useEffect(() => {
    return setCancelled(true)
  }, [])

  return { documents, loading, error }
}
