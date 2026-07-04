const sidebar = document.querySelector('.left');
const handle = document.querySelector('.resize-handle');
let isResizing = false;

handle.addEventListener('mousedown',function(e){
    isResizing= true;
    document.body.style.cursor = 'col-resize';
});
document.addEventListener('mousemove',function(e){
    if(!isResizing) return;
    const newWidth = e.clientX;
    if(newWidth > 200 && newWidth < 500){
        sidebar.style.width = newWidth + 'px';
    }
});
document.addEventListener('mouseup' ,function(){
    isResizing = false;
    document.body.style.cursor = 'default';
});