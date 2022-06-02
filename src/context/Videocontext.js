import React from 'react'
import { createContext,useContext,useReducer } from 'react'
import { ReducerFun } from '../reducer/ReducerFun'

const Videocontext = createContext()

export const VideoProvider = ({children}) => {


const initialState = {
 videos:[],
 categories: [],
 selectedCategory:"All"
}

const [state,dispatch] = useReducer(ReducerFun,initialState)

  return (
      <Videocontext.Provider value = {{state,dispatch}}>
              {children}
</Videocontext.Provider>
  )
}

const useVideo = () => useContext(Videocontext)

export {useVideo}