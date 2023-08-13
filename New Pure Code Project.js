let toggle = document.getElementById("toggleBtn");
let navBarContent = document.getElementById("navBarContent");
let mainDivForNavBar = document.getElementById("mainDivForNavBar");
toggle.onclick = function() {
    navBarContent.classList.toggle("navbar-nav")
    navBarContent.classList.add("navbar-js-toggle")
    mainDivForNavBar.classList.add("main-div-flex")
}


let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let valueChange = document.getElementById("valueChange");
let priceChange = document.getElementById("priceChange");

let decreaseBtn2 = document.getElementById("decreaseBtn2");
let increaseBtn2 = document.getElementById("increaseBtn2");
let valueChange2 = document.getElementById("valueChange2");
let priceChange2 = document.getElementById("priceChange2");

let decreaseBtn3 = document.getElementById("decreaseBtn3");
let increaseBtn3 = document.getElementById("increaseBtn3");
let valueChange3 = document.getElementById("valueChange3");
let priceChange3 = document.getElementById("priceChange3");

let subTotal = document.getElementById("subTotal");
let shippingEstimate = document.getElementById("shippingEstimate");
let taxEstimate = document.getElementById("taxEstimate");
let orderTotal = document.getElementById("orderTotal");

decreaseBtn.onclick = function() {
    let currentValue = parseInt(valueChange.textContent);
    let priceValue = parseInt(priceChange.textContent);
    console.log(currentValue);
    if (currentValue > 1) {
        currentValue = currentValue - 1;
        valueChange.textContent = currentValue;
        let changeValue = priceValue - 74;
        priceChange.textContent = changeValue;
        priceValue = parseInt(changeValue);

        let subtotalvalue = parseInt(subTotal.textContent);
        subTotal.textContent = subtotalvalue - changeValue;
        let shippingEstimateValue = parseInt(shippingEstimate.textContent);
        shippingEstimate.textContent = shippingEstimateValue - 2;
        let taxEstimateValue = parseInt(taxEstimate.textContent);
        taxEstimate.textContent = taxEstimateValue - 8;
        let orderTotalValue = parseInt(orderTotal.textContent);
        orderTotal.textContent = (subtotalvalue - shippingEstimateValue - taxEstimateValue);
    }
}
increaseBtn.onclick = function() {
    let currentValue = parseInt(valueChange.textContent);
    let priceValue = parseInt(priceChange.textContent);
    console.log(priceValue);
    currentValue = currentValue + 1;
    valueChange.textContent = currentValue;
    let changeValue = priceValue + 74;
    priceChange.textContent = changeValue;
    priceValue = parseInt(changeValue);

    let subtotalvalue = parseInt(subTotal.textContent);
    subTotal.textContent = subtotalvalue + changeValue;
    let shippingEstimateValue = parseInt(shippingEstimate.textContent);
    shippingEstimate.textContent = shippingEstimateValue + 2;
    let taxEstimateValue = parseInt(taxEstimate.textContent);
    taxEstimate.textContent = taxEstimateValue + 8;
    let orderTotalValue = parseInt(orderTotal.textContent);
    orderTotal.textContent = (orderTotalValue + subtotalvalue + shippingEstimateValue + taxEstimateValue);
}

decreaseBtn2.onclick = function() {
    let currentValue = parseInt(valueChange2.textContent);
    let priceValue = parseInt(priceChange2.textContent);
    console.log(currentValue);
    if (currentValue > 1) {
        currentValue = currentValue - 1;
        valueChange2.textContent = currentValue;
        let changeValue = priceValue - 74;
        priceChange2.textContent = changeValue;
        priceValue = parseInt(changeValue);

        let subtotalvalue = parseInt(subTotal.textContent);
        subTotal.textContent = subtotalvalue - changeValue;
        let shippingEstimateValue = parseInt(shippingEstimate.textContent);
        shippingEstimate.textContent = shippingEstimateValue - 2;
        let taxEstimateValue = parseInt(taxEstimate.textContent);
        taxEstimate.textContent = taxEstimateValue - 8;
        let orderTotalValue = parseInt(orderTotal.textContent);
        orderTotal.textContent = (subtotalvalue - shippingEstimateValue - taxEstimateValue);
    }
}
increaseBtn2.onclick = function() {
    let currentValue = parseInt(valueChange2.textContent);
    let priceValue = parseInt(priceChange2.textContent);
    console.log(priceValue);
    currentValue = currentValue + 1;
    valueChange2.textContent = currentValue;
    let changeValue = priceValue + 74;
    priceChange2.textContent = changeValue;
    priceValue = parseInt(changeValue);

    let subtotalvalue = parseInt(subTotal.textContent);
    subTotal.textContent = subtotalvalue + changeValue;
    let shippingEstimateValue = parseInt(shippingEstimate.textContent);
    shippingEstimate.textContent = shippingEstimateValue + 2;
    let taxEstimateValue = parseInt(taxEstimate.textContent);
    taxEstimate.textContent = taxEstimateValue + 8;
    let orderTotalValue = parseInt(orderTotal.textContent);
    orderTotal.textContent = (orderTotalValue + subtotalvalue + shippingEstimateValue + taxEstimateValue);
}

decreaseBtn3.onclick = function() {
    let currentValue = parseInt(valueChange3.textContent);
    let priceValue = parseInt(priceChange3.textContent);
    console.log(currentValue);
    if (currentValue > 1) {
        currentValue = currentValue - 1;
        valueChange3.textContent = currentValue;
        let changeValue = priceValue - 74;
        priceChange3.textContent = changeValue;
        priceValue = parseInt(changeValue);
        let subtotalvalue = parseInt(subTotal.textContent);
        subTotal.textContent = subtotalvalue - changeValue;
        let shippingEstimateValue = parseInt(shippingEstimate.textContent);
        shippingEstimate.textContent = shippingEstimateValue - 2;
        let taxEstimateValue = parseInt(taxEstimate.textContent);
        taxEstimate.textContent = taxEstimateValue - 8;
        let orderTotalValue = parseInt(orderTotal.textContent);
        orderTotal.textContent = (subtotalvalue - shippingEstimateValue - taxEstimateValue);

    }
}
increaseBtn3.onclick = function() {
    let currentValue = parseInt(valueChange3.textContent);
    let priceValue = parseInt(priceChange3.textContent);
    console.log(priceValue);
    currentValue = currentValue + 1;
    valueChange3.textContent = currentValue;
    let changeValue = priceValue + 74;
    priceChange3.textContent = changeValue;
    priceValue = parseInt(changeValue);

    let subtotalvalue = parseInt(subTotal.textContent);
    subTotal.textContent = subtotalvalue - changeValue;
    let shippingEstimateValue = parseInt(shippingEstimate.textContent);
    shippingEstimate.textContent = shippingEstimateValue + 2;
    let taxEstimateValue = parseInt(taxEstimate.textContent);
    taxEstimate.textContent = taxEstimateValue + 8;
    let orderTotalValue = parseInt(orderTotal.textContent);
    orderTotal.textContent = (subtotalvalue + shippingEstimateValue + taxEstimateValue);
}

let cartItemOne = document.getElementById("cartItemOne");
let cartItemRemoveOne = document.getElementById("cartItemRemoveOne");
let cartItemMainDiv = document.getElementById("cartItemMainDiv");

let cartItemTwo = document.getElementById("cartItemTwo");
let cartItemRemoveTwo = document.getElementById("cartItemRemoveTwo");

let cartItemThree = document.getElementById("cartItemThree");
let cartItemRemoveThree = document.getElementById("cartItemRemoveThree");


cartItemRemoveOne.onclick = function() {
    cartItemMainDiv.removeChild(cartItemOne);
}
cartItemRemoveTwo.onclick = function() {
    cartItemMainDiv.removeChild(cartItemTwo);
}
cartItemRemoveThree.onclick = function() {
    cartItemMainDiv.removeChild(cartItemThree);
}

let middleContentLeftPartMainDiv = document.getElementById("middleContentLeftPartMainDiv");
let shippingAdressMainContainer = document.getElementById("shippingAdressMainContainer");
let shippingAdressMainContainerCancelBtn = document.getElementById("shippingAdressMainContainerCancelBtn");

shippingAdressMainContainerCancelBtn.onclick = function() {
    middleContentLeftPartMainDiv.removeChild(shippingAdressMainContainer);
}
