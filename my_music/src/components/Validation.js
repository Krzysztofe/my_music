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


export const validation = (inputValue, selectValue) => {
    let _errorsPesel = []
    let _errorsNip = []
    let _errorEmpty = ['Podaj typ']

    if (peselValidation(inputValue) === false) {
        _errorsPesel.push('Podaj właściwy nr PESEL')
    }
    if (nipValidation(inputValue) === false) {
        _errorsNip.push('Podaj właściwy nr NIP')
    }

    if (selectValue === 'Osoba') {
        return _errorsPesel
    } else if (selectValue === "Firma") {
        return _errorsNip
    } else if (selectValue === "Wybierz") {
        return _errorEmpty
    }
}