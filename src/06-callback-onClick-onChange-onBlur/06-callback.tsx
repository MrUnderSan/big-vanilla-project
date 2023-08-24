import {MouseEvent} from 'react';

export const User = () => {

    const onChangeHandler = () => {
        console.log('onChange')
    }

    const onBlurHandler = () => {
        console.log('onBlur')
    }

    // const onClickHandler = () => {
    //     console.log('onClick')
    // }

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }

    return (
        <div>
            <textarea onChange={onChangeHandler}></textarea>
            <input onBlur={onBlurHandler}/>

            <button name='delete' onClick={onClickHandler}>delete</button>
            <button name='save' onClick={onClickHandler}>save</button>
        </div>
    )
}