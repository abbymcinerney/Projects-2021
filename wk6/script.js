

function myLoadFunction() {
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('body');
    element.firstChild.nodeValue = 'New body';
}

function myLoadFunction() {
var element = document.getElementById('pageheading');
element.addEventListener('click', myClickFunction);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);

function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    
}

print5();
print5();

