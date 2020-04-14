<template>
  <div class="line">
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <h1 class="title">
          Update Info
        </h1>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="Anna 321-222-5550">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="body" class="textarea"  placeholder="V-Neck Washed Tee, L"></textarea>
            </div>
          </div>
          <button @click="update" class="button is-primary is-pulled-right">Update</button>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { updateNote }  from '../repository'
export default {
  name: 'UpdateNoteModal',
  data(){
    return {
      title: this.note.title,
      body: this.note.body,
      isActive: false
    }
  },
  props: ['note'],
  methods: {
    update(){
      let data = { title: this.title, body: this.body }
      updateNote(data, this.note._id)
        .then(data => {
          this.$emit('updateNote', data.note);
          this.toggle();
        })
        .catch(err => alert(err.message));
    },
    toggle(){
      this.isActive = !this.isActive;
    },
  },
}
</script>
<style>
  .title
  {
    color: white;
    font-size: 20px;
    font-family: Snell Roundhand, cursive
  }
  .button
  {
    border-radius: 50%;
    width: 100%;
    font-size: 15px;
    height:40px;
    width:60px;
    font-family: Snell Roundhand
  }
  .line
  {
    border-width: 200px;
   border-bottom-width:2px;
   border-bottom-color:White;
   border-bottom-style: solid;
  }
</style>