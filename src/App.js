import React from 'react'
import Form from './components/Form'
import Todos from './components/Todos'
import { useDispatch , useSelector } from 'react-redux'
import { deleteAll } from './redux/todofunct/actions/actions'

const App = () => {

  const dispatch = useDispatch();
  const todosDelete = useSelector((state)=>state.operationsReducer);
  return (
    <div className='wrapper'>
      <br></br>
      <h1 className='text-center'>Updated Redux Todo  App </h1>
      <Form/>
      <Todos/>
      {todosDelete.length > 0 && (
        <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  )
}

export default App