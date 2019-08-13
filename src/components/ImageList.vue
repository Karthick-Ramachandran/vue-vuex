<template>
  <div>{{ allImages.length }}</div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  methods: mapActions(["fetchImages"]),
  computed: mapGetters(["allImages"]),
  created() {
    this.fetchImages();
  }
};
</script>



