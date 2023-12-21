<template>
  <q-layout>
    <div
      v-bind:class="{
        main: $q.platform.is.desktop,
        mobile_main: $q.platform.is.ipad || $q.platform.is.mobile
      }"
      class="full-height"
    >
      <websitebody />
    </div>
  </q-layout>
</template>

<script>
import { scroll } from "quasar";
import websitebody from "../components/websitebody";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  name: "PageIndex",
  components: {
    websitebody
  },
  data() {
    return {};
  },

  methods: {
    scrollToElement(id) {
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop - 65;
      const duration = 800;
      setScrollPosition(target, offset, duration);
    }
  }
};
</script>
