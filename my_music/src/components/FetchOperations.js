const BASE_URL = 'https://localhost:60001/Contractor/Save';
const apiXXX = 'https://api.github.com/users';

export const postData = (formData, setFetchError, setPending) => {

    fetch(apiXXX,
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => {
        if (res.ok) {
            console.log(res)
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
