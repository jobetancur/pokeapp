import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setName } from '../store/slices/nameUser.slice'

const InputHome = () => {

    const { handleSubmit, reset, register } = useForm ()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        dispatch(setName(data.nameUser))
        reset({
            nameUser: ''
        })
        navigate('/pokedex')
    }

  return (
    <form onSubmit={ handleSubmit (submit) }>
        <input type="text" placeholder='Please, put your name' { ...register('nameUser') }/>
        <button>Go!</button>
    </form>
  )
}

export default InputHome