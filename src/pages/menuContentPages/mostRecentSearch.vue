<template>
  <div style="padding-top: 20px">
    <!-- English Code -->
    <!--Mobile Code Start-->
    <div
      class="lt-sm"
      style="max-height: 2500px; min-height: 1100px; background-color: #cedbd7"
    >
      <div class="col-12">
        <p
          class="text-black text-bold"
          style="padding-left: 50px; padding-top: 20px"
        >
          MOST RECENT SEARCHES:
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px;margin-top: -5px"
        >
          Mumbai
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'tata-memorial-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'tata-memorial-center')"
          >
            Hotels near TATA Memorial Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital:
                  'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute'
              )
            "
          >
            Hotels near Kokilaben Dhirubhai Ambani Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Hotels near Asian Heart Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'nanavati-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'nanavati-super-speciality-hospital'
              )
            "
          >
            Hotels near Nanavati Hospital Mumbai </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sl-raheja-hospital-fortis' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'sl-raheja-hospital-fortis')
            "
          >
            Hotels near S L Raheja Hospital - Fortis </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'jaslok-hospital-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'jaslok-hospital-research-centre'
              )
            "
          >
            Hotels near Jaslok Hospital & Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'fortis-hospital-mulund' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'fortis-hospital-mulund')"
          >
            Hotels near Fortis Hospital Mulund </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sevenhills-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'sevenhills-hospital')"
          >
            Hotels near Sevenhills Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'saifee-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'saifee-hospital')"
          >
            Hotels near Saifee Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'bombay-hospital-medical-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'bombay-hospital-medical-research-centre'
              )
            "
          >
            Hotels near Bombay Hospital & Medical Research Centre </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'breach-candy-hospital-trust',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'breach-candy-hospital-trust')
            "
          >
            Hotels near Breach Candy Hospital Trust </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'criti-care-asia-multispeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'criti-care-asia-multispeciality-hospital'
              )
            "
          >
            Hotels near Criti Care Asia Multispeciality Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Hotels near Asian Heart Hospital Mumbai
          </router-link>
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -15px"
        >
          Delhi
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'medanta-the-medicity' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('143', 'new-delhi', 'medanta-the-medicity')
            "
          >
            Hotels near Medanta -The Medicity </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'indraprastha-apollo-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'indraprastha-apollo-hospital'
              )
            "
          >
            Hotels near Indraprastha Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'fortis-escorts-heart-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'fortis-escorts-heart-institute'
              )
            "
          >
            Hotels near Fortis Escorts Heart Institute </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'primus-super-specialty-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'primus-super-specialty-hospital'
              )
            "
          >
            Hotels near Primus Super Specialty Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'max-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'max-super-speciality-hospital'
              )
            "
          >
            Hotels near Max Super Speciality Hospital, Saket (Max Saket) </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'max-health-care',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'max-health-care')"
          >
            Hotels near Max Health Care </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Hotels near All India Institute Of Medical Sciences </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Hotels near AIIMS New Delhi </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Cheap Hotels near AIIMS Delhi </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'blk-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'blk-hospital')"
          >
            Hotels near BLK Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'rajiv-gandhi-cancer-institute-medical',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'rajiv-gandhi-cancer-institute-medical'
              )
            "
          >
            Hotels near Rajiv Gandhi Cancer Institute & Medical </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'amrita-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'amrita-hospital')"
          >
            Hotels near Amrita Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'paras-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'paras-hospitals')"
          >
            Hotels near Paras Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'artemis-hospital-gurgaon',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('143', 'new-delhi', 'artemis-hospital-gurgaon')
            "
          >
            Hotels near Artemis Hospital Gurgaon </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'CK-birla-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'CK-birla-hospital')"
          >
            Hotels near CK Birla Hospital
          </router-link>

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotel near Apollo Hospital Chennai
          </router-link> -->

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotels near Apollo Hospital Gream road Chennai
          </router-link> -->

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotels near Apollo Chennai
          </router-link> -->
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -15px"
        >
          Kolkata
        </p>
        <p
          style="
            padding-left: 50px;
            padding-right: 50px;
            margin-top: -15px;
            padding-bottom: 30px;
          "
        >
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'tata-medical-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'tata-medical-center')"
          >
            Hotels near TATA Medical Center </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'fortis-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'fortis-hospital')"
          >
            Hotels near Fortis Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'amri-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'amri-hospital')"
          >
            Hotels near Amri Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'manipal-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'manipal-hospital')"
          >
            Hotels near Manipal Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'iris-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'iris-hospital')"
          >
            Hotels near IRIS Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'apollo-gleneagles-hospitals',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('7', 'kolkata', 'apollo-gleneagles-hospitals')
            "
          >
            Hotels near Apollo Gleneagles Hospitals </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital:
                  'rabindranath-tagore-international-institute-of-cardiac-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'rabindranath-tagore-international-institute-of-cardiac-sciences'
              )
            "
          >
            Hotels near Rabindranath Tagore International Institute Of Cardiac
            Sciences </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'medica-superspeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'medica-superspeciality-hospital'
              )
            "
          >
            Hotels near Medica Superspeciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'the-calcutta-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'the-calcutta-medical-research-institute'
              )
            "
          >
            Hotels near The Calcutta Medical Research Institute </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'peerless-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'peerless-hospital')"
          >
            Hotels near Peerless Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'rgkar-medical-college-and-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'rgkar-medical-college-and-hospital'
              )
            "
          >
            Hotels near R G Kar Medical College and Hospital
          </router-link>
        </p>
      <!--Hyderabad City Start-->
      <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -35px;font-size: 13px;"
        >
          Hyderabad
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px;font-size: 13px;">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'yashoda-hospitals-somajiguda' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'yashoda-hospitals-somajiguda')"
          >
            Hotels near Yashoda Hospitals </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'asian-institute-of-gastroenterology-gachibowli' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'asian-institute-of-gastroenterology-gachibowli')"
          >
            Hotels near Asian Institute of Gastroenterology (AIG) Gachibowli </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'asian-institute-of-gastroenterology' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'asian-institute-of-gastroenterology')"
          >
            Hotels near Asian Institute of Gastroenterology (AIG) Somajiguda </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'all-india-institute-of-medical-sciences' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'all-india-institute-of-medical-sciences')"
          >
            Hotels near All India Institute of Medical Sciences-AIIMS </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'telangana-institute-of-medical-science-and-research' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'telangana-institute-of-medical-science-and-research')"
          >
            Hotels near TELANGANA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH - (TIMS) </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-health-city',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'apollo-health-city')
            "
          >
            Hotels near Apollo Health City </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital:
                  'nizams-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'nizams-institute-of-medical-sciences'
              )
            "
          >
          Hotels near Nizam's Institute Of Medical Sciences </router-link
          >,
        </p>
<!--Hyderabad City End-->
        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -10px"
        >
          Popular Hospitals
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'tata-memorial-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'tata-memorial-center')"
          >
            Tata Memorial Center,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital:
                  'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute'
              )
            "
          >
            Kokilaben Dhirubhai Ambani Hospital and Medical Research Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Asian Heart Institute,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'nanavati-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'nanavati-super-speciality-hospital'
              )
            "
          >
            Nanavati Super Speciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sl-raheja-hospital-fortis' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'sl-raheja-hospital-fortis')
            "
          >
            S L Raheja Hospital - Fortis </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'jaslok-hospital-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'jaslok-hospital-research-centre'
              )
            "
          >
            Jaslok Hospital & Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'fortis-hospital-mulund' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'fortis-hospital-mulund')"
          >
            Fortis Hospital Mulund </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sevenhills-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'sevenhills-hospital')"
          >
            Sevenhills Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'saifee-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'saifee-hospital')"
          >
            Saifee Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'bombay-hospital-medical-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'bombay-hospital-medical-research-centre'
              )
            "
          >
            Bombay Hospital & Medical Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'breach-candy-hospital-trust',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'breach-candy-hospital-trust')
            "
          >
            Breach Candy Hospital Trust </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'criti-care-asia-multispeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'criti-care-asia-multispeciality-hospital'
              )
            "
          >
            Criti Care Asia Multispeciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'narayan-hrudayalaya' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'narayan-hrudayalaya')"
          >
            Narayan Hrudayalaya </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'narayana-netralaya' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'narayana-netralaya')"
          >
            Narayana Netralaya </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'apollo-hospital')"
          >
            Apollo Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'bengaluru',
                hospital: 'aster-cmi-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'aster-cmi-hospital')"
          >
            Aster CMI Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'bengaluru',
                hospital: 'vikram-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'vikram-hospital')"
          >
            Vikram Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'manipal-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'manipal-hospitals')"
          >
            Manipal Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'nu-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'nu-hospitals')"
          >
            NU Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'apollo-hospital')"
          >
            Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'sal-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'sal-hospital')"
          >
            SAL Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'shalby-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'shalby-hospital')"
          >
            Shalby Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'ahmedabad',
                hospital: 'care-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '443',
                'ahmedabad',
                'care-institute-of-medical-sciences'
              )
            "
          >
            Care Institute of Medical Sciences </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'ahmedabad',
                hospital: 'narayana-multispecialty-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '4',
                'ahmedabad',
                'narayana-multispecialty-hospital'
              )
            "
          >
            Narayana Multispecialty Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-health-city',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'apollo-health-city')"
          >
            Apollo Health City </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'lv-prasad-eye-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'lv-prasad-eye-institute')
            "
          >
            L V Prasad Eye Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-gastroenterology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-gastroenterology'
              )
            "
          >
            Asian Institute of Gastroenterology </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'usha-mullapudi-cardiac-center',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'usha-mullapudi-cardiac-center'
              )
            "
          >
            Usha Mullapudi Cardiac Center </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'nizams-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'nizams-institute-of-medical-sciences'
              )
            "
          >
            Nizam's Institute Of Medical Sciences,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-gastroenterology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-gastroenterology'
              )
            "
          >
            Asian Institute of Gastroenterology, Gachibowli </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'yashoda-hospitals-somajiguda',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'yashoda-hospitals-somajiguda'
              )
            "
          >
            Yashoda Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'yashoda-hospitals-secunderabad',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'yashoda-hospitals-secunderabad'
              )
            "
          >
            Yashoda Hospitals - Secunderabad </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-hospitals-hyderguda',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'apollo-hospitals-hyderguda')
            "
          >
            Apollo Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'basavatarakam-indo-american-cancer-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'basavatarakam-indo-american-cancer-hospital'
              )
            "
          >
            Basavatarakam Indo American Cancer Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-nephrology-and-urology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-nephrology-and-urology'
              )
            "
          >
            Asian Institute of Nephrology and Urology| AINU Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'medicover-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'medicover-hospitals')"
          >
            Medicover Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'kims-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'kims-hospitals')"
          >
            KIMS Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'telangana-institute-of-medical-science-and-research',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'telangana-institute-of-medical-science-and-research'
              )
            "
          >
            TELANGANA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH - (TIMS) </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'mamata-academy-of-medical-sciences-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'mamata-academy-of-medical-sciences-hospital'
              )
            "
          >
            Mamata Academy of Medical Sciences Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'slg-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'slg-hospitals')"
          >
            SLG Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'all-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'all-india-institute-of-medical-sciences'
              )
            "
          >
            All India Institute of Medical Sciences-AIIMS </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'sankara-nethralaya-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'sankara-nethralaya-hospital')
            "
          >
            Sankara Nethralaya hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'gleneagles-global-hospitals',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'gleneagles-global-hospitals')
            "
          >
            Gleneagles Global Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('6', 'chennai', 'apollo-hospital')"
          >
            Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'apollo-speciality-cancer-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '6',
                'chennai',
                'apollo-speciality-cancer-hospital'
              )
            "
          >
            Apollo Speciality Cancer Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'miot-international' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('6', 'chennai', 'miot-international')"
          >
            MIOT International </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'the-madras-medical-mission-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '6',
                'chennai',
                'the-madras-medical-mission-hospital'
              )
            "
          >
            The Madras Medical Mission Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'frontier-lifeline-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'frontier-lifeline-hospital')
            "
          >
            Frontier Lifeline Hospital
          </router-link>
        </p>
        <p
          class="text-black text-bold"
          style="padding-left: 50px;  margin-top: 0px"
        >
          Most Recent Property Search
        </p>
        <p
          style="
            padding-left: 50px;
            padding-right: 50px;
            margin-top: -15px;
            padding-bottom: 30px;
          "
        >
        <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'tata-memorial-center',
                property: 'sadguru-lodge',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'tata-memorial-center',
                'sadguru-lodge'
              )
            "
          >
          Sadguru Lodge near Tata Medical Center,Parel Mumbai </router-link
          >,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
                property: 'hotel-astros',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
                'hotel-astros'
              )
            "
          >
          Astro near Kokilaben Dhirubhai Ambani Hospital and Medical Research Institute,Andheri(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'nanavati-super-speciality-hospital',
                property: 'panchvati-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'nanavati-super-speciality-hospital',
                'panchvati-residency'
              )
            "
          >
          Panchvati near Nanavati Super Speciality Hospital,Vile Parle(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'nanavati-super-speciality-hospital',
                property: 'panchvati-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'nanavati-super-speciality-hospital',
                'panchvati-residency'
              )
            "
          >
          Panchvati near Nanavati Super Speciality Hospital,Vile Parle(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'asian-institute-of-gastroenterology',
                property: 'hotel-ik-london-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'asian-institute-of-gastroenterology',
                'hotel-ik-london-residency'
              )
            "
          >
          IK London near Asian Institute of Gastroenterology,Somajiguda Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'yashoda-hospitals-secunderabad',
                property: 'hotel-padmini-elite',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'yashoda-hospitals-secunderabad',
                'hotel-padmini-elite'
              )
            "
          >
          Padmini Elite  near Yashoda Hospitals,Secunderabad Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'basavatarakam-indo-american-cancer-hospital',
                property: 'the-central-park',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'basavatarakam-indo-american-cancer-hospital',
                'the-central-park'
              )
            "
          >
          Central Park near Basavatarakam Indo American Cancer Hospital,Banjara Hills Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'kolkata',
                hospital:
                  'tata-medical-center',
                property: 'ashraya-inn-bellanzo',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'kolkata',
                'tata-medical-center',
                'ashraya-inn-bellanzo'
              )
            "
          >
          Ashraya Inn Bellanzo near Tata Medical Center,New Town,Kolkata
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'medanta-the-medicity',
                property: 'kabul-hotel',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'medanta-the-medicity',
                'kabul-hotel'
              )
            "
          >
          Kabul near Medanta -The Medicity,Gurugram New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'fortis-escorts-heart-institute',
                property: 'quality-inn-hotel',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'fortis-escorts-heart-institute',
                'quality-inn-hotel'
              )
            "
          >
          Quality Inn near Fortis Escorts Heart Institute,Okhla Road New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'amrita-hospital',
                property: 'the-orange',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'amrita-hospital',
                'the-orange'
              )
            "
          >
          Orange near Amrita Hospital,Faridabad New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'bengaluru',
                hospital:
                  'sri-sathya-sai-institute-of-higher-medical-sciences',
                property: 'professionals-pride-pg',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'bengaluru',
                'sri-sathya-sai-institute-of-higher-medical-sciences',
                'professionals-pride-pg'
              )
            "
          >
          Professional Pride PG near Sri Sathya Sai Institute of Higher Medical Sciences,Whitefield Bengaluru
          </router-link>
          <!-- <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'asian-heart-institute',
                property: 'kamala-lodge',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'asian-heart-institute',
                'kamala-lodge'
              )
            "
          >
            KAMALA LODGE near Asian Heart Institute, Bandra (East) Mumbai </router-link
          >, -->

          <!-- <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'asian-heart-institute',
                property: 'the-mountain',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'asian-heart-institute',
                'the-mountain'
              )
            "
          >
            The Mountain near Asian Heart Institute Bandra Mumbai
          </router-link> -->
        </p>
      </div>
    </div>
    <!--Mobile Code End-->
    <!--Website Code Start-->
    <div
      class="gt-xs"
      style="max-height: 1000px; min-height: 500px; background-color: #cedbd7"
    >
      <div class="col-12">
        <p
          class="text-black text-bold"
          style="padding-left: 50px; padding-top: 20px"
        >
          MOST RECENT SEARCHES:
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -5px"
        >
          Mumbai
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px;font-size: 13px;">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'tata-memorial-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'tata-memorial-center')"
          >
            Hotels near TATA Memorial Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital:
                  'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute'
              )
            "
          >
            Hotels near Kokilaben Dhirubhai Ambani Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Hotels near Asian Heart Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'nanavati-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'nanavati-super-speciality-hospital'
              )
            "
          >
            Hotels near Nanavati Hospital Mumbai </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sl-raheja-hospital-fortis' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'sl-raheja-hospital-fortis')
            "
          >
            Hotels near S L Raheja Hospital - Fortis </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'jaslok-hospital-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'jaslok-hospital-research-centre'
              )
            "
          >
            Hotels near Jaslok Hospital & Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'fortis-hospital-mulund' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'fortis-hospital-mulund')"
          >
            Hotels near Fortis Hospital Mulund </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sevenhills-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'sevenhills-hospital')"
          >
            Hotels near Sevenhills Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'saifee-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'saifee-hospital')"
          >
            Hotels near Saifee Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'bombay-hospital-medical-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'bombay-hospital-medical-research-centre'
              )
            "
          >
            Hotels near Bombay Hospital & Medical Research Centre </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'breach-candy-hospital-trust',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'breach-candy-hospital-trust')
            "
          >
            Hotels near Breach Candy Hospital Trust </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'criti-care-asia-multispeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'criti-care-asia-multispeciality-hospital'
              )
            "
          >
            Hotels near Criti Care Asia Multispeciality Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Hotels near Asian Heart Hospital Mumbai
          </router-link>
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -15px;font-size: 13px;"
        >
          Delhi
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px;font-size: 13px;">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'medanta-the-medicity' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('143', 'new-delhi', 'medanta-the-medicity')
            "
          >
            Hotels near Medanta -The Medicity </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'indraprastha-apollo-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'indraprastha-apollo-hospital'
              )
            "
          >
            Hotels near Indraprastha Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'fortis-escorts-heart-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'fortis-escorts-heart-institute'
              )
            "
          >
            Hotels near Fortis Escorts Heart Institute </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'primus-super-specialty-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'primus-super-specialty-hospital'
              )
            "
          >
            Hotels near Primus Super Specialty Hospital </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'max-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'max-super-speciality-hospital'
              )
            "
          >
            Hotels near Max Super Speciality Hospital, Saket (Max Saket) </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'max-health-care',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'max-health-care')"
          >
            Hotels near Max Health Care </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Hotels near All India Institute Of Medical Sciences </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Hotels near AIIMS New Delhi </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'All-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'All-india-institute-of-medical-sciences'
              )
            "
          >
            Cheap Hotels near AIIMS Delhi </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'blk-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'blk-hospital')"
          >
            Hotels near BLK Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'rajiv-gandhi-cancer-institute-medical',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '143',
                'new-delhi',
                'rajiv-gandhi-cancer-institute-medical'
              )
            "
          >
            Hotels near Rajiv Gandhi Cancer Institute & Medical </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'amrita-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'amrita-hospital')"
          >
            Hotels near Amrita Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'paras-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'paras-hospitals')"
          >
            Hotels near Paras Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'new-delhi',
                hospital: 'artemis-hospital-gurgaon',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('143', 'new-delhi', 'artemis-hospital-gurgaon')
            "
          >
            Hotels near Artemis Hospital Gurgaon </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'new-delhi', hospital: 'CK-birla-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('143', 'new-delhi', 'CK-birla-hospital')"
          >
            Hotels near CK Birla Hospital
          </router-link>

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotel near Apollo Hospital Chennai
          </router-link> -->

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotels near Apollo Hospital Gream road Chennai
          </router-link> -->

          <!-- <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'apollo-hospital')
            "
          >
            Hotels near Apollo Chennai
          </router-link> -->
        </p>

        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -15px;font-size: 13px;"
        >
          Kolkata
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px;font-size: 13px;">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'tata-medical-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'tata-medical-center')"
          >
            Hotels near TATA Medical Center </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'fortis-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'fortis-hospital')"
          >
            Hotels near Fortis Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'amri-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'amri-hospital')"
          >
            Hotels near Amri Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'manipal-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'manipal-hospital')"
          >
            Hotels near Manipal Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'iris-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'iris-hospital')"
          >
            Hotels near IRIS Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'apollo-gleneagles-hospitals',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('7', 'kolkata', 'apollo-gleneagles-hospitals')
            "
          >
            Hotels near Apollo Gleneagles Hospitals </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital:
                  'rabindranath-tagore-international-institute-of-cardiac-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'rabindranath-tagore-international-institute-of-cardiac-sciences'
              )
            "
          >
            Hotels near Rabindranath Tagore International Institute Of Cardiac
            Sciences </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'medica-superspeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'medica-superspeciality-hospital'
              )
            "
          >
            Hotels near Medica Superspeciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'the-calcutta-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'the-calcutta-medical-research-institute'
              )
            "
          >
            Hotels near The Calcutta Medical Research Institute </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'kolkata', hospital: 'peerless-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('7', 'kolkata', 'peerless-hospital')"
          >
            Hotels near Peerless Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'kolkata',
                hospital: 'rgkar-medical-college-and-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '7',
                'kolkata',
                'rgkar-medical-college-and-hospital'
              )
            "
          >
            Hotels near R G Kar Medical College and Hospital
          </router-link>
        </p>
        <!--Hyderabad City Start For Website-->
        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -15px;font-size: 13px;"
        >
          Hyderabad
        </p>
        <p style="padding-left: 50px; padding-right: 50px; margin-top: -15px;font-size: 13px;">
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'yashoda-hospitals-somajiguda' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'yashoda-hospitals-somajiguda')"
          >
            Hotels near Yashoda Hospitals </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'asian-institute-of-gastroenterology-gachibowli' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'asian-institute-of-gastroenterology-gachibowli')"
          >
            Hotels near Asian Institute of Gastroenterology (AIG) Gachibowli </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'asian-institute-of-gastroenterology' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'asian-institute-of-gastroenterology')"
          >
            Hotels near Asian Institute of Gastroenterology (AIG) Somajiguda </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'all-india-institute-of-medical-sciences' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'all-india-institute-of-medical-sciences')"
          >
            Hotels near All India Institute of Medical Sciences-AIIMS </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'telangana-institute-of-medical-science-and-research' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'telangana-institute-of-medical-science-and-research')"
          >
            Hotels near TELANGANA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH - (TIMS) </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-health-city',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'apollo-health-city')
            "
          >
            Hotels near Apollo Health City </router-link
          >,

          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital:
                  'nizams-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'nizams-institute-of-medical-sciences'
              )
            "
          >
          Hotels near Nizam's Institute Of Medical Sciences </router-link
          >,
        </p>
<!--Hyderabad City End For Website-->



        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -5px"
        >
          Popular Hospitals
        </p>
        <p
          style="
            padding-left: 50px;
            padding-right: 50px;
            margin-top: -15px;
            padding-bottom: 30px;
            font-size: 13px;
          "
        >
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'tata-memorial-center' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'tata-memorial-center')"
          >
            Tata Memorial Center,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital:
                  'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'Kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute'
              )
            "
          >
            Kokilaben Dhirubhai Ambani Hospital and Medical Research Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'asian-heart-institute' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'asian-heart-institute')"
          >
            Asian Heart Institute,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'nanavati-super-speciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'nanavati-super-speciality-hospital'
              )
            "
          >
            Nanavati Super Speciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sl-raheja-hospital-fortis' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'sl-raheja-hospital-fortis')
            "
          >
            S L Raheja Hospital - Fortis </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'jaslok-hospital-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'jaslok-hospital-research-centre'
              )
            "
          >
            Jaslok Hospital & Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'fortis-hospital-mulund' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'fortis-hospital-mulund')"
          >
            Fortis Hospital Mulund </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'sevenhills-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'sevenhills-hospital')"
          >
            Sevenhills Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'mumbai', hospital: 'saifee-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('1', 'mumbai', 'saifee-hospital')"
          >
            Saifee Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'bombay-hospital-medical-research-centre',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'bombay-hospital-medical-research-centre'
              )
            "
          >
            Bombay Hospital & Medical Research Centre </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'breach-candy-hospital-trust',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('1', 'mumbai', 'breach-candy-hospital-trust')
            "
          >
            Breach Candy Hospital Trust </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'mumbai',
                hospital: 'criti-care-asia-multispeciality-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '1',
                'mumbai',
                'criti-care-asia-multispeciality-hospital'
              )
            "
          >
            Criti Care Asia Multispeciality Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'narayan-hrudayalaya' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'narayan-hrudayalaya')"
          >
            Narayan Hrudayalaya </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'narayana-netralaya' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'narayana-netralaya')"
          >
            Narayana Netralaya </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'apollo-hospital')"
          >
            Apollo Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'bengaluru',
                hospital: 'aster-cmi-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'aster-cmi-hospital')"
          >
            Aster CMI Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'bengaluru',
                hospital: 'vikram-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'vikram-hospital')"
          >
            Vikram Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'manipal-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'manipal-hospitals')"
          >
            Manipal Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'bengaluru', hospital: 'nu-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('3', 'bengaluru', 'nu-hospitals')"
          >
            NU Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'apollo-hospital')"
          >
            Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'sal-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'sal-hospital')"
          >
            SAL Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'ahmedabad', hospital: 'shalby-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('4', 'ahmedabad', 'shalby-hospital')"
          >
            Shalby Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'ahmedabad',
                hospital: 'care-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '443',
                'ahmedabad',
                'care-institute-of-medical-sciences'
              )
            "
          >
            Care Institute of Medical Sciences </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'ahmedabad',
                hospital: 'narayana-multispecialty-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '4',
                'ahmedabad',
                'narayana-multispecialty-hospital'
              )
            "
          >
            Narayana Multispecialty Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-health-city',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'apollo-health-city')"
          >
            Apollo Health City </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'lv-prasad-eye-institute',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'lv-prasad-eye-institute')
            "
          >
            L V Prasad Eye Institute </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-gastroenterology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-gastroenterology'
              )
            "
          >
            Asian Institute of Gastroenterology </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'usha-mullapudi-cardiac-center',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'usha-mullapudi-cardiac-center'
              )
            "
          >
            Usha Mullapudi Cardiac Center </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'nizams-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'nizams-institute-of-medical-sciences'
              )
            "
          >
            Nizam's Institute Of Medical Sciences,
          </router-link>
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-gastroenterology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-gastroenterology'
              )
            "
          >
            Asian Institute of Gastroenterology, Gachibowli </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'yashoda-hospitals-somajiguda',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'yashoda-hospitals-somajiguda'
              )
            "
          >
            Yashoda Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'yashoda-hospitals-secunderabad',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'yashoda-hospitals-secunderabad'
              )
            "
          >
            Yashoda Hospitals - Secunderabad </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'apollo-hospitals-hyderguda',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('5', 'hyderabad', 'apollo-hospitals-hyderguda')
            "
          >
            Apollo Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'basavatarakam-indo-american-cancer-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'basavatarakam-indo-american-cancer-hospital'
              )
            "
          >
            Basavatarakam Indo American Cancer Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'asian-institute-of-nephrology-and-urology',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'asian-institute-of-nephrology-and-urology'
              )
            "
          >
            Asian Institute of Nephrology and Urology| AINU Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'medicover-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'medicover-hospitals')"
          >
            Medicover Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'kims-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'kims-hospitals')"
          >
            KIMS Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'telangana-institute-of-medical-science-and-research',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'telangana-institute-of-medical-science-and-research'
              )
            "
          >
            TELANGANA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH - (TIMS) </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'mamata-academy-of-medical-sciences-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'mamata-academy-of-medical-sciences-hospital'
              )
            "
          >
            Mamata Academy of Medical Sciences Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'hyderabad', hospital: 'slg-hospitals' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('5', 'hyderabad', 'slg-hospitals')"
          >
            SLG Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'hyderabad',
                hospital: 'all-india-institute-of-medical-sciences',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '5',
                'hyderabad',
                'all-india-institute-of-medical-sciences'
              )
            "
          >
            All India Institute of Medical Sciences-AIIMS </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'sankara-nethralaya-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'sankara-nethralaya-hospital')
            "
          >
            Sankara Nethralaya hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'gleneagles-global-hospitals',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'gleneagles-global-hospitals')
            "
          >
            Gleneagles Global Hospitals </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'apollo-hospital' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('6', 'chennai', 'apollo-hospital')"
          >
            Apollo Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'apollo-speciality-cancer-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '6',
                'chennai',
                'apollo-speciality-cancer-hospital'
              )
            "
          >
            Apollo Speciality Cancer Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: { city: 'chennai', hospital: 'miot-international' },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="loadSearchResults('6', 'chennai', 'miot-international')"
          >
            MIOT International </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'the-madras-medical-mission-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults(
                '6',
                'chennai',
                'the-madras-medical-mission-hospital'
              )
            "
          >
            The Madras Medical Mission Hospital </router-link
          >,
          <router-link
            :to="{
              name: 'Hotel List',
              params: {
                city: 'chennai',
                hospital: 'frontier-lifeline-hospital',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadSearchResults('6', 'chennai', 'frontier-lifeline-hospital')
            "
          >
            Frontier Lifeline Hospital
          </router-link>
        </p>
        <p
          class="text-black text-bold"
          style="padding-left: 50px; margin-top: -35px"
        >
          Most Recent Property Search
        </p>
        <p
          style="
            padding-left: 50px;
            padding-right: 50px;
            margin-top: -15px;
            padding-bottom: 30px;
            font-size: 13px;
          "
        >
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'tata-memorial-center',
                property: 'sadguru-lodge',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'tata-memorial-center',
                'sadguru-lodge'
              )
            "
          >
          Sadguru Lodge near Tata Medical Center,Parel Mumbai </router-link
          >,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
                property: 'hotel-astros',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'kokilaben-dhirubhai-ambani-hospital-and-medical-research-institute',
                'hotel-astros'
              )
            "
          >
          Astro near Kokilaben Dhirubhai Ambani Hospital and Medical Research Institute,Andheri(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'nanavati-super-speciality-hospital',
                property: 'panchvati-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'nanavati-super-speciality-hospital',
                'panchvati-residency'
              )
            "
          >
          Panchvati near Nanavati Super Speciality Hospital,Vile Parle(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital:
                  'nanavati-super-speciality-hospital',
                property: 'panchvati-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'nanavati-super-speciality-hospital',
                'panchvati-residency'
              )
            "
          >
          Panchvati near Nanavati Super Speciality Hospital,Vile Parle(West) Mumbai
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'asian-institute-of-gastroenterology',
                property: 'hotel-ik-london-residency',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'asian-institute-of-gastroenterology',
                'hotel-ik-london-residency'
              )
            "
          >
          IK London near Asian Institute of Gastroenterology,Somajiguda Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'yashoda-hospitals-secunderabad',
                property: 'hotel-padmini-elite',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'yashoda-hospitals-secunderabad',
                'hotel-padmini-elite'
              )
            "
          >
          Padmini Elite  near Yashoda Hospitals,Secunderabad Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'hyderabad',
                hospital:
                  'basavatarakam-indo-american-cancer-hospital',
                property: 'the-central-park',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'hyderabad',
                'basavatarakam-indo-american-cancer-hospital',
                'the-central-park'
              )
            "
          >
          Central Park near Basavatarakam Indo American Cancer Hospital,Banjara Hills Hyderabad
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'kolkata',
                hospital:
                  'tata-medical-center',
                property: 'ashraya-inn-bellanzo',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'kolkata',
                'tata-medical-center',
                'ashraya-inn-bellanzo'
              )
            "
          >
          Ashraya Inn Bellanzo near Tata Medical Center,New Town,Kolkata
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'medanta-the-medicity',
                property: 'kabul-hotel',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'medanta-the-medicity',
                'kabul-hotel'
              )
            "
          >
          Kabul near Medanta -The Medicity,Gurugram New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'fortis-escorts-heart-institute',
                property: 'quality-inn-hotel',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'fortis-escorts-heart-institute',
                'quality-inn-hotel'
              )
            "
          >
          Quality Inn near Fortis Escorts Heart Institute,Okhla Road New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'new-delhi',
                hospital:
                  'amrita-hospital',
                property: 'the-orange',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'new-delhi',
                'amrita-hospital',
                'the-orange'
              )
            "
          >
          Orange near Amrita Hospital,Faridabad New Delhi
          </router-link>,
          <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'bengaluru',
                hospital:
                  'sri-sathya-sai-institute-of-higher-medical-sciences',
                property: 'professionals-pride-pg',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'bengaluru',
                'sri-sathya-sai-institute-of-higher-medical-sciences',
                'professionals-pride-pg'
              )
            "
          >
          Professional Pride PG near Sri Sathya Sai Institute of Higher Medical Sciences,Whitefield Bengaluru
          </router-link>
          <!-- <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'asian-heart-institute',
                property: 'kamala-lodge',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'asian-heart-institute',
                'kamala-lodge'
              )
            "
          >
            KAMALA LODGE near Asian Heart Institute, Bandra (East) Mumbai </router-link
          >, -->

          <!-- <router-link
            :to="{
              name: 'SeoHotel Information',
              params: {
                city: 'mumbai',
                hospital: 'asian-heart-institute',
                property: 'the-mountain',
              },
            }"
            class="hotel-link q-hoverable"
            style="color: black; cursor: pointer"
            @click="
              loadHotelDetailsSEO(
                'mumbai',
                'asian-heart-institute',
                'the-mountain'
              )
            "
          >
            The Mountain near Asian Heart Institute Bandra Mumbai
          </router-link> -->
        </p>
      </div>
    </div>
    <!--Website Code End-->
  </div>
</template>
 <script>
import { log } from "console";
import { mapActions, mapState } from "vuex";

export default {
  name: "mostrecent-search",
  data() {
    return {
      title: "MOST RECENT SEARCHES",
      hotelSearchDetails: [],
    };
  },
  created() {
    //     let hotelSearchDetails = this.citywise_seo_array.data;
    // for (let i = 0; i < hotelSearchDetails.length; i++) {
    //   let hotel = hotelSearchDetails[i];
    //   console.log(hotel);
    //   // do something with the hotel data, e.g. display it on a page
    // }
  },
  computed: {
    ...mapState({
      citywise_seo_array: (state) => state.mostrecentsearch.citywise_seo_array,

      hospital: (state) => state.dropdown.hospital_arr,
      mostRecent_search_HotelDetails: (state) =>
        state.booking.mostRecent_search_HotelDetails,
    }),
    win_width() {
      return this.$q.screen.width - 59;
    },
    win_height() {
      return this.$q.screen.height - 0;
    },
  },
  mounted() {
    // let hotelSerachDetails =this.hotel;

    // this.searchItem = {
    //   city_id: hotelSerachDetails.city_id,

    // };
    this.$store.dispatch(`mostrecentsearch/mostRecentSearchDetails`);
    // this.$store.dispatch("mostrecentsearch/loadCityWiseForSeo");
  },
  methods: {
    ...mapActions("booking", ["loadHotels"]),
    ...mapActions("dropdown", ["loadAllHospitals"]),
    ...mapActions("booking", ["setSearchDetailsObj"]),
    goToUrl(url) {
      window.open(url);
    },
    moveToHotel(item) {
      this.hotelItem = Object.assign({}, item);
      this.$router.push({});
    },
    loadSearchResults(city_id, city, hospital) {
      this.$router.push({
        name: "Hotel List",

        params: {
          city: city.toLowerCase(),
          hospital: hospital.toLowerCase().replace(/ /g, "-"),
        },
      });
    },
  },
};
</script>
<style>
a {
  text-decoration: none !important;
}
.hotel-link.q-hoverable:hover {
  color: blue !important;
}
</style>
