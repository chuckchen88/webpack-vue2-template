const reverse = (value) => { 
    return value.split('').reverse().join('') 
}
const tel2asterisk = (tel) => {
    return tel.substr(0,3) + "****" + tel.substr(7)
}

export {
    reverse,
    tel2asterisk
}