<template>
  <div class="box">
    <div class="message-header">
      <p class="note-title">{{ note.title }}</p>
    </div>
    <div class="message-body">
     <p class="body">{{ note.body }}</p>
      <br>
      <br>
      <button @click="deleteNote" class="delete" aria-label="delete">Delete Info</button>
      <UpdateNoteModal :note="note" @updateNote="updateNote" :key="note._id"/>
    </div>
  </div>
</template>
<script>
  import { deleteNote } from '../repository'
  import UpdateNoteModal from './UpdateNoteModal'
  import Moment from 'moment'
  export default {
    name: 'NoteItem',
    props: [ 'note' ],
    components: { UpdateNoteModal },
    methods: {
      deleteNote(e){
        e.preventDefault();
        deleteNote(this.note._id)
          .then(() => this.$emit('deleteNote', this.note._id))
          .catch(err => alert(err))
      },
      updateNote(note){
        this.$emit('updateNote', note)
      }
    },
    filters: {
      moment(date) {
        return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
    }
  }
</script>
<style scoped>
  .delete
  {
    border-radius: 50%;
    width: 100%;
    font-size: 15px;
    height:40px;
    width:60px;
    font-family: Snell Roundhand
  }
  .note-title
  {
    color: white;
    font-family: Snell;
    font-size: 30px;
  }
  .body
  {
    font-family: Snell;
    font-size: 25px;
    color: white;
  }
  .box
    {
    width: 500px;
    height: 400px;
    padding: 20px;
    border: 2px solid white;
    box-sizing: content-box; 
    }
</style>