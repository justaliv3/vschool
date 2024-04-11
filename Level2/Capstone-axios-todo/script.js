//On Page Load Get function
window.addEventListener('load', function() {
    fetch('https://api.vschool.io/justinbrown/todo') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => { 
        data.forEach(todo => {
            const listItem = document.createElement('li');

            // Create checkbox for completion status
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed; // Set checkbox as checked for completed todos
            checkbox.addEventListener('change', function() {
                // Update the database when checkbox is checked or unchecked
                updateTodoCompletion(todo._id, checkbox.checked);
            });

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                // Delete the todo when the button is clicked
                deleteTodo(todo._id);
                listItem.remove(); // Remove the todo item from the DOM
            });

            // Create elements for other todo properties
            const titleElement = document.createElement('h2');
            const descriptionElement = document.createElement('p');
            const priceElement = document.createElement('p');
            const imgElement = document.createElement('img');

            // Assign values to elements
            titleElement.textContent = todo.title;
            descriptionElement.textContent = todo.description;
            priceElement.textContent = `Price: $${todo.price}`;
            imgElement.src = todo.imgUrl;
            imgElement.alt = todo.title;
            imgElement.width = 100;

            // Append elements to list item
            listItem.appendChild(checkbox);
            listItem.appendChild(titleElement);
            listItem.appendChild(descriptionElement);
            listItem.appendChild(priceElement);
            listItem.appendChild(imgElement);
            listItem.appendChild(deleteButton); // Append delete button to list item

            // Append list item to the todo list
            document.getElementById('todoList').appendChild(listItem);
        });
    })
    .catch(error => console.log(error));

    function updateTodoCompletion(todoId, completed) {
        fetch(`https://api.vschool.io/justinbrown/todo/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(updatedTodo => console.log('Todo updated:', updatedTodo))
        .catch(error => console.error('Error updating todo:', error));
    }

    function deleteTodo(todoId) {
        fetch(`https://api.vschool.io/justinbrown/todo/${todoId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Todo deleted successfully');
        })
        .catch(error => console.error('Error deleting todo:', error));
    }
});



//Part 2 Post to To Do list

const form = document.getElementById('todoForm');
const titleInput = document.getElementById('titleInput');
const priceInput = document.getElementById('priceInput');
const descriptionInput = document.getElementById('descriptionInput');
const imgUrlInput = document.getElementById('imgUrlInput');
const todoList = document.getElementById('todoList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = titleInput.value;
    const price = priceInput.value;
    const description = descriptionInput.value;
    const imgUrl = imgUrlInput.value;

    if (!title || !price || !description || !imgUrl) {
        alert('Please fill in all fields.');
        return;
    }

    const todoData = {
        title,
        price,
        description,
        imgUrl
    };

    fetch('https://api.vschool.io/justinbrown/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(newTodo => {
        appendTodoToList(newTodo);
        titleInput.value = '';
        priceInput.value = '';
        descriptionInput.value = '';
        imgUrlInput.value = '';
    })
    .catch(error => console.error('Error adding todo:', error));
});

function appendTodoToList(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <h2>${todo.title}</h2>
        <p>Price: $${todo.price}</p>
        <p>${todo.description}</p>
        <img src="${todo.imgUrl}" alt="${todo.title}" width="100">
    `;
    todoList.appendChild(li);
}




// //Create a form object linked to addItem by name
// const form = document.addItem

// //Listen for submit event
// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     //Save the value entered. Then clear the value from box after entered.
//     // Input box named title becomes a JS object.
//     const inputBox = document.getElementById("title")
//     //Variable todoText is equal to whatever value is entered into the input box.
//     const todoText = inputBox.value
    
//     addItemToList(todoText)
//     form.title.value = ""
// })

//      //Adds an item to the list.
// function addItemToList(item) {
    
//     //Create a variable called grocery and give it a newly created li element.
//     const list = document.getElementById("list")
//     const grocery = document.createElement("li")
//     const deleteButton = document.createElement("button")
//     const editButton = document.createElement("button")
    
//     //Assign the attribute value as the content of grocery. 
//     grocery.textContent = item 
//     list.className = "list";
//     deleteButton.textContent = "Delete";
//     deleteButton.id = "delete-button";
//     editButton.textContent = "Edit";
//     editButton.id = "edit-button";
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }
    
//     axios.post("https://api.vschool.io/justinbrown/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
    
//     deleteButton.addEventListener("click", function(event) {
//         event.preventDefault()
//         removeItem()
//     })

// //=========================START HERE======================================
//     editButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         editItem()
//     });

//     function editItem() {
//         // Part 1 - ELEMENT CREATION
//         // Create input box, assign id
//         const saveBox = document.createElement("input");
//         saveBox.id = "save-box";
    
//         // Create button, assign text, assign id
//         const saveButton = document.createElement("button");
//         saveButton.textContent = "Save";
//         saveButton.id = "save-button";
    
//         // PART 2 - CONDITIONAL
//         // Check if input box and button are already present
//         const existingSaveBox = document.getElementById("save-box");
//         const existingSaveButton = document.getElementById("save-button");
    
//         // Create an input box if it doesn't exist
//         if (!existingSaveBox) {
//             document.getElementById("list").appendChild(saveBox);
//         }
    
//         // Create a button called save if it doesn't exist
//         if (!existingSaveButton) {
//             document.getElementById("list").appendChild(saveButton);
//             // Add event listener for the save button
//             saveButton.addEventListener("click", function (event) {
//                 event.preventDefault();
//                 // Replace the original value with the value in the save box
//                 grocery.textContent = saveBox.value;
//                 // Remove the save button and save box
//                 saveButton.remove();
//                 saveBox.remove();
//                 grocery.append(deleteButton);
//                 grocery.append(editButton);
//             });
//         }
//     }

//     //Get the element with the id add-todo and append li to the list in the DOM. 
//     document.getElementById("list").appendChild(grocery)
//     grocery.append(deleteButton)
//     grocery.append(editButton)// Step 12

//     function removeItem(){
//         grocery.remove()
//     }

// }