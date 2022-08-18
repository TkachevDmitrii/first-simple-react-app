import React from 'react'
import { Button } from '@my/ui-kit'
import { GlobalStyle } from './GlobalStyle'

export const App = () =>  {
  return (
    <div>
      <GlobalStyle />
      <Button>push me</Button>
    </div>
  )
}
