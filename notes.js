var notes, count = 0;
let color = "";

function saveNotes() {
    var notesArray = [];

    notes.find("li > div").each(function (i, e) {
        var colorClass = $(e).attr("class");
        var title = $(e).find("textarea.note-title");
        var content = $(e).find("textarea.note-content");

        notesArray.push({ Index: i, Title: title.val(), Content: content.val(), Class: colorClass });
    });

    var jsonStr = JSON.stringify(notesArray);

    localStorage.setItem("notes", jsonStr);
}

function addNoteEvent(noteElement) {
    var div = noteElement.children("div");
    var closeImg = div.find("img");

    div.focus(function () {
        closeImg.removeClass("hide");
    });

    div.children().focus(function () {
        closeImg.removeClass("hide");
    });

    div.hover(function () {
        closeImg.removeClass("hide");
    }, function () {
        closeImg.addClass("hide");
        saveNotes();
    });

    div.children().hover(function () {
        closeImg.removeClass("hide");
    }, function () {
        closeImg.addClass("hide");
    });
}
			
function addNewNote(className, title, content) {
	if (!className) {
		className = color;
	}
				
	notes.append("<li><div class='" + className + "'>" + 
					"<textarea class='note-title' placeholder='Untitled' maxlength='17'/>" + 
					"<textarea class='note-content' placeholder='Your content here'/>" + 
					"<img class='hide' src='images/delButton5.png'/>" + 
					"</div></li>");		
	var newNote = notes.find("li:last");
	newNote.find("img").click(function () {
        newNote.remove();
        saveNotes();
        checkNotes();
        saveNotes();
	});
				
	addNoteEvent(newNote);
				
	if (title) {
		newNote.find("textarea.note-title").val(title);
    }

	if (content) {
		newNote.find("textarea.note-content").val(content);
    }

    saveNotes();
}

function loadNotes() {
    var storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        var notesArray = JSON.parse(storedNotes);
        count = notesArray.length;
        var i;
        for (i = 0; i < count; i++) {
            var storedNote = notesArray[i];
            addNewNote(storedNote.Class, storedNote.Title, storedNote.Content);
        }
        if(count <= 0){
            color = "yellow";
            addNewNote(); 
        }
    }
    else{
        color = "yellow";
        addNewNote(); 
    }
}

function checkNotes(){
    var storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        var notesArray = JSON.parse(storedNotes);
        count = notesArray.length;
        if(count <= 0){
            color = "yellow";
            addNewNote(); 
        }
    }

}

$(document).ready(function () {
    notes = $("#notes");

    loadNotes();

    // clicking the 'New Note' button adds a new note to the list
    $("#btnNew").click(function () {
        // dont call the function addNewNote(); here
        // makeColorBarVisible()
    });
    $("#purple").click(function () {
        color = "purple";
        addNewNote(); 
        //hex code #dab7ed
    });
    $("#coral").click(function () {
        color = "coral";
        addNewNote(); 
        //hex code f3b49c
    });
    $("#mint").click(function () {
        color = "mint";
        addNewNote(); 
        //hex code #c3ddcf
    });  
    $("#blue").click(function () {
        color = "blue";
        addNewNote(); 
        //hex code #aac7e6
    });  
    $("#yellow").click(function () {
        color = "yellow";
        addNewNote(); 
        //hex code #fbf29e
    });

});