/**
 * Method to save a new cookie
 * @param {String} name 
 * @param {Any} value 
 * @param {Integer} days 
 */
exports.create = function (name, value, days = '1') {
    var date = new Date();
    var expires = "";
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = ";expires=" + date.toGMTString();
    try {
        document.cookie = name + "=" + value + expires + "; path=/";
        return true;
    } catch (e) {
        console.log(e);
    }
    return false;
};

/**
 * Method to get cookie
 * @param {String} name
 */
exports.get = function (name) {
    try {
        var cookies = document.cookie;
        name = " " + name + "=";
        if (cookies.indexOf(name) == -1) {
            return false;
        }
        cookies = cookies.substr(cookies.indexOf(name), cookies.length);
        if (cookies.indexOf(';') != -1) {
            cookies = cookies.substr(0, cookies.indexOf(';'));
        }
        cookies = cookies.split('=')[1];
        return decodeURI(cookies);
    } catch (e) {
        console.log(e);
    }
    return false;
};

/**
 * Method to destroy cookie
 * @param {String} name 
 */
exports.destroy = function (name) {
    var date = new Date(2010,1,1);
    date = date.toGMTString();
    try {
        document.cookie = name + "=;expires=" + date + ';path=/';
        return true;
    } catch (e) {
        console.log(e)
    }
    return false;
};
