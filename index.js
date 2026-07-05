const sidebar = document.querySelector('.left');
const rsidebar  = document.querySelector('.right');
const handle = document.querySelector('.resize-handle');
let isResizing = false;

handle.addEventListener('mousedown',function(e){
    isResizing= true;
    document.body.style.cursor = 'col-resize';
});
document.addEventListener('mousemove',function(e){
    if(!isResizing) return;
    const newLWidth = e.clientX;
    const newRWidth = document.querySelector(".container").clientWidth - e.clientX;
    if(newLWidth > 200 && newLWidth < 500){
        sidebar.style.width = newLWidth + 'px';
        rsidebar.style.width = newRWidth+ 'px';
    }
});
document.addEventListener('mouseup' ,function(){
    isResizing = false;
    document.body.style.cursor = 'default';
});
