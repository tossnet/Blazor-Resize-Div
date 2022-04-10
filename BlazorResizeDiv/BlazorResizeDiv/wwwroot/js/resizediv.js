export var element;
export var dotNet;

export function startMove(dotNetHelper, elementId) {

    dotNet = dotNetHelper;
    element = document.getElementById(elementId);

    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResize)
    //element.addEventListener('mousedown', function (e) {
    //    e.preventDefault()
    //    window.addEventListener('mousemove', resize)
    //    window.addEventListener('mouseup', stopResize)
    //});
}

export function resize(e) {
    if (dotNet != null) {
        //if (currentResizer.classList.contains('bottom-right')) {
        element.style.width = e.pageX - element.getBoundingClientRect().left + 'px'
        //}
    }
}

export function stopResize() {
     window.removeEventListener('mousemove', resize);
     window.removeEventListener('mouseup', stopResize)

     dotNet.invokeMethodAsync('ReturnSize', element.style.width);

     dotNet.dispose();
     dotNet = null;
}