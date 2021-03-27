function updateHeader() {
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Heading';
}

function updateBody() {
    var element = document.getElementById('body');
    element.firstChild.nodeValue = 'New body';
}

function myLoadFunction() {
    var element = document.getElementById('heading');
    element.addEventListener('click', updateHeader)

    var element = document.getElementById('body');
    element.addEventListener('click', updateBody)
    
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

