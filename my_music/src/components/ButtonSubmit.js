const ButtonSubmit = ({pending, fetchError}) => {

    if (!pending) {
        return (<div className='inputContainer'>
            <button type='submit'
                    className='input'>
                Wyślij
            </button>
        </div>)
    } else if (fetchError) {
        return (<div className='inputContainer'>
            <button type='submit'
                    className='input'>
                Wyślij
            </button>
        </div>)
    } else {
        return (<div className='inputContainer'>
            <button type='submit'
                    className='input'>
                Wysyła...
            </button>
        </div>)
    }
};

export default ButtonSubmit;