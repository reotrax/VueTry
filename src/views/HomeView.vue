<template lang="pug">
.home
  .home-btns
    <button @click="onClickView(1)">btn1</button>
    <button @click="onClickView(2)">btn2</button>
    <button @click="onClickRouteHighcharts(2)">Highcharts</button>
    <button @click="onClickRouteValueEditor">ValueEditor</button>
    <button @click="onClickRouteFrontTest">FrontTest</button>
  //- .home-img(v-if="currentRoute.name !== 'highcharts'")
    img(
      v-if="showLogo"
      alt="Vue logo"
      src="../assets/logo.png"
    )
  .home-main
    router-view
</template>

<script lang="ts">
// import Vue from "vue";
import { defineComponent, computed } from "@vue/composition-api";
import { Route, NavigationGuardNext } from "vue-router";

import { useRouter } from "@/composables/use_router";

export default defineComponent({
  name: "HomeView",

  // beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext) {
  //   console.log("enter");
  //   next();
  // },
  beforeRouteUpdate(to: Route, from: Route, next: NavigationGuardNext) {
    console.log("update", to, from);
    if (to.name === from.name) {
      next(false);
      return;
    }
    next();
  },
  // beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
  //   console.log("leave");
  //   next();
  // },

  setup(/*_props: unknown, _ctx: SetupContext*/) {
    const { currentRoute, router } = useRouter();

    const showLogo = computed(() => {
      return currentRoute.value?.name !== "highcharts";
    });

    /**
     * click event handler.
     * @param number number
     */
    function onClickView(number: number) {
      const routeName = `btn${number}`;
      if (routeName === currentRoute.value?.name) return;
      router?.push({ name: routeName });
    }

    function onClickRouteHighcharts() {
      if (currentRoute.value?.name === "highcharts") return;
      router?.push({ name: "highcharts" });
    }

    function onClickRouteValueEditor() {
      if (currentRoute.value?.name === "value_editor") return;
      router?.push({ name: "value_editor" });
    }

    function onClickRouteFrontTest() {
      if (currentRoute.value?.name === "front_test") return;
      router?.push({ name: "front_test" });
    }

    return {
      currentRoute,
      showLogo,

      onClickView,
      onClickRouteHighcharts,
      onClickRouteValueEditor,
      onClickRouteFrontTest,
    };
  },
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.home-img {
  height: 150px;
  img {
    height: 100%;
  }
}

.home-main {
  flex: 1;
}
</style>
