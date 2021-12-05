let textArea = document.getElementById("textArea");
let btn = document.getElementById("btn");
let notes = document.getElementById("notes");
let screenValue = document.getElementsByClassName("screen");
let screen = localStorage.getitem;

btn.addEventListener("click", function () {
    //console.log((textArea.value).toUpperCase());
    if (textArea !== null) {
        //console.log((textArea.value).toUpperCase());

        textArea.value = (textArea.value).toUpperCase();
    }



})
let lower = document.getElementById("lower");
lower.addEventListener("click", function () {

    if (textArea !== null) {
        //console.log((textArea.value).toLowerCase());
        textArea.value = (textArea.value).toLowerCase();
    }
})

let clear = document.getElementById("clear")
clear.addEventListener("click", function () {

    if (textArea !== null) {
        textArea.value = " ";
    }
})


/// view the notes




console.log("display")

//element.innerText=="this is inner js text";



// extract phone
let ExtractPhone = document.getElementById("ExtractPhone")
ExtractPhone.addEventListener("click", function () {

    stringis = textArea.value;

    phone = stringis.match(/[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/)
    Phone = phone.toString()
    console.log(Phone)
    document.getElementById("phone").innerText = Phone


})

// extract email

let ExtractEmail = document.getElementById("ExtractEmails")
ExtractEmails.addEventListener("click", function () {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var mail = textArea.value.match(email)

    document.getElementById("Mail").innerText = mail
    console.log(mail)
    //}

})
//// copy function
let copy = document.getElementById("copy")
copy.addEventListener("click", function () {

    if (textArea !== null) {
        textArea.value = textArea.value;
        console.log(textArea.value)
    }
})
