const zero = document.getElementById('zero');
zero.addEventListener("click", function (e) {
    calc.display.value += '0';
    e.preventDefault();
});
const one = document.getElementById('one');
one.addEventListener("click", function (e) {
    calc.display.value += '1';
    e.preventDefault();
});
const two = document.getElementById('two');
two.addEventListener("click", function (e) {
    calc.display.value += '2';
    e.preventDefault();
});
const add = document.getElementById('add');
add.addEventListener("click", function (e) {
    calc.display.value += '+';
    e.preventDefault();
});
const three = document.getElementById('three');
three.addEventListener("click", function (e) {
    calc.display.value += '3';
    e.preventDefault();
});
const four = document.getElementById('four');
four.addEventListener("click", function (e) {
    calc.display.value += '4';
    e.preventDefault();
});
const five = document.getElementById('five');
five.addEventListener("click", function (e) {
    calc.display.value += '5';
    e.preventDefault();
});
const sub = document.getElementById('sub');
sub.addEventListener("click", function (e) {
    calc.display.value += '-';
    e.preventDefault();
});
const six = document.getElementById('six');
six.addEventListener("click", function (e) {
    calc.display.value += '6';
    e.preventDefault();
});
const sev = document.getElementById('sev');
sev.addEventListener("click", function (e) {
    calc.display.value += '7';
    e.preventDefault();
});
const eit = document.getElementById('eit');
eit.addEventListener("click", function (e) {
    calc.display.value += '8';
    e.preventDefault();
});
const mul = document.getElementById('mul');
mul.addEventListener("click", function (e) {
    calc.display.value += '*';
    e.preventDefault();
});
const nin = document.getElementById('nin');
nin.addEventListener("click", function (e) {
    calc.display.value += '9';
    e.preventDefault();
});
const del = document.getElementById('del');
del.addEventListener("click", function (e) {
    calc.display.value += '';
});
const eql = document.getElementById('eql');
eql.addEventListener("click", function (e) {
    calc.display.value = eval(calc.display.value);
    e.preventDefault();
});
const div = document.getElementById('div');
div.addEventListener("click", function (e) {
    calc.display.value += '/';
    e.preventDefault();
});