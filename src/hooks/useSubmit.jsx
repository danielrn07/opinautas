import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useEffect, useReducer, useState } from 'react'
import { database } from '../services/firebase'

const initialState = {
  loading: null,
  error: null,
}

const submitReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
      }
    case 'SUBMITTED':
      return {
        loading: false,
        error: null,
      }
    case 'ERROR':
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const useSubmit = (docCollection) => {
  const [response, dispatch] = useReducer(submitReducer, initialState)

  const [cancelled, setCancelled] = useState(false)

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action)
    }
  }

  const insertDocument = async (document) => {
    checkCancelBeforeDispatch({
      type: 'LOADING'
    })

    try {
      const newDocument = {
        ...document,
        createdAt: Timestamp.now(),
      }
      const submittedDocument = await addDoc(collection(database, docCollection), newDocument)

      checkCancelBeforeDispatch({
        type: 'SUBMITTED',
        payload: submittedDocument,
      })
    } catch (error) {
      checkCancelBeforeDispatch({
        type: 'ERROR',
        payload: error.message,
      })
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { insertDocument, response }
}
