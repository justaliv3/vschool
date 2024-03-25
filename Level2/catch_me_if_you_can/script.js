function sumNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('This is not a number');
    }
    
    return a + b;
}


try {
    console.log(sumNumbers(5, 10)); // Output: 15
    console.log(sumNumbers("5", 10)); // Throws error
} catch (error) {
    console.error(error.message);
}

//User Login

var user = {username: "sam", password: "123abc"}

function login(username, password){
    if (username !== user.username || password !== user.password){
        throw new Error("Username or Password do not match")
    }
    return "login successful"
}

try{
    console.log(login ("sam" , "123abc")) // login successful
    console.log (login("pete", "2234")) //throws error
} catch (error){
    console.log(error.message)
}