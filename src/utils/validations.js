export function validateEmail(email) {
    const re = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
   const rep = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
   return rep.test(String(password));
}

export function validateAsunto(asunto){

}