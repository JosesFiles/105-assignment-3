

function saveUser(user) {
    let existing =getALLUsers();
    existing.push(user); //add new user to th list

    //JSON = JavaScript Object Notation
    let value = JSON.stringify(user); //<--parse the object into a json string

    //localStorage supports: string, numbers
    localStorage.setItem("users", value)
}

function getALLUsers(){
    let allUsers =[];

    let string = localStorage.getItem("users"); //read the json string
    if(string) {

        // parse the string into an array
        allUsers = JSON.parse(string);
        return allUsers;
        
    }
    else {
        return [];
    }

}