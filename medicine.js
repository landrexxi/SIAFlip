"use strict";
var medicine = /** @class */ (function () {
    function medicine(brand, generic, s, p) {
        this.brandname = brand;
        this.genericname = generic;
        this.stock = s;
        this.price = p;
    }
    return medicine;
}());
var pharma = [];
var addRow;
var purchase;
var edit;
var sell;
addRow = function () {
    var brandname = document.querySelector('#brandname');
    var genericname = document.querySelector('#genericname');
    var stock = document.querySelector('#stock');
    var price = document.querySelector('#price');
    var table = document.querySelector('#medicine');
    var a = new medicine(brandname.value, genericname.value, stock.valueAsNumber, price.valueAsNumber);
    pharma.push(a);
    var count = table.rows.length;
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < pharma.length && j <= pharma.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = pharma[i].brandname;
        row.insertCell(1).innerHTML = pharma[i].genericname;
        row.insertCell(2).innerHTML = pharma[i].stock.toString();
        row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    brandname.value = "";
    genericname.value = "";
    stock.value = "";
    price.value = "";
};
purchase = function () {
    var table = document.querySelector('#medicine');
    var quantitypurchase = document.querySelector('#input_quantity');
    var medpurchase = document.querySelector('#input_medicine');
    var count = table.rows.length;
    var flag = 0;
    for (var i = 0; i < pharma.length; i++) {
        if (pharma[i].brandname.toLowerCase() == medpurchase.value.toLowerCase()) {
            pharma[i].stock += quantitypurchase.valueAsNumber;
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine is Unavailable");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < pharma.length && j <= pharma.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = pharma[i].brandname;
        row.insertCell(1).innerHTML = pharma[i].genericname;
        row.insertCell(2).innerHTML = pharma[i].stock.toString();
        row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    quantitypurchase.value = "";
    medpurchase.value = "";
};
edit = function () {
    var table = document.querySelector('#medicine');
    var brandedit = document.querySelector('#change_brandname');
    var pedit = document.querySelector('#change_price');
    var count = table.rows.length;
    var flag = 0;
    for (var i = 0; i < pharma.length; i++) {
        if (pharma[i].brandname.toLowerCase() == brandedit.value.toLowerCase()) {
            pharma[i].price = pedit.valueAsNumber;
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        alert("Medicine is Unavailable");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < pharma.length && j <= pharma.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = pharma[i].brandname;
        row.insertCell(1).innerHTML = pharma[i].genericname;
        row.insertCell(2).innerHTML = pharma[i].stock.toString();
        row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    brandedit.value = "";
    pedit.value = "";
};
sell = function () {
    var table = document.querySelector('#medicine');
    var quantitysell = document.querySelector('#sell_quantity');
    var medsell = document.querySelector('#sell_medicine');
    var count = table.rows.length;
    var flag = 0;
    for (var i = 0; i < pharma.length; i++) {
        if (pharma[i].brandname.toLowerCase() == medsell.value.toLowerCase()) {
            if (quantitysell.valueAsNumber > pharma[i].stock) {
                alert('Oh, sorry stock is inadequate!');
                flag++;
            }
            else {
                pharma[i].stock -= quantitysell.valueAsNumber;
                flag++;
                break;
            }
        }
    }
    if (flag == 0) {
        alert("Medicine is Unavailable");
    }
    for (var i = count - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
    for (var i = 0, j = 1; i < pharma.length && j <= pharma.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = pharma[i].brandname;
        row.insertCell(1).innerHTML = pharma[i].genericname;
        row.insertCell(2).innerHTML = pharma[i].stock.toString();
        row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    quantitysell.value = "";
    medsell.value = "";
};
