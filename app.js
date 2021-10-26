var flag = 0;
const menuElem = document.getElementById('ddl');
const titleElem = document.querySelector('.dropdownList__title');

function newimage(){
    if(flag==0){
        document.i1.src="img/i1.png";
        flag=1;
    }
    else{
        document.i1.src="img/i2.png";
        flag=0;
    }
}


titleElem.addEventListener('click', function() {
     menuElem.classList.toggle('open');
});
