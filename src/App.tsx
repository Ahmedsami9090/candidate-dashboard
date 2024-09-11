import './App.css'
import Layout from './Layout'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {


  return (
    <>
      <DndProvider backend={HTML5Backend}>
          <Layout />
      </DndProvider>

    </>
  )
}

export default App
