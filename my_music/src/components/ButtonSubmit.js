const ButtonSubmit = ({pending, fetchError}) => {

    if (!pending) {
        return (
            <div className='inputContainer'>
            <button type='submit'
                    className='input input--button'>
                Wyślij
            </button>
            {fetchError &&
                <p className='errors'>{fetchError}</p>
            }
        </div>)
    } else if (fetchError) {
        return (
            <div className='inputContainer'>
            <button type='submit'
                    className='input input--button'>
                Wyślij
            </button>
            {fetchError &&
                <p className='errors'>{fetchError}</p>
            }
        </div>)
    } else {
        return (
            <div className='inputContainer'>
            <button type='submit'
                    className='input input--button'>
                Wysyła...
            </button>
            {fetchError &&
                <p className='errors'>{fetchError}</p>
            }
        </div>)
    }
};

export default ButtonSubmit;