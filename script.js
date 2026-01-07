document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteText = document.getElementById("noteText");
    const notesGrid = document.getElementById("notesGrid");
    const errorMessage = document.getElementById("errorMessage");

    addNoteBtn.addEventListener("click", handleAddNote);

    function handleAddNote() {
        const text = noteText.value.trim();

        if (!text) {
            showError();
            return;
        }

        hideError();
        const noteElement = createNote(text);
        notesGrid.appendChild(noteElement);
        noteText.value = "";
    }

    function createNote(content) {
    const note = document.createElement("article");
    note.className = "note";

    const paragraph = document.createElement("p");
    paragraph.className = "note__content";
    paragraph.textContent = content;

    const actions = document.createElement("div");
    actions.className = "note__actions";

    // EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.className = "note__edit";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            paragraph.contentEditable = "true";
            paragraph.focus();
            editBtn.textContent = "Save";
        } else {
            paragraph.contentEditable = "false";
            editBtn.textContent = "Edit";
        }
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "note__delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => note.remove());

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    note.appendChild(paragraph);
    note.appendChild(actions);

    return note;
}


    function showError() {
        errorMessage.style.display = "block";
    }

    function hideError() {
        errorMessage.style.display = "none";
    }
});
function createNote(content) {
    const note = document.createElement("article");
    note.className = "note";

    const paragraph = document.createElement("p");
    paragraph.className = "note__content";
    paragraph.textContent = content;

    const actions = document.createElement("div");
    actions.className = "note__actions";

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "note__edit";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            paragraph.contentEditable = "true";
            paragraph.focus();
            editBtn.textContent = "Save";
        } else {
            paragraph.contentEditable = "false";
            editBtn.textContent = "Edit";
        }
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "note__delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => note.remove());

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    note.appendChild(paragraph);
    note.appendChild(actions);

    return note;
}

