export const apiUrl = 'https://localhost:60001/Contractor/Save';
export const apiXXX = 'https://api.github.com/users';

export const postData = (url, formData, setFetchError, setPending) => {

    fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then(res => {
        if (!res.ok) {
            throw Error('Nie znaleziono metody zapisu');
        } else {
            console.log(res)
            setFetchError(null)
            setPending(false)
        }
    }).catch(err => {
            setFetchError(err.message)
        }
    )
}
