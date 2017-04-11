/* See simple-get-cookie.js */
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

/* See main.js */
if (c("dark-mode")) {
    var i = 'dark-mode';
    var h = document.getElementsByTagName('head')[0];
    var l = document.createElement('link');
    l.id = i;
    l.rel = 'stylesheet';
    l.type = 'text/css';
    l.href=darkModePath;
    l.media='all';
    h.appendChild(l);
}