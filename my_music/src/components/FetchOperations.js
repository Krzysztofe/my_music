const BASE_URL = 'https://localhost:60001/Contractor/Save';

export const postData = (formData, setFetchError, setPending) => {

    fetch(BASE_URL,
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => {
        if (res.ok) {
            setFetchError(null)
            setPending(false)
        } else {
            throw Error('Nie znaleziono metody zapisu');
        }
    }).catch(err => {
            setFetchError(err.message)
        }
    )
}
