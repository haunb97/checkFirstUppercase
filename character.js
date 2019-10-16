function checkCharacter(str) {
    regexp = /^[A-Z]/;
    if(regexp.test(str)){
        console.log('string is first character is uppercase');
    }
    else {
        console.log('string is first character is not uppercase')
    }
}
checkCharacter('Ahs');
checkCharacter('hau');