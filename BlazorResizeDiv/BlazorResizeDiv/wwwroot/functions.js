var element;
var dotNet;

function startMove(dotNetHelper, elementId) {

    dotNet = dotNetHelper;
    element = document.getElementById(elementId);

    element.addEventListener('mousedown', function (e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
    });
}

 function resize(e) {
    //if (currentResizer.classList.contains('bottom-right')) {
    element.style.width = e.pageX - element.getBoundingClientRect().left + 'px'
    //}
}

 function stopResize() {
     window.removeEventListener('mousemove', resize);
     dotNet.invokeMethodAsync('ReturnSize', element.style.width);

     dotNet.dispose();
}