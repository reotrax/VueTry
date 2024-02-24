import { ref, watch, getCurrentInstance } from "@vue/composition-api";

export function useRouter() {
  const vm = getCurrentInstance()?.proxy;
  const currentRoute = ref(vm?.$route);
  const router = vm?.$router;

  // `$route` の変更を監視
  watch(
    () => vm?.$route,
    (newRoute) => {
      currentRoute.value = newRoute;
    },
    { deep: true }
  );

  return {
    currentRoute,
    router,
  };
}
