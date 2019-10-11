module.exports = function check(str, bracketsConfig) {

    let n = str.length;

    if (n % 2 != 0 || n == 0) {
        return false;
    }

    let strArray = str.split('');

    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let open = bracketsConfig[j][0];
            let closed = bracketsConfig[j][1];

            if (strArray[i] == open && strArray[i + 1] == closed) {
                strArray.splice(i, 2);
                i -= 2;
            }
        }
    }

    return (strArray.length == 0) ? true : false


}