// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0) {
        return {};
    }

    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    var H, Q, D, N, P;
    var result = {};
    
    H = parseInt(currency / 50);
    currency = currency % 50;
    Q = parseInt(currency / 25);
    currency = currency % 25;
    D = parseInt(currency / 10);
    currency = currency % 10;
    N = parseInt(currency / 5);
    P = parseInt(currency % 5);

    if(H > 0) {
        result["H"] = H;
    }

    if(Q > 0) {
        result["Q"] = Q;
    }

    if(D > 0) {
        result["D"] = D;
    }

    if(N > 0) {
        result["N"] = N;
    }

    if(P > 0) {
        result["P"] = P;
    }

    return result;
}