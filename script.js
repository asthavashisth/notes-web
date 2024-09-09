const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");


function showNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
       
        attachEventListenersToNotes();
    }
}



function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}



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


function attachEventListenersToNotes() {
    
    document.querySelectorAll(".input-box img").forEach(img => {
        img.addEventListener("click", () => {
            img.parentElement.remove();
            updateStorage();
        });
    });

   
    document.querySelectorAll(".input-box").forEach(note => {
        note.addEventListener("keyup", () => {
            updateStorage();
        });
    });
}


showNotes();

createBtn.addEventListener("click", createNote);



document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});



