


var listgroup = document.querySelector('.list-group');


window.onscroll = function(){

    if(scrollY >= 100 ){
        listgroup.style.position = 'fixed';
    }
    
    else{
        listgroup.style.position = 'absolute';
    }
}

