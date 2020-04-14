<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Please add here!
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="Anna 321-222-5550">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="body" class="textarea"  placeholder="V-Neck Washed Tee, L">
                </textarea>
            </div>
          </div>
          <button @click="create" class="button is-primary is-pulled-right">Add to List</button>
        </section>
      </div>
    </div>

    <br>
  </div>
</template>
<script>
import { createNote }  from '../repository'
export default {
  name: 'CreateNoteModal',
  data(){
    return {
      title: '',
      body: '',
      isActive: false
    }
  },
  methods: {
    create(){
      let data = { title: this.title, body: this.body }
      createNote(data)
        .then(data => {
          this.$emit('createNote', data.note);
          this.title = this.body = '';
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

<style scoped>

  .modal-card-head
  {
    font-size: 20px;
        color:white;
  }
</style>