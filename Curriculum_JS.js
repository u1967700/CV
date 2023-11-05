const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

window.onload = function() {
    document.querySelector("h1").onmouseover = event => {
        let iterations = 0;
        
        clearInterval(interval);

        interval = setInterval(() => {    
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iterations){
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

            if(iterations >= event.target.dataset.value.lenght){
                clearInterval(interval);
            } 

            iterations += 1 / 3;
        }, 30);
    }
}