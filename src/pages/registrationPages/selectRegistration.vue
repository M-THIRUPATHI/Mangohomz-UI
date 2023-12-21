<template>
  <q-page-container>
    <q-page class=" flex justify-center bg-accent" style="padding-top:100px;">
      <q-card style="height:300px">
        <q-card-section>
          <div class="text-center q-pt-lg">
            <div class="col text-h6 ellipsis  q-pa-sm">
              Please select an account type
            </div>
          </div>
        </q-card-section>
        <q-list>
          <q-item clickable to="/coustmerSignup">
            <q-item-section avatar>
              <q-icon color="primary" name="person" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Customer</q-item-label>
              <q-item-label caption>To enjoy mangohomz benifits</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/patnerSignup">
            <q-item-section avatar>
              <q-icon color="red" name="store" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Partner</q-item-label>
              <q-item-label caption
                >Become a partner with mangoHomz</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item clickable to="/login">
            <q-item-section avatar>
              <q-icon color="amber" name="arrow_back" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Back to login</q-item-label>
              <q-item-label caption
                >Alredy have account, Click here!</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-page></q-page-container
  >
</template>
