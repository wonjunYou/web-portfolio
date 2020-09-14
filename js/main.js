(() =>{

    let yOffset = 0;
    
    const sceneInfo = [
        {
            //main
            heightNum: 1,
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            //About
            heightNum: 1,
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }            
        },
        {
            //project
            heightNum: 1,
            scrollHeight: 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }
        }
    ];

    function setLayout(){
        for (let i=0; i<sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0 ;
        for (let i =0; i<sceneInfo.length; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`);
    }

    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
    setLayout();
})();