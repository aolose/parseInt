function _parseInt(x, y=10) {
    x = (x + '').toLowerCase();
    let a, b = 1, c = '', d = 0, i = -1;
    const n = '0123456789abcdefghijklmnopqrstuvwxyz';
    while (a = x[++i]) {
        if (i === 0) {
            if (a === '-') {
                b = -1;
                continue;
            } else if (a === '+')
                continue;
        }
        if (a <= n[y]&&a>='0')
            c +=a;
        else break;    
    }
    if (c === '')
        return NaN;
    let l = i = c.length;
    while (i--) {
        d += Math.pow(y, l - i - 1) * n.indexOf(c[i]);
    }
    return b * d;
}
