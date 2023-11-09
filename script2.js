(function(){
    "use strict";

    var myimg = [ "image1.jpg" , "image2.jpg" , "image3.jpg" , "image4.jpg" , "image5.jpg" ];
    var currentImg = 0;
    var contai = document.getElementById('content');
    var nextPhoto=document.getElementById('next');
    var previousPhoto=document.getElementById('previous');

    function swapImg(){
        var newSlide = document.createElement('img');
        newSlide.src=`slides/${myimg[currentImg]}`;
        newSlide.className='fadeining';
        contai.appendChild(newSlide);

        if(contai.children.length>2){
            contai.removeChild(contai.children[0]);
        }
    }
        
    nextPhoto.addEventListener('click',function(event){
        event.preventDefault();

        currentImg++;
        if(currentImg>(myimg.length-1)){
            currentImg=0;
        }
        swapImg();
    });

    previousPhoto.addEventListener('click',function(event){
        event.preventDefault();

        currentImg--;
        if(currentImg<0){
            currentImg=myimg.length-1;
        }
        swapImg();
    });
})();