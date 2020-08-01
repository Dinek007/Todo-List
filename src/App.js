import React from 'react'
import { ThemeProvider } from '@material-ui/core'

import { ListContainer } from './pages/list/listContainer'
import { AddFormContainer } from "./pages/addForm/addFormContainer"
import { EditFormContainer } from "./pages/editForm/editFormContainer"
import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EditFormContainer />
      <ListContainer />
      <AddFormContainer />
    </ThemeProvider>
  )
}
