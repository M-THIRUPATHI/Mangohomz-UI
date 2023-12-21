<template >
  <div class="container">
    <div class="messagebox" v-if="this.status ==='yes'" >Your sucessfully Acknowledged</div>
    <div class="messagebox" v-else-if="this.status==='no'">Your Already Acknowledged</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status:"",
    }
  },
  mounted() {
    let partnerAccedpteddata = this.$route.params.status
    this.status = partnerAccedpteddata
  }
}




</script>
<style></style>
