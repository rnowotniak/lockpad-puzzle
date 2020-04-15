

function rule1(s) {
    if (s.match(/^[^1](1[^1]|[^1]1)$/)
        || s.match(/^(4[^4][^4]|[^4][^4]4)$/)
        || s.match(/^(7[^7]|[^7]7)[^7]$/)
    ) {
        return true;
    }
    return false;
};

function rule2(s) {
    if (s.match(/^(1[^189][^189]|[^189]8[^189]|[^189][^189]9)$/)) {
        return true;
    }
    return false;
}

function rule3(s) {
    if (s.match(/[^946]96/)
        || s.match(/^6[^469]9/)
        || s.match(/^[^469]96/)) {
            return true;
    }
    if (s.match(/[^469]49/)
        || s.match(/^49[^469]/)
        || s.match(/4[^469]9/)) {
            return true;
    }
    if (s.match(/^64[^649]/)
        || s.match(/^4[^649]6/)
        || s.match(/^[^649]46/)) {
            return true;
    }
    return false;
}

function rule4(s) {
    if (s.match(/^(5..|.2.|..3)$/)) {
        return false;
    }
    return true;
}

function rule5(s) {
    if (s.match(/^[^2](2[^2]|[^2]2)$/)
        || s.match(/^(8[^8][^8]|[^8][^8]8)$/)
        || s.match(/^(6[^6]|[^6]6)[^6]$/)
    ) {
        return true;
    }
    return false;
}

var count = 0;
for (var i = 0; i < 1000 ; i++) {
    var s = i.toString().padStart(3, '0');

    if (rule1(s)
     && rule2(s)
     && rule3(s)
     && rule4(s)
     && rule5(s)
    ) {
        console.log(s)
        count++;
    }
}

console.log('----\n' + count)
