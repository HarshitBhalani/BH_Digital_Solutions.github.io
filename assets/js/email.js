function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        Number: document.getElementById("Number").value,
        category: document.getElementById("category").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_nbj643b";
    const templateID = "template_yyqo59k";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Number").value = ""; 
            document.getElementById("category").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
}