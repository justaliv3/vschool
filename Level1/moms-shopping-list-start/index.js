const newItem = document.addItem
console.log(newItem)


newItem.addEventListener("submit", (event) => {
    event.preventDefault()
    const item = newItem.title.value
    newItem.title.value = ''
    console.log(item)
    //Add Item
    const li = document.createElement ('li')
    const div = document.createElement('div')
    div.textContent = item
    li.append(div)
    //Add Edit
    const edit = document.createElement("button")
    edit.innerHTML = "edit"
    li.append(edit)
    //Add X
    const xbox = document.createElement("button")
    xbox.innerHTML = "X"
    li.append(xbox)
    document.getElementsByTagName("ul")[0].append(li)
    //delete 
    xbox.addEventListener('click', function(){
        li.remove()
    /* edit - A user will be able to click the "edit" button and see an input box appear
    - When the user clicks the "edit" button, a "save" button replace the "edit" button
    - The input box will automatically have the value of the list item
    - The user can edit and "save" the input box's value
    - On save, the input box will disappear, and the new value will appear*/
    /*edit.addEventListener('click'function(){
            const inputbox = document.createElement('input');
            edit.innerHTML = 'save'
            inputbox = item.value
            edit.addEventListener('click'function(){

            })*/
    })
    })

//Edit Button



