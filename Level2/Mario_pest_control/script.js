const form = document.myform

form.addEventListener("submit", function(event){
        event.preventDefault();
        const goomba = form.goomba.value;
        const bomb = form.bomb.value;
        const cheep = form.cheep.value;
        const sum = Number((5*goomba)+Number(7*bomb)+Number(11*cheep));
        
        // const h1 = document.createElement('h1')
        // h1.textContent = sum;
        // document.getElementsByTagName("body")[0].append(h1)

        const p = document.getElementById('total')
        p.textContent = sum + " coins"


})