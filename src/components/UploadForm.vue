<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.value)" multiple accept="image/*" />
    <span>Drag and drop here or click to upload</span>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>



<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background-color: lightgray;
}

input {
  height: 30vh;
  width: 100%;
  position: absolute;
  opacity: 0;
}
</style>