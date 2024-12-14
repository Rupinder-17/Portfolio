import React, { useContext } from 'react'
import { MyTheme } from './ContextHook'

export const Usetheme = () => {
  return useContext(MyTheme)
}
