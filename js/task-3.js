"use strict";

function getElementWidth(content, padding, border) {
    let makeNumberContent = Number.parseFloat (content);
    let makeNumberPadding = Number.parseFloat (padding);
    let makeNumberBorder = Number.parseFloat (border);

    return makeNumberContent + 2 * (makeNumberPadding + makeNumberBorder);

}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 