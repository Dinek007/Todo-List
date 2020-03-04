import React from 'react'
import { ListContainer } from './pages/list/listContainer'
import { AddFormContainer } from "./pages/addForm/addFormContainer"
import { EditFormContainer } from "./pages/editForm/editFormContainer"

export const App = () => {
  return (
    <div>

      <EditFormContainer />
      <ListContainer />
      <AddFormContainer />
    </div>
  )
}
