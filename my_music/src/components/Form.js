import {useEffect, useState} from "react";
import Input from "./Input";
import InputText from "./InputText";
import InputSelect from "./InputSelect";

const peselValidation = (inputValue) => {
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let controlNumber = parseInt(inputValue.pesel.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(inputValue.pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber;
}

const nipValidation = (inputValue) => {
    if (typeof inputValue.nip !== 'string')
        return false;

    inputValue.nip = inputValue.nip.replace(/[\ \-]/gi, '');

    let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    let controlNumber = parseInt(inputValue.nip.substring(9, 10));
    let weightCount = weight.length;
    for (let i = 0; i < weightCount; i++) {
        sum += (parseInt(inputValue.nip.substr(i, 1)) * weight[i]);
    }

    return sum % 11 === controlNumber;
}


const validation = (inputValue) => {
    let _errorsPesel = []
    let _errorsNip = []
    let _errorEmpty = ['wybierz osoba lub firma']

    if (peselValidation(inputValue) === false) {
        _errorsPesel.push('podaj właściwy nr PESEL')
    }
    if (nipValidation(inputValue) === false) {
        _errorsNip.push('podaj właściwy nr NIP')
    }

    if (inputValue.select === 'osoba') {
        return _errorsPesel
    } else if (inputValue.select === "firma") {
        return _errorsNip
    } else if (inputValue.select === ""){
        return _errorEmpty
    }

}

const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: '', surname: '', select: '',
        pesel: "", nip: ""
    })
    const [image, setImage] = useState('')
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])

    const [previev, setPreviev] = useState('')

    const [sented, setSented] = useState(false)
    const [pending, setPending] = useState(false)

    const handleChange = (e) => {

        // const value = e.target.type === "file" ? e.target.files : e.target.value
        // setInputValue({
        //     ...inputValue,
        //     [e.target.name]: value
        // })
        //
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }


    // const handleChange = (e) => {
    //     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    //     setInputValue({
    //         ...inputValue,
    //         [e.target.name]: value
    //     })
    // }


    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviev(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreviev(null)
        }
    }, [image])
// console.log(validation(inputValue))
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validation(inputValue))
        if (validation(inputValue).length > 0) {
            return
        }
        setInputValue({
            name: '', surname: '', select: '',
            pesel: "", nip: ""
        })


        setFormData({
            ...formData,
            name: inputValue.name,
            surname: inputValue.surname,
            pesel: inputValue.pesel,
            image: [image]
        })
        setImage('')

        setPending(true)
        fetch('https://fer-api.coderslab.pl/v1/exam5/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => setSented(true))
            .catch(err =>
                console.log(err)
            )

    }

    // https://jsonplaceholder.typicode.com/posts/

    // https://localhost:60001/Contractor/Save


    return (
        <>
        <form onSubmit={handleSubmit}>

            <InputText label={'podaj imię'} name={'name'}
                       inputValue={inputValue.name}
                       handleChange={handleChange}/>

            <InputText label={'podaj nazwisko'} name={'surname'}
                       inputValue={inputValue.surname}
                       handleChange={handleChange}/>

            <InputSelect inputValue={inputValue}
                         handleChange={handleChange}/>

            {/*<select name='select'*/}
            {/*        value={inputValue.select}*/}
            {/*        onChange={handleChange}*/}
            {/*>*/}
            {/*    <option value=''>wybierz</option>*/}
            {/*    <option value='osoba'>osoba</option>*/}
            {/*    <option value='firma'>firma</option>*/}
            {/*</select>*/}

            {/*<h2>numer indentyfikacyjny</h2>*/}

            <Input inputValue={inputValue}
                   handleChange={handleChange}
            />

            {/*<input type = 'file' name = 'file'*/}
            {/*       value={inputValue.file}*/}
            {/*       onChange={handlechange}*/}
            {/*/>*/}

            <input type='file'
                // name = 'file'
                // value={inputValue.file}
                // value={file}

                   accept="image/jpg, image/jpeg"
                   placeholder='załącz'
                   onChange={e => setImage(e.target.files[0])}
            />

            <button>wyslij</button>

            {/*<h1>{errors}</h1>*/}
            {/*{sented && <h1>wyslane</h1>}*/}

            {/*{previev &&*/}
            {/*    <img src={previev} style={{width: 100, height: 100}}/>*/}
            {/*}*/}

        </form>
    <h1>{errors}</h1>
    {sented && <h1>wyslane</h1>}

    {previev &&
    <img src={previev} style={{width: 100, height: 100}}/>
    }
        </>

    );
};

export default Form;