import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  increment,
  setDoc,
  updateDoc,
} from 'firebase/firestore'

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
      type: 'LOADING',
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

  const toggleLike = async (postId, userId) => {
    checkCancelBeforeDispatch({
      type: 'LOADING',
    })

    const postRef = doc(database, docCollection, postId)
    const likeRef = doc(postRef, 'likes', userId)

    try {
      const likeDoc = await getDoc(likeRef)

      if (likeDoc.exists()) {
        await deleteDoc(likeRef)
        await updateDoc(postRef, { likes: increment(-1) })
      } else {
        await setDoc(likeRef, { userId, createdAt: Timestamp.now() })
        await updateDoc(postRef, { likes: increment(1) })
      }

      checkCancelBeforeDispatch({ type: 'SUBMITTED' })
    } catch (error) {
      checkCancelBeforeDispatch({ type: 'ERROR', payload: error.message })
    }
  }

  const toggleDislike = async (postId, userId) => {
    checkCancelBeforeDispatch({
      type: 'LOADING',
    })

    const postRef = doc(database, docCollection, postId)
    const dislikeRef = doc(postRef, 'dislikes', userId)

    try {
      const dislikeDoc = await getDoc(dislikeRef)

      if (dislikeDoc.exists()) {
        await deleteDoc(dislikeRef)
        await updateDoc(postRef, { dislikes: increment(-1) })
      } else {
        await setDoc(dislikeRef, { userId, createdAt: Timestamp.now() })
        await updateDoc(postRef, { dislikes: increment(1) })
      }

      checkCancelBeforeDispatch({ type: 'SUBMITTED' })
    } catch (error) {
      checkCancelBeforeDispatch({ type: 'ERROR', payload: error.message })
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { insertDocument, toggleLike, toggleDislike, response }
}
