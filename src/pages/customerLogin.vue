<template>
  <div class="q-pa-md   justify-around" style="max-width: 400px">
    <q-card>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="UserName *"
            hint="Name and surname"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Password *"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Please type your age',
              val => (val > 0 && val < 100) || 'Please type a real age'
            ]"
          />

          <div>
            <q-btn label="Login" type="submit" color="primary" />
            <q-btn label="Reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age: "",
      name: ""
    };
  }
};
</script>
