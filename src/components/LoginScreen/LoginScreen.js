import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <form>
                <input
                    type={'text'}
                    className='form-control'
                />
                <input
                    type={'password'}
                    className='form-control'
                />
                <button className='btn btn-primary' type='submit'>Ingresar</button>
            </form>
        </div>
    )
}
