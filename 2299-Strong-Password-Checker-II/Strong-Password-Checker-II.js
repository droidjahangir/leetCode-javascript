var strongPasswordCheckerII = function(password) {
    const regex = new RegExp("^(?!.*(.)\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-]).{8,}$", 'g')
    return regex.exec(password) !== null
};