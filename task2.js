
const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Get error message elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous messages

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    let valid = true;


    /* =====================================
       NAME VALIDATION
    ===================================== */

    if (name === "") {

        nameError.textContent =
            "Name is required.";

        valid = false;

    }

    else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        valid = false;

    }


    /* =====================================
       EMAIL VALIDATION
    ===================================== */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Email is required.";

        valid = false;

    }

    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    /* =====================================
       MESSAGE VALIDATION
    ===================================== */

    if (message === "") {

        messageError.textContent =
            "Message is required.";

        valid = false;

    }

    else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;

    }


    /* =====================================
       SUCCESS
    ===================================== */

    if (valid) {

        successMessage.textContent =
            "Form submitted successfully!";

        contactForm.reset();

    }

});


/* =========================================
   DYNAMIC TO-DO LIST
========================================= */

const taskInput =
    document.getElementById("taskInput");

const addTask =
    document.getElementById("addTask");

const taskList =
    document.getElementById("taskList");


/* =========================================
   ADD TASK
========================================= */

addTask.addEventListener("click", function() {

    const taskText =
        taskInput.value.trim();


    // Don't add an empty task

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create <li>

    const listItem =
        document.createElement("li");


    // Create task text

    const text =
        document.createElement("span");

    text.textContent = taskText;

    text.className = "task-text";


    /* =====================================
       COMPLETE TASK
    ===================================== */

    text.addEventListener("click", function() {

        text.classList.toggle("completed");

    });


    // Create delete button

    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";


    /* =====================================
       DELETE TASK
    ===================================== */

    deleteButton.addEventListener("click", function() {

        listItem.remove();

    });


    // Put text and button inside <li>

    listItem.appendChild(text);

    listItem.appendChild(deleteButton);


    // Put <li> inside <ul>

    taskList.appendChild(listItem);


    // Clear input box

    taskInput.value = "";

});


/* =========================================
   ENTER KEY TO ADD TASK
========================================= */

taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addTask.click();

    }

});
