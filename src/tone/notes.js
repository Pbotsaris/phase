class Notes {
  constructor() {
    this.notes = [];
    this.length = this.notes.length;
  }

  getlength() {
    return this.length;
  }

  getAll() {
    if (this.length === 0) return null;
    else return this.notes;
  }

  push(note) {
    this.notes.push(note);
    this.length = this.notes.length;
  }

  removeLast() {
    this.notes.pop();
    this.length = this.notes.length;
  }

  removeAll() {
    this.notes = [];
    this.length = this.notes.length;
  }
}

export default Notes;
