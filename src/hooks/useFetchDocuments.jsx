import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
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

        if (search) {
          q = await query(
            collectionRef,
            where('tags', 'array-contains', search),
            orderBy('createdAt', 'desc')
          )
        } else {
          q = await query(collectionRef, orderBy('createdAt', 'desc'))
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        })
      } catch (error) {
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
