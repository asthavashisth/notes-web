const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to show notes from localStorage
function showNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
        // Reattach event listeners to existing notes
        attachEventListenersToNotes();
    }
}

// Function to update localStorage with the current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to handle the creation of new notes
function createNote() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "deleteicon.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    attachEventListenersToNotes();
    updateStorage();
}

// Function to attach event listeners to notes and delete icons
function attachEventListenersToNotes() {
    // Handle delete icon click
    document.querySelectorAll(".input-box img").forEach(img => {
        img.addEventListener("click", () => {
            img.parentElement.remove();
            updateStorage();
        });
    });

    // Handle note edit
    document.querySelectorAll(".input-box").forEach(note => {
        note.addEventListener("keyup", () => {
            updateStorage();
        });
    });
}

// Initial setup
showNotes();

createBtn.addEventListener("click", createNote);

// Handle line breaks with Enter key
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});



