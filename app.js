document.addEventListener('DOMContentLoaded',() => {
    const grid=document.querySelector('.grid');
    const doodler=document.createElement('div');
    let doodleleft=50;
    let doodlerbottom=150;

    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left=doodleleft +'px';
        doodler.style.bottom=doodlerbottom+'px';
        
    }
    createDoodler()
    

})
