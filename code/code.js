const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent = "Reset Canvas"
body.appendChild(button);

const main = document.createElement('div');
main.className = "Main"
body.appendChild(main);

createCanvas(16);

function createCanvas(size){

    for(var i = 0; i < size; i++) {

        const div = document.createElement('div');
        div.className = "container";
        main.appendChild(div);
       
        for(var j = 0; j < size; j++) {
    
            const content = document.createElement('div');
            div.appendChild(content);
        
            if(i % 2 === 0){
    
                if(j % 2 === 0 ){
                    content.className = "content Red";
                } else {
                    content.className = "content Blue";
                }
    
            }
            else {
    
                if(j % 2 === 0 ){
                    content.className = "content Blue";
                } else {
                    content.className = "content Red";
                }
    
            }
    
            content.addEventListener("mouseenter", function(event){
                console.log("HEllo")
                console.log(event.target)
                event.target.className = "content black";
            
            
            })
            
            
        }
    
        
    
    }


}


button.addEventListener('click', function() {

    const size = parseInt(prompt("Assign Canvas Size"));

    if(typeof size !== 'number') {
        alert("Wrong Input! Only Numbers")
        return;
    }

    resetCanvas(size);


})

function resetCanvas(size){

    main.innerHTML = "";
    createCanvas(size);



}

