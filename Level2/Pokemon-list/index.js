axios.get("https://api.vschool.io/pokemon")
    .then(response =>  {
        for(let i = 0; i < response.data.objects[0].pokemon.length; i++){
            const li = document.createElement('li');
            li.textContent = response.data.objects[0].pokemon[i].name
            console.log(li.textContent);
            document.body.appendChild(li)
        }
    })
    .catch(error => console.log(error))


    // for(let i = 0; i < response.data.length; i++){
    //     const h1 = document.createElement('h1')
    //     h1.textContent = response.data[i].title
    //     document.body.appendChild(h1)
    // }