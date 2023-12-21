<template>
    <div Header="container">
        <Header />
        <partner-with-us style="margin-top:88px;" />
        <mostRecentSearchVue />
        <FooterTag />
    </div>
</template>
<script>
import Header from '../components/header.vue';
import partnerWithUs from "../pages/menuContentPages/partner.vue";
import FooterTag from "../components/footer.vue"
import mostRecentSearchVue from "../pages/menuContentPages/mostRecentSearch.vue"

export default {

    components:{
        partnerWithUs,
        Header,
        mostRecentSearchVue,
        FooterTag
    }
}
</script>
