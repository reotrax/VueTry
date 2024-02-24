<template lang="pug">
.r-input
  .r-input-inner
    input(v-model.number="tickPixelInterval" placeholder="tickPixelInterval")
  .r-input-other
    .r-tooltip
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HighCharts",
});
</script>

<style lang="scss" scoped></style>
