const shape = document.getElementById('shape');
const stage = document.getElementsByClassName('stage');

loadEventListener();

function loadEventListener(){
    document.addEventListener('click',ringEfect)
}

function ringEfect(e){
    
    if (e.target.id ==="button") {
        
        if (hasClassName(shape,'ring')) {
            removerClassName(shape,'ring');
            addClassName(shape,'cube');
            
        }
        else{
            removerClassName(shape,'cube');
            addClassName(shape,'ring');
            
        }
         
         if (hasClassName(shape, 'ring')){
         stage[0].style.transform = 'translateZ(-100px)';

        }
         else{
            stage[0].style.transform = '';
         }
    }
    


}

function hasClassName(inElement,inClassName){
    let regExp = new RegExp( inClassName );
    return regExp.test(inElement.className);
}

function removerClassName(inElement,inClassName){
        if (hasClassName(inElement,inClassName)) {
            let regExp = new RegExp( inClassName ,'g');
            let curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp,' ');
            
        }
}

function addClassName(inElement,inClassName) {
        if (!hasClassName(inElement,inClassName)) {
            inElement.className = [inElement.className, inClassName].join(' ');  
        }
        
}