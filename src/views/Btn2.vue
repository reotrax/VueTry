<template>
  <div>
    <div>BTN2</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";

export default Vue.extend({
  name: "ComponentBtn2",

  setup() {
    function onClick(number: number) {
      console.log(number, { ...VueRouter });
    }

    return {
      onClick,
    };
  },
});
</script>
