console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};
var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
      title,
      body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};
var getAll = () => {

}
var getNote = (title) => {
  console.log('Retrieving Note:', title);
}
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
  }
var schoolSubscribe = () => {
  var location = //tie in google api;
  var schoolLocation = //google api;
}

module.exports = {
addNote,
getAll,
getNote,
removeNote,
getLocation
}
