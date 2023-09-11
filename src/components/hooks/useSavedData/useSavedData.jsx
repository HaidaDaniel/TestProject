/** @format */

import { useEffect, useRef } from 'react'

function useSavedData(initialData) {
  const savedDataRef = useRef(initialData)

  useEffect(() => {
    if (initialData !== undefined) {
      savedDataRef.current = initialData
      console.log(savedDataRef)
    }
  }, [initialData])
  const getSavedData = () => {
    return savedDataRef.current
  }

  const setSavedData = (newData) => {
    savedDataRef.current = newData
  }

  return { getSavedData, setSavedData }
}

export default useSavedData
