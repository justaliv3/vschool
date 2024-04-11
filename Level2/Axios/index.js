
// //Get all
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = response.data[i].title
//             document.body.appendChild(h1)
//         }
//     })
//     .catch(error => console.log(error))


//Get One
// axios.get("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))



const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/scrimbalessons/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    
})

