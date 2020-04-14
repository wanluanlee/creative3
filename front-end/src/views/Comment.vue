<template>
    <div id="about">
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
              <h1 class="main_title">Desire Product List</h1>
              <h2 class="sub_title">Please put down your deire product name and size, so we will restock soon!!!</h2>
          </div>
  
        </div>
      </nav>
      <br><br>
      <div  class="container">
        <div v-if="notes">
          <CreateNoteModal @createNote="createNote"/>
          <br>
          <div>
            <noteItem v-for="(note, index) in notes" :note="note" :key="index" @deleteNote="deleteNote" @updateNote="updateNote"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NoteItem  from '../components/NoteItem.vue'
  import CreateNoteModal  from '../components/CreateNoteModal.vue'
  import { getNotes }  from '../repository'
  
  export default {
    name: 'About',
    components: { NoteItem, CreateNoteModal  },
    data(){
      return {
        notes: []
      }
    },
    methods: {
      deleteNote(id){
        let notes = this.notes.filter(note => note._id != id)
        this.notes = notes;
      },
      updateNote(note){
        this.deleteNote(note._id);
        this.createNote(note);
      },
      createNote(note){
          this.notes = [note, ...this.notes];
      },
    },
    mounted(){
      getNotes()
        .then(data => this.notes = data.notes)
        .catch((err =>alert(err)));
    }
  }
  </script>
  <style scoped>
    .main_title
    {
        font-family: Snell Roundhand, cursive;
        font-size: 40px;
        color:white;
    }
    .sub_title
    {
        font-family: Snell Roundhand, cursive;
        font-size: 25px;
        color:white;
    }

      
  </style>
  
  
  