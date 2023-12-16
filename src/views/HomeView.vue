<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <button @click="onClickView(1)">btn1</button>
      <button @click="onClickView(2)">btn2</button>
    </div>
    <router-view></router-view>
    <HighCharts msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, setupContext } from "@vue/composition-api";
import HighCharts from "@/components/HighCharts.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HighCharts,
  },

  setup(_: unknown, ctx: setupContext) {
    const {
      root: { $route, $router },
    } = ctx;

    /**
     * click event handler.
     * @param number number
     */
    function onClickView(number: number) {
      const routeName = `btn${number}`;
      console.log(routeName, $route.name);
      if ($route && $router && $route.name !== routeName) {
        $router.push({ name: routeName });
      }
    }

    return {
      onClickView,
    };
  },
});
</script>
