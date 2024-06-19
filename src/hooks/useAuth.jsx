import { database, auth } from '../services/firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'

import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  const checkIfIsCancelled = () => cancelled

  const createUser = async (data) => {
    checkIfIsCancelled()
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

  const login = async (data) => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      let systemErrorMessage
      const errorMessage = error.message.toLowerCase()

      if (errorMessage.includes('auth/invalid-credential')) {
        systemErrorMessage = 'E-mail e/ou senha inválidos.'
      } else {
        systemErrorMessage = 'Ocorreu um erro. Tente novamente mais tarde.'
      }

      setError(systemErrorMessage)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      await signOut(auth)
    } catch (error) {
      setError('Ocorreu um erro. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { auth, createUser, login, logout, error, loading }
}
