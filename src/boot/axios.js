import Vue from "vue";
import axios from "axios";

// src/boot/axios.js

Vue.prototype.$axios = axios;
// ^ ^ ^ this will allow you to use this.$axios
//       so you won't necessarily have to import axios in each vue file


// const api = axios.create({ baseURL: "https://mhapi.mangohomz.in/" });

// const api = axios.create({ baseURL: "http://143.110.191.192:3002/" });
// const api = axios.create({ baseURL: "http://64.227.129.223:3002/" });

  const api = axios.create({ baseURL: "http://localhost:3000/" });
Vue.prototype.$api = api;

// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

export { axios, api };
