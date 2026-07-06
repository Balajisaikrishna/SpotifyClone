const sidebar = document.querySelector('.left');
const rsidebar = document.querySelector('.right');
const handle = document.querySelector('.resize-handle');
let isResizing = false;

handle.addEventListener('mousedown', function (e) {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
});
document.addEventListener('mousemove', function (e) {
    if (!isResizing) return;
    const newLWidth = e.clientX;
    const newRWidth = document.querySelector(".container").clientWidth - e.clientX;
    if (newLWidth > 200 && newLWidth < 500) {
        sidebar.style.width = newLWidth + 'px';
        rsidebar.style.width = newRWidth + 'px';
    }
});
document.addEventListener('mouseup', function () {
    isResizing = false;
    document.body.style.cursor = 'default';
});
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let Songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            Songs.push(element.href.split('/songs/')[1])
        }
    }
    return Songs;
}
async function main() {
    let songs = await getSongs();
    let songul = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];
        songul.innerHTML = songul.innerHTML +
            `<li>
         <img class="invert" src="Raseone-Record.svg" alt="">
                            <div class="info">
                                <div>${(songs[i]).replaceAll("%20","").split('.')[0]}</div>
                                <div>Balu</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="" src="play.svg" alt="">
                            </div>
           </li>`;
    }

    // var audio = songs[0];
    // audio.addEventListener("loadeddata" , ()=>{
    //     let duration = audio.duration;
    //     console.log(duration);
    //     audio.play(); 
    // })  
}
main();          
