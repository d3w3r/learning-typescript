function padLeftA(padding, input) {
    throw new Error("Not implemented yet!");
}
function padLeftB(padding, input) {
    // return " ".repeat(padding) + input; // there is a validation
    throw new Error("Not implemented yet!");
}
function padLeftC(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
function printAllA(strs) {
    if (typeof strs === "object") {
        // The type null with the operator typeof is an object
        // for (const s of strs) {
        //   console.log(s);
        // }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
function getUserOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
// both of these result in 'true'
Boolean("hello");
!!"hello";
function printAllB(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function printAllC(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("HoLa", "ByE");
example("HoLa", "HoLa");
example(3, "ByE");
example(3, true);
example("ByE", true);
