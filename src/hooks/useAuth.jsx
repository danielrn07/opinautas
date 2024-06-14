import { database } from '../services/firebase'

import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  const checkIsIsCancelled = () => cancelled

  const createUser = async (data) => {
    checkIsIsCancelled()
    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await updateProfile(user, {
        displayName: data.name,
      })

      return user
    } catch (error) {
      let systemErrorMessage
      const errorMessage = error.message.toLowerCase()

      if (errorMessage.includes('password')) {
        systemErrorMessage = 'Senha inválida.'
      } else if (errorMessage.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado.'
      } else {
        systemErrorMessage = 'Ocorreu um erro. Tente novamente mais tarde.'
      }

      setError(systemErrorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { auth, createUser, error, loading }
}
