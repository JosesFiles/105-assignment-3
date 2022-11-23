
function User(fname,lname,age,gender,phone,payment,color){
    //list of attributes
    this.firstName=fname;
    this.lastname=lname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function register() {
    let inputFirstName=$("#txtFirstName").val();
    let inputLastName=$("#txtLastName").val();
    let inputAge=$("#txtAge").val();
    let inputGender=$("#txtGender").val;
    let inputPhone=$("#txtPhone").val;
    let inputPayment=$("#selPayment").val;
    let inputColor=$("#selColor").val;

    //validations
    if(inputFirstName || !inputLastName) {
        console.error("invalid data");
        return;  // get out of the fn, do no continue
    }


    let newUser = new User(inputFirstName,inputLastName,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    console.log(newUser);

    saveUser(newUser);
    console.log('User saved!!')

    clearForm();
}

function clearForm() {
    $('#txtFirstName').val("");
    $('#txtLastName').val("");
    $('#txtAge').val("");
    $('#txtGender').val("");
    $('#txtPhone').val("");
    $('#selPayment').val("");
    $('#selColor').val("#000000");
}


function init() {
    //html is ready
    console.log('page ready!');

    //load data

    //asigns envents

    $("#btnSave").click(register);
}  
//wait for HTML to be rendered
window.onload = init;

// //javascript
// document.getElementById("txtAge").style.display="none"; 
// //jquery
// $("#txtAge").hide();
// $("#txtAge").val(); //document.getElementById("txtAge").value;
//Single Responsibility principle (SRP)
// # for ID
// . class
// h1 for tags