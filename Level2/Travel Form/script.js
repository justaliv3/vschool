const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstName = form.firstName.value;
    console.log(firstName);
    const lastName = form.lastName.value;
    console.log(lastName)
    // Radio Inputs for Gender
    const gender = form.gender.value
    console.log(gender)
    //Dropdown for City
    const city = form.city.value
    console.log(city)
    //Checkbox for Dietary Restrictions
    const checkedInputs = []
    
    for(let i = 0; i < form.dietary.length; i++){
         if(form.dietary[i].checked){
             checkedInputs.push(form.dietary[i].value)
         }
     }
     console.log(checkedInputs)
    
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Gender: " + gender + "\n" + "City: " + city + "\n" + "Dietary Restrictions: " + checkedInputs);
    
    
})

