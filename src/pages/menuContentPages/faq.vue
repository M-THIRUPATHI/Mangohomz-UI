<template>
  <q-page-container>

    <!-- English -->

    <q-page
      class="bg-accent lt-sm" style="z-index: -1;"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading" style="margin-top: -20px;">
          <div class="col-1 col-lg-1 col-md-2 col-xs-1"></div>
          <div class="col-1 col-lg-1 col-md-2 col-xs-2">
            <q-img
              src="~assets/logos/Asset1 (1).png"
              style="width: 50px; height: 50px; max-width: 50px"
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-primary text-bold">
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div class="row bg-accent">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10" style="margin-top: -30px;">
            <br />

            <p class="mh-p text-bold">
              Q. Can I simultaneously book rooms for different dates?
            </p>

            <p class="mh-p">
              A. Yes, you can book MangoHomz Rooms for different dates.
            </p>

            <br />
            <p class="mh-p text-bold">
              Q. Can I cancel or re-schedule booking?
            </p>
            <p class="mh-p">
              A. Yes, you can cancel OR reschedule your bookings, but there may
              be a charge for both cancellation and rescheduling, depending on
              the MangoHomz property you had booked and the timing of your
              cancellation and rescheduling. Please refer to the specific
              MangoHomz Bookings & Cancellation policy.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. What are the modes of payment for booking a MangoHomz ?
            </p>
            <p class="mh-p">
              A. You can book with Net-banking, Credit, Debit cards, UPI and other
              e-wallets too.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. Is it safe to use my Debit/Credit Card or Bank information
              while paying for my booking with MangoHomz?
            </p>
            <p class="mh-p">
              A. Yes, the MangoHomz online payment gateway is safe and in
              compliance with all security services.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. If I cancel my booking, how will I get my refund?
            </p>
            <p class="mh-p">
              A. As per the policy of cancellation, you will get the due refund
              online to the same payment mode that you had used for booking. For
              cancellation while doing the booking please refer to individual
              MangoHomz Property
            </p>
            <br />

            <p class="mh-p text-bold">
              Q: From International Location if I book MangoHomz in India can I
              use my International Cards or currencies?
            </p>
            <p class="mh-p">
              A. Yes, while booking, MangoHomz payment gateway supports multiple
              language / location system that enables all international
              currencies and international cards.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. Is the information provided by me while booking safe?
            </p>
            <p class="mh-p">
              A. All information or data shared by our users on the MangoHomz
              website is kept strictly confidential.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. Can I have kids along with me during my MangoHomz stay?
            </p>
            <p class="mh-p">
              A. Yes. Most MangoHomz properties are child-friendly.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. In case I miss any of my personal belongings while checking out
              from MangoHomz, can I get it back?
            </p>
            <p class="mh-p">
              A. As a policy, we remind our guests to thoroughly check every
              corner of the room and take their belongings before checking out.
              However, if you happen to leave something behind, we have a ‘Lost
              & Found’ section where such unclaimed belongings are deposited. If
              found, we will try and work out a mutually convenient way to have
              the same returned safely.
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. If I have any questions other than those mentioned here, who do
              I ask?
            </p>
            <p class="mh-p">
              A. Our Customer Support team – which is available 24x7x365 – will
              be happy to answer any queries you may have.
            </p>
          </div>
        </div>
      </div>
    </q-page>

     <q-page
      class="bg-accent gt-xs" style="z-index: -1;"
      v-show="this.$store.state.account.language == 'English' ? true : false"
    >
      <div class="q-pa-md ">
        <div class="row mh-page-heading" style="margin-top: -30px;">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">
                    Frequently <br />Asked Questions
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row bg-accent">
          <div class="col-6 q-pa-md" style="margin-top: -60px;">
            <br />

            <p class="mh-p text-weight-bold" style="font-size: 15px;margin-top: 15px;">
              Q. Can I simultaneously book rooms for different dates?
            </p>

            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. Yes, you can book MangoHomz Rooms for different dates.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. Can I cancel or re-schedule booking?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. Yes, you can cancel OR reschedule your bookings, but there may
              be a charge for both cancellation and rescheduling, depending on
              the MangoHomz property you had booked and the timing of your
              cancellation and rescheduling. Please refer to the specific
              MangoHomz Bookings & Cancellation policy.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. What are the modes of payment for booking a MangoHomz ?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. You can book with Net-banking, Credit, Debit cards, UPI and other
              e-wallets too.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. Is it safe to use my Debit/Credit Card or Bank information
              while paying for my booking with MangoHomz?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. Yes, the MangoHomz online payment gateway is safe and in
              compliance with all security services.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. If I cancel my booking, how will I get my refund?
            </p>
            <p class="mh-p"  style="font-size: 14px;margin-top: -15px;">
              A. As per the policy of cancellation, you will get the due refund
              online to the same payment mode that you had used for booking. For
              cancellation while doing the booking please refer to individual
              MangoHomz Property
            </p>
          </div>
          <div class="col-6 q-pa-md" style="margin-top: -60px;">
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: 15px;">
              Q: From International Location if I book MangoHomz in India can I
              use my International Cards or currencies?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. Yes, while booking, MangoHomz payment gateway supports multiple
              language / location system that enables all international
              currencies and international cards.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. Is the information provided by me while booking safe?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. All information or data shared by our users on the MangoHomz
              website is kept strictly confidential.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. Can I have kids along with me during my MangoHomz stay?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. Yes. Most MangoHomz properties are child-friendly.
            </p>
            <br />

            <p class="mh-p text-bold"  style="font-size: 15px;margin-top: -25px;">
              Q. In case I miss any of my personal belongings while checking out
              from MangoHomz, can I get it back?
            </p>
            <p class="mh-p" style="font-size: 14px;margin-top: -15px;">
              A. As a policy, we remind our guests to thoroughly check every
              corner of the room and take their belongings before checking out.
              However, if you happen to leave something behind, we have a ‘Lost
              & Found’ section where such unclaimed belongings are deposited. If
              found, we will try and work out a mutually convenient way to have
              the same returned safely.
            </p>
            <br />

            <p class="mh-p text-bold" style="font-size: 15px;margin-top: -25px;">
              Q. If I have any questions other than those mentioned here, who do
              I ask?
            </p>
            <p class="mh-p"  style="font-size: 14px;margin-top: -15px;">
              A. Our Customer Support team – which is available 24x7x365 – will
              be happy to answer any queries you may have.
            </p>
          </div>
        </div>
      </div>
    </q-page>

      <!-- Hindi  -->

    <q-page
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <div class="col-1 col-lg-1 col-md-2 col-xs-1"></div>
          <div class="col-1 col-lg-1 col-md-2 col-xs-2">
            <q-img
              src="~assets/logos/Asset1 (1).png"
              style="width: 50px; height: 50px; max-width: 50px"
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-primary text-bold">आपके सवाल:</p>
          </div>
        </div>

        <div class="row bg-accent">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <br />

            <p class="mh-p text-bold">
              प्र. क्या मैं एक साथ अलग-अलग तिथियों के लिए कमरे बुक कर सकता /
              सकती हूं?
            </p>

            <p class="mh-p">
              उ. हाँ, आप अलग-अलग तिथियों के लिए MangoHomz Rooms बुक कर सकते हैं ।
            </p>

            <br />
            <p class="mh-p text-bold">
              प्र. क्या मैं बुकिंग कैंसिल या फिर से शेड्यूल कर सकता / सकती हूं?
            </p>
            <p class="mh-p">
              उ. हाँ, आप अपनी बुकिंग कैंसिल यानि की रद्द या रीशेड्यूल कर सकते हैं, लेकिन कैंसलेशन और रीशेड्यूल दोनों के लिए शुल्क लग सकता है। ये शुल्क इस बात पर निर्भर करता है की आप कैंसलेशन और रीशेड्यूल अपनी बुकिंग से कितने समय बाद कर रहे है।
              अन्य जानकारी के लिए कृपया हमारी MangoHomz बुकिंग और कैंसलेशन रूल्स को देखें ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. MangoHomz की बुकिंग के लिए पैमेंट कैसे करें?
            </p>
            <p class="mh-p">
              उ. MangoHomz की बुकिंग आप नेट-बैंकिंग, क्रेडिट या डेबिट कार्ड और अन्य ई-वॉलेट से कर सकते हैं ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या MangoHomz के साथ मेरी बुकिंग के लिए पेमेन्ट करते समय मेरे डेबिट / क्रेडिट कार्ड या बैंक सम्बंधित जानकारी सुरक्षित रहती है?
            </p>
            <p class="mh-p">
              उ. जी हां, MangoHomz ऑनलाइन भुगतान गेटवे पूरी तरह सुरक्षित है और ये सभी सुरक्षा सेवाओं के मानकों का पालन करता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर मैं MangoHomz की अपनी बुकिंग रद्द करता / करती हूं, तो मुझे अपनी की हुई बुकिंग का रिफंड कैसे मिलेगा?
            </p>
            <p class="mh-p">
              उ. हमारी बुकिंग कैंसलेशन की नीति के अनुसार, आपको आपकी बुकिंग राशि उसी पेमेंट मोड पर ऑनलाइन मिल जाएगी जिसका उपयोग आपने बुकिंग के लिए किया था। बुकिंग करते हुए कैंसलेशन करने के सन्दर्भ में जानकरी के लिए आपके द्वारा चुनी हुयी MangoHomz प्रॉपर्टी में देखें ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. किसी अन्य देश से यदि मैं भारत में MangoHomz बुक करता / करती हूँ तो क्या मैं अपने अंतर्राष्ट्रीय कार्ड या करेंसी का उपयोग कर सकता / सकती हूँ?
            </p>
            <p class="mh-p">
              उ. हाँ, MangoHomz पेमेंट गेटवे सिस्टम, बुकिंग के समय, अनेक भाषाओं / स्थान से पेमेंट की व्यवस्था का समर्थन करता है। ये सिस्टम सभी अंतर्राष्ट्रीय कर्रेंसीज़ और अंतर्राष्ट्रीय कार्डों से पेमेंट को सपोर्ट करता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या मेरे द्वारा बुकिंग करते समय दी गई जानकारी सुरक्षित है?
            </p>
            <p class="mh-p">
              उ. MangoHomz वेबसाइट पर हमारे सभी यूज़र्स द्वारा साझा की गई सभी
              जानकारी या डेटा को पूरी तरह से गोपनीय रखा जाता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या MangoHomz में स्टे के दौरान मेरे साथ बच्चे भी रह सकते हैं?
            </p>
            <p class="mh-p">
              उ. जी हाँ। MangoHomz की अधिकांश संपत्तियां बच्चों के अनुकूल हैं ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर MangoHomz से चेक आउट करते समय मेरा कोई निजी सामान छूट
              जाता है, तो क्या मैं उसे वापस पा सकता / सकती हूँ?
            </p>
            <p class="mh-p">
              उ. एक नीति के रूप में, हम अपने मेहमानों को याद दिलाते रहते हैं कि
              वे चेक-आउट करते वक़्त अपने कमरे के हर कोने को अच्छी तरह से जाँच ले
              कि कहीं उनका कोई सामान छूट तो नहीं गया है। हालाँकि, इसके बाद भी
              यदि आपका कोई सामान छूट जाता है तो आप हमारे 'खोया और पाया' सेक्शन
              में देख सकते है, जहाँ पर ऐसे छूटे हुए या लावारिस सामान और उनकी
              जानकारी जमा की जाती हैं। यदि आपका छूटा हुआ सामान वहां पाया जाता
              है, तो हम इसे सुरक्षित रूप से आप तक पहुँचाने का प्रयास करेंगे। इसे
              सुविधाजनक तरीके से आप तक पहुँचाने के लिए हमारी टीम आप से संपर्क और
              सहयोग करेगी ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर यहां बताए गए सवालों के अलावा मेरा कोई सवाल है, तो मैं
              किससे पूछ सकता/ सकती हूं?
            </p>
            <p class="mh-p">
              उ. हमारी ग्राहक सहायता टीम - जो आपकी सेवा में 24x7x365 उपलब्ध है
              उन्हें आपके किसी भी प्रश्न का उत्तर देने में प्रसन्नता होगी ।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <q-page
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Hindi' ? true : false"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">आपके सवाल:</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row bg-accent">
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-weight-bold">
              प्र. क्या मैं एक साथ अलग-अलग तिथियों के लिए कमरे बुक कर सकता /
              सकती हूं ?
            </p>

            <p class="mh-p">
              उ. हाँ, आप अलग-अलग तिथियों के लिए MangoHomz Rooms बुक कर सकते हैं ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या मैं बुकिंग कैंसिल या फिर से शेड्यूल कर सकता / सकती हूं ?
            </p>
            <p class="mh-p">
              उ. हाँ, आप अपनी बुकिंग कैंसिल यानि की रद्द या रीशेड्यूल कर सकते
              हैं, लेकिन कैंसलेशन और रीशेड्यूल दोनों के लिए शुल्क लग सकता है। ये
              शुल्क इस बात पर निर्भर करता है की आप कैंसलेशन और रीशेड्यूल अपनी
              बुकिंग से कितने समय बाद कर रहे है। अन्य जानकारी के लिए कृपया हमारी
              MangoHomz बुकिंग और कैंसलेशन रूल्स को देखें ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. MangoHomz की बुकिंग के लिए पैमेंट कैसे करें ?
            </p>
            <p class="mh-p">
              उ. MangoHomz की बुकिंग आप नेट-बैंकिंग, क्रेडिट या डेबिट कार्ड और
              अन्य ई-वॉलेट से कर सकते हैं ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या MangoHomz के साथ मेरी बुकिंग के लिए पेमेन्ट करते समय
              मेरे डेबिट / क्रेडिट कार्ड या बैंक सम्बंधित जानकारी सुरक्षित रहती
              है ?
            </p>
            <p class="mh-p">
              उ. जी हां, MangoHomz ऑनलाइन भुगतान गेटवे पूरी तरह सुरक्षित है और
              ये सभी सुरक्षा सेवाओं के मानकों का पालन करता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर मैं MangoHomz की अपनी बुकिंग रद्द करता / करती हूं, तो
              मुझे अपनी की हुई बुकिंग का रिफंड कैसे मिलेगा ?
            </p>
            <p class="mh-p">
              उ. हमारी बुकिंग कैंसलेशन की नीति के अनुसार, आपको आपकी बुकिंग राशि
              उसी पेमेंट मोड पर ऑनलाइन मिल जाएगी जिसका उपयोग आपने बुकिंग के लिए
              किया था। बुकिंग करते हुए कैंसलेशन करने के सन्दर्भ में जानकरी के
              लिए आपके द्वारा चुनी हुयी MangoHomz प्रॉपर्टी में देखें ।
            </p>
          </div>
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-bold">
              प्र. किसी अन्य देश से यदि मैं भारत में MangoHomz बुक करता / करती
              हूँ तो क्या मैं अपने अंतर्राष्ट्रीय कार्ड या करेंसी का उपयोग कर
              सकता / सकती हूँ ?
            </p>
            <p class="mh-p">
              उ. हाँ, MangoHomz पेमेंट गेटवे सिस्टम, बुकिंग के समय, अनेक भाषाओं
              / स्थान से पेमेंट की व्यवस्था का समर्थन करता है। ये सिस्टम सभी
              अंतर्राष्ट्रीय कर्रेंसीज़ और अंतर्राष्ट्रीय कार्डों से पेमेंट को
              सपोर्ट करता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या मेरे द्वारा बुकिंग करते समय दी गई जानकारी सुरक्षित है ?
            </p>
            <p class="mh-p">
              उ. MangoHomz वेबसाइट पर हमारे सभी यूज़र्स द्वारा साझा की गई सभी
              जानकारी या डेटा को पूरी तरह से गोपनीय रखा जाता है ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. क्या MangoHomz में स्टे के दौरान मेरे साथ बच्चे भी रह सकते
              हैं ?
            </p>
            <p class="mh-p">
              उ. जी हाँ। MangoHomz की अधिकांश संपत्तियां बच्चों के अनुकूल हैं ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर MangoHomz से चेक आउट करते समय मेरा कोई निजी सामान छूट
              जाता है, तो क्या मैं उसे वापस पा सकता / सकती हूँ ?
            </p>
            <p class="mh-p">
              उ. एक नीति के रूप में, हम अपने मेहमानों को याद दिलाते रहते हैं कि
              वे चेक-आउट करते वक़्त अपने कमरे के हर कोने को अच्छी तरह से जाँच ले
              कि कहीं उनका कोई सामान छूट तो नहीं गया है। हालाँकि, इसके बाद भी
              यदि आपका कोई सामान छूट जाता है तो आप हमारे 'खोया और पाया' सेक्शन
              में देख सकते है, जहाँ पर ऐसे छूटे हुए या लावारिस सामान और उनकी
              जानकारी जमा की जाती हैं। यदि आपका छूटा हुआ सामान वहां पाया जाता
              है, तो हम इसे सुरक्षित रूप से आप तक पहुँचाने का प्रयास करेंगे। इसे
              सुविधाजनक तरीके से आप तक पहुँचाने के लिए हमारी टीम आप से संपर्क और
              सहयोग करेगी ।
            </p>
            <br />

            <p class="mh-p text-bold">
              प्र. अगर यहां बताए गए सवालों के अलावा मेरा कोई सवाल है, तो मैं
              किससे पूछ सकता/ सकती हूं ?
            </p>
            <p class="mh-p">
              उ. हमारी ग्राहक सहायता टीम - जो आपकी सेवा में 24x7x365 उपलब्ध है
              उन्हें आपके किसी भी प्रश्न का उत्तर देने में प्रसन्नता होगी ।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <!-- Assamme -->

    <q-page
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <div class="col-1 col-lg-1 col-md-2 col-xs-1"></div>
          <div class="col-1 col-lg-1 col-md-2 col-xs-2">
            <q-img
              src="~assets/logos/Asset1 (1).png"
              style="width: 50px; height: 50px; max-width: 50px"
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-primary text-bold">
              সঘনাই সোধা কিছু প্ৰশ্ন:
            </p>
          </div>
        </div>

        <div class="row bg-accent">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <br />

            <p class="mh-p text-bold">
              প্ৰ: একেলগে বেলেগ-বেলেগ তাৰিখৰ বাবে ৰুম বুক কৰিব পাৰিনে?
            </p>

            <p class="mh-p">
              উ: হয়,আপুনি বেলেগ-বেলেগ তাৰিখৰ বাবে একেলগে ৰুম বুক কৰিব পাৰিব।
            </p>

            <br />
            <p class="mh-p text-bold">
              প্ৰ :বুকিং কেনচেল বা ৰি-চিডিউল কৰিব পৰা যাবনে?
            </p>
            <p class="mh-p">
              উ:হয় পাৰিব, তদুপৰি আপুনি বুকিং কৰা মেংগ’হ’মচৰ প্ৰপাৰ্টি কেনচেলেছন
              বা ৰি-চিডিউলিং আপুনি বুকিং কৰা সময়ৰ ওপৰত নিৰ্ভৰ কৰে আৰু তাৰবাবে
              এটা ফিছো দিব লাগিব পাৰে।অনুগ্ৰহ কৰি নিৰ্দিষ্ট মেংগ’হ’মচ কেনচেলেছন
              বা ৰি-চিডিউলিং নীতি চাই লওক।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মেংগ’হ’মচ বুকিংত পেমেন্ট কৰাৰ বাবে কি কৰিব লাগে?
            </p>
            <p class="mh-p">
              উ: আপুনি নেট বেঙ্কিংৰ লগতে ক্ৰেডিট্‌ বা ডেবিট্‌ কাৰ্ড নতুবা
              অন্যান্য ই-ওৱালেটেৰেও বুকিংৰ পেমেন্ট কৰিব পাৰে।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ : মেংগ’হ’মচ বুকিংত পেমেন্ট কৰাৰ বাবে আমি ব্যৱহাৰ কৰা ক্ৰেডিট্‌
              বা ডেবিট্‌ কাৰ্ড নতুবা বেঙ্কৰ তথ্য দিয়াটো নিৰাপদ হয়নে?
            </p>
            <p class="mh-p">
              উ:হয়,মেংগ’হ’মচ অনলাইন পেমেন্ট গেটৱে নিৰাপদ তথা সমস্ত নিৰাপত্তা
              পৰিসেৱাৰ স’তে সন্মতিপূৰ্ণ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ : যদি আমি বুকিং কেনচেল্‌ কৰিব লগীয়া হয় টকা কেনেকৈ ঘূৰাই পাম?
            </p>
            <p class="mh-p">
              উ: কেনচেলেছনৰ নীতি অনুসৰি আপুনি যি অনলাইন পেমেন্ট মোড্‌ ব্যৱহাৰ
              কৰিছিলে, ঠিক সেই মোডেৰেই বাকেয়া ধন ঘূৰাই পাব। বুকিংৰ সময়ত
              কেনচেলেছনৰ বাবে ইণ্ডিভিজুৱেল মেংগ’হ’মচ প্ৰপাৰ্টি চাওক।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ : ইন্টাৰনেচনেল লোকেচনৰ পৰা মেংগ’হ’মচত ভাৰতৰ প্ৰপাৰ্টি বুকিংৰ
              ক্ষেত্ৰত ইন্টাৰনেচনেল কাৰ্ড বা কাৰেঞ্চী চলিবনে?
            </p>
            <p class="mh-p">
              উ: হয়, মেংগ’হ’মচ পেমেন্ট গেটৱেয়ে মাল্টীপল লেংগুৱেজ/লোকেচন চাপৰ্ট
              কৰে, যি সকলো ধৰনৰ ইন্টাৰনেচনেল কাৰ্ড বা কাৰেঞ্চী এনেবল কৰাত সহায়
              কৰে।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: বুকিংত মোৰ পৰা লোৱা তথ্যবোৰ সুৰক্ষিতনে?
            </p>
            <p class="mh-p">
              উ: হয়, মেংগ’হ’মচৰ ৱেবচাইটত আপুনি চেয়াৰ কৰা সমুহ তথ্য কৰি ৰখা হয়
              স্ট্ৰীক্টলী কন্‌ফিডেনছিয়েল্‌।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মই মেংগ’হ’মচ আৱাসলৈ মোৰ সন্তানক নিব পাৰিমনে?
            </p>
            <p class="mh-p">
              উ:হয়, মেংগ’হ’মচ আৱাসবোৰ শিশু অনুকুল বৈশিষ্টেৰে সমৃদ্ধ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মেংগ’হ’মচৰ পৰা চেক্‌-আউট কৰোতে মই যদি কিবা বস্তু এৰি থৈ আহোঁ
              তেনেহলে আকৌ পোৱা যাবনে?
            </p>
            <p class="mh-p">
              উ: আমাৰ পলিচী অনুযায়ী, আমাৰ আলহীক আমি মনত পেলাই দিওঁ যাতে ৰুম এৰাৰ
              আগেয়ে তেওঁ ৰুমৰ প্ৰতিটো কোন নিৰিক্ষণ কৰে, যাতে একো থাকি
              নাযায়।তথাপিও, যদি কোনো বস্তু ৰৈ যায় সেইটো আমাৰ লষ্ট্‌-এণ্ড-ফাউণ্ড
              চেকচন্‌ত জমা থাকে। সেয়ে যদি হেৰোৱা বস্তু বিচাৰি পোৱা হয় দুয়োপক্ষৰ
              সুবিধা হোৱাকৈ সুকলমে ঘূৰাই পঠোৱা হয়।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: যদি মোৰ ইয়াৰ বাহিৰেও কিবা প্ৰশ্ন থাকে, তেনেহলে কাৰ স’তে
              যোগাযোগ কৰিব পাৰি?
            </p>
            <p class="mh-p">
              উ: আমাৰ কাষ্টমাৰ চাপৰ্ট টিম উপলব্ধ থাকে ২৪x৭x৩৬৫ সময়তে, যি আপোনাৰ
              সকলো প্ৰশ্নৰ সঠিক উত্তৰ দিব।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <q-page
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Assamese' ? true : false"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">সঘনাই সোধা কিছু প্ৰশ্ন:</p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row bg-accent">
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-weight-bold">
              প্ৰ: একেলগে বেলেগ-বেলেগ তাৰিখৰ বাবে ৰুম বুক কৰিব পাৰিনে?
            </p>

            <p class="mh-p">
              উ: হয়,আপুনি বেলেগ-বেলেগ তাৰিখৰ বাবে একেলগে ৰুম বুক কৰিব পাৰিব।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ :বুকিং কেনচেল বা ৰি-চিডিউল কৰিব পৰা যাবনে?
            </p>
            <p class="mh-p">
              উ:হয় পাৰিব, তদুপৰি আপুনি বুকিং কৰা মেংগ’হ’মচৰ প্ৰপাৰ্টি কেনচেলেছন
              বা ৰি-চিডিউলিং আপুনি বুকিং কৰা সময়ৰ ওপৰত নিৰ্ভৰ কৰে আৰু তাৰবাবে
              এটা ফিছো দিব লাগিব পাৰে।অনুগ্ৰহ কৰি নিৰ্দিষ্ট মেংগ’হ’মচ কেনচেলেছন
              বা ৰি-চিডিউলিং নীতি চাই লওক।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মেংগ’হ’মচ বুকিংত পেমেন্ট কৰাৰ বাবে কি কৰিব লাগে?
            </p>
            <p class="mh-p">
              উ: আপুনি নেট বেঙ্কিংৰ লগতে ক্ৰেডিট্‌ বা ডেবিট্‌ কাৰ্ড নতুবা
              অন্যান্য ই-ওৱালেটেৰেও বুকিংৰ পেমেন্ট কৰিব পাৰে।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ : মেংগ’হ’মচ বুকিংত পেমেন্ট কৰাৰ বাবে আমি ব্যৱহাৰ কৰা ক্ৰেডিট্‌
              বা ডেবিট্‌ কাৰ্ড নতুবা বেঙ্কৰ তথ্য দিয়াটো নিৰাপদ হয়নে?
            </p>
            <p class="mh-p">
              উ:হয়,মেংগ’হ’মচ অনলাইন পেমেন্ট গেটৱে নিৰাপদ তথা সমস্ত নিৰাপত্তা
              পৰিসেৱাৰ স’তে সন্মতিপূৰ্ণ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ : যদি আমি বুকিং কেনচেল্‌ কৰিব লগীয়া হয় টকা কেনেকৈ ঘূৰাই পাম?
            </p>
            <p class="mh-p">
              উ: কেনচেলেছনৰ নীতি অনুসৰি আপুনি যি অনলাইন পেমেন্ট মোড্‌ ব্যৱহাৰ
              কৰিছিলে, ঠিক সেই মোডেৰেই বাকেয়া ধন ঘূৰাই পাব। বুকিংৰ সময়ত
              কেনচেলেছনৰ বাবে ইণ্ডিভিজুৱেল মেংগ’হ’মচ প্ৰপাৰ্টি চাওক।
            </p>
          </div>
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-bold">
              প্ৰ : ইন্টাৰনেচনেল লোকেচনৰ পৰা মেংগ’হ’মচত ভাৰতৰ প্ৰপাৰ্টি বুকিংৰ
              ক্ষেত্ৰত ইন্টাৰনেচনেল কাৰ্ড বা কাৰেঞ্চী চলিবনে?
            </p>
            <p class="mh-p">
              উ: হয়, মেংগ’হ’মচ পেমেন্ট গেটৱেয়ে মাল্টীপল লেংগুৱেজ/লোকেচন চাপৰ্ট
              কৰে, যি সকলো ধৰনৰ ইন্টাৰনেচনেল কাৰ্ড বা কাৰেঞ্চী এনেবল কৰাত সহায়
              কৰে।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: বুকিংত মোৰ পৰা লোৱা তথ্যবোৰ সুৰক্ষিতনে?
            </p>
            <p class="mh-p">
              উ: হয়, মেংগ’হ’মচৰ ৱেবচাইটত আপুনি চেয়াৰ কৰা সমুহ তথ্য কৰি ৰখা হয়
              স্ট্ৰীক্টলী কন্‌ফিডেনছিয়েল্‌।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মই মেংগ’হ’মচ আৱাসলৈ মোৰ সন্তানক নিব পাৰিমনে?
            </p>
            <p class="mh-p">
              উ:হয়, মেংগ’হ’মচ আৱাসবোৰ শিশু অনুকুল বৈশিষ্টেৰে সমৃদ্ধ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: মেংগ’হ’মচৰ পৰা চেক্‌-আউট কৰোতে মই যদি কিবা বস্তু এৰি থৈ আহোঁ
              তেনেহলে আকৌ পোৱা যাবনে?
            </p>
            <p class="mh-p">
              উ: আমাৰ পলিচী অনুযায়ী, আমাৰ আলহীক আমি মনত পেলাই দিওঁ যাতে ৰুম এৰাৰ
              আগেয়ে তেওঁ ৰুমৰ প্ৰতিটো কোন নিৰিক্ষণ কৰে, যাতে একো থাকি
              নাযায়।তথাপিও, যদি কোনো বস্তু ৰৈ যায় সেইটো আমাৰ লষ্ট্‌-এণ্ড-ফাউণ্ড
              চেকচন্‌ত জমা থাকে। সেয়ে যদি হেৰোৱা বস্তু বিচাৰি পোৱা হয় দুয়োপক্ষৰ
              সুবিধা হোৱাকৈ সুকলমে ঘূৰাই পঠোৱা হয়।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্ৰ: যদি মোৰ ইয়াৰ বাহিৰেও কিবা প্ৰশ্ন থাকে, তেনেহলে কাৰ স’তে
              যোগাযোগ কৰিব পাৰি?
            </p>
            <p class="mh-p">
              উ: আমাৰ কাষ্টমাৰ চাপৰ্ট টিম উপলব্ধ থাকে ২৪x৭x৩৬৫ সময়তে, যি আপোনাৰ
              সকলো প্ৰশ্নৰ সঠিক উত্তৰ দিব।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <!-- Bengali -->
    <q-page
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <div class="col-1 col-lg-1 col-md-2 col-xs-1"></div>
          <div class="col-1 col-lg-1 col-md-2 col-xs-2">
            <q-img
              src="~assets/logos/Asset1 (1).png"
              style="width: 50px; height: 50px; max-width: 50px"
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-primary text-bold">
              এফ এ কিউ সচরাচর যেসব প্রশ্ন করা হয়
            </p>
          </div>
        </div>

        <div class="row bg-accent">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। আলাদা আলাদা তারিখের জন্য ঘর বুকিং কি একই সঙ্গে করা সম্ভব?
            </p>

            <p class="mh-p">
              উত্তর। হ্যাঁ,আলাদা আলাদা তারিখের জন্য আপনি ম্যাঙ্গোহোমZ-এর ঘর বুক
              করতে পারেন।
            </p>

            <br />
            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং বাতিল করা বা নোতুন দিনক্ষণে বদলানো সম্ভব?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, বুকিং বাতিল করা বা নোতুন দিনক্ষণে বদলানো
              সম্ভব।কিন্তু বাতিল বা বদলের জন্য হয়তো খরচ-খরচা কিছু লাগতে পারে,
              সেটা নির্ভর করছে কি ধরণের ম্যাঙ্গোহোমZ-এর ঘর বা আবাসন আপনি বুক
              করেছেন এবং বাতিল বা বদল কত দিন আগে আপনি করছেন,তার ওপর।অনুরোধ করি
              আপনি একবার ম্যাঙ্গো হোমZ-এর বুকিং ও রদবদলের নিয়মাবলী দেখে নিন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। ম্যাঙ্গো হোমZ-এর বুকিং-এর জন্য যে খরচা লাগবে তা দেবার
              পদ্ধতিগুলো কি?
            </p>
            <p class="mh-p">
              উত্তর। আপনি নেট-ব্যাঙ্কিং, ক্রেডিট বা ডেবিট কার্ড বা যে কোন
              ই-ওয়ালেটের মাধ্যমে বুক করতে পারেন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। টাকা দেবার সময় ,ম্যাঙ্গোহোমZ-এর বুকিং পেজে আমার
              ডেবিট/ক্রেডিট কার্ডের বা ব্যাঙ্কের তথ্য দেওয়া নিরাপদ তো?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, ম্যাঙ্গোহোমZ-এর অন লাইন টাকা দেবার পদ্ধতি সমস্ত
              নিয়মের আওতায় পড়ে, তাই একদম নিরাপদ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং রদ করলে,টাকা কি করে ফেরত পাব ?
            </p>
            <p class="mh-p">
              উত্তর। বাতিল করার শর্ত অনুযায়ী আপনি যে পদ্ধতি ব্যাবহার করে অনলাইন
              টাকা দিয়েছেন সেই পদ্ধতিতেই টাকা যেখান থেকে দিয়েছেন সেখানেই ফেরত
              যাবে।বাতিল করার সময় দয়া করে বুক করার সময় যে বিশেষ ম্যাঙ্গোহোমZ-এর
              ঘর বা আবাসন ব্যাবহার করতে চেয়েছিলেন তার উল্লেখ অবশ্যই করবেন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। ভারতবর্ষের বাইরের কোন জায়গা থেকে আমি যদি ম্যাঙ্গো হোমZ,
              ইন্ডিয়ায় বুক করি, আমি কি আমার আন্তর্জাতিক কোন কার্ড বা বিদেশী
              মুদ্রা ব্যাবহার করতে পারি?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, বুকিঙ্গের সময় ম্যাঙ্গোহোম্Z-এর অনলাইন টাকা দেবার
              পদ্ধতি,বিভিন্ন ভাষায়/পৃথিবীর বিভিন্ন জায়গার আন্তর্জাতিক মুদ্রা আর
              আন্তর্জাতিক কার্ড নেবার মতো করে তৈরি।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং-এর সময় আমি নিজের সম্পর্কে যে তথ্যগুলো
              ম্যাঙ্গোহোমZ-কে দিচ্ছি সেগুলো আবার বাইরে চলে যাবে না তো?
            </p>
            <p class="mh-p">
              উত্তর। ম্যাঙ্গোহোমZ-এর ওয়েবসাইট ব্যাবহার যারা করছেন, তাদের দেওয়া
              তথ্য কখনই অন্য কারোর কাছে যাবে না, তাই নিরাপদ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। আমার সন্তানরা কি আমার সাথে ম্যাঙ্গোহোমZ-এ থাকতে পারে?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ। বেশীরভাগ ম্যাঙ্গোহোমZ-এর আবাসনই শিশুদের থাকার মতো।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। কিছু জিনিষ যদি আমি ভুল করে ফেলে আসি ম্যাঙ্গো হোমZ ছেড়ে
              আসার সময় ,ফেরত পাওয়া যাবে তো?
            </p>
            <p class="mh-p">
              উত্তর। ম্যাঙ্গোহোমZ ছাড়বার আগে, নিয়ম অনুযায়ী আমরা অতিথিদের মনে
              করাই যাতে ঘর ভাল করে দেখে যেতে, প্রতিটা জিনিষ নিয়ে যেতে। তা সত্যেও
              যদি ভুল করে কিছু ফেলে যান, আমাদের একটা ‘হারানো/প্রাপ্তির’ বিভাগ
              আছে যেখানে ফেলে যাওয়া জিনিষ জমা করা হয়। যদি এ রকম কিছু পাওয়া যায়,
              আমরা চেষ্টা করব সে সব কি ভাবে, উভয় পক্ষের সুবিধে অনুযায়ী, ফিরিয়ে
              দেওয়া যায়।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। এর বাইরেও কিছু প্রশ্ন থাকলে, কাকে জিজ্ঞেষ করবো?
            </p>
            <p class="mh-p">
              উত্তর। আমাদের কাস্টমার সহায়ক দল – যাদের ২৪x৭x৩৬৫ দিন যোগাযোগ করা
              যায়-তারা খুশী হয়ে আপনার প্রশ্নের উত্তর দেবার চেষ্টা করবে।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <q-page
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Bengali' ? true : false"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">
                    এফ এ কিউ <br />সচরাচর যেসব প্রশ্ন করা হয়
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row bg-accent">
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-weight-bold">
              প্রশ্ন। আলাদা আলাদা তারিখের জন্য ঘর বুকিং কি একই সঙ্গে করা সম্ভব?
            </p>

            <p class="mh-p">
              উত্তর। হ্যাঁ,আলাদা আলাদা তারিখের জন্য আপনি ম্যাঙ্গোহোমZ-এর ঘর বুক
              করতে পারেন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং বাতিল করা বা নোতুন দিনক্ষণে বদলানো সম্ভব?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, বুকিং বাতিল করা বা নোতুন দিনক্ষণে বদলানো
              সম্ভব।কিন্তু বাতিল বা বদলের জন্য হয়তো খরচ-খরচা কিছু লাগতে পারে,
              সেটা নির্ভর করছে কি ধরণের ম্যাঙ্গোহোমZ-এর ঘর বা আবাসন আপনি বুক
              করেছেন এবং বাতিল বা বদল কত দিন আগে আপনি করছেন,তার ওপর।অনুরোধ করি
              আপনি একবার ম্যাঙ্গো হোমZ-এর বুকিং ও রদবদলের নিয়মাবলী দেখে নিন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। ম্যাঙ্গো হোমZ-এর বুকিং-এর জন্য যে খরচা লাগবে তা দেবার
              পদ্ধতিগুলো কি?
            </p>
            <p class="mh-p">
              উত্তর। আপনি নেট-ব্যাঙ্কিং, ক্রেডিট বা ডেবিট কার্ড বা যে কোন
              ই-ওয়ালেটের মাধ্যমে বুক করতে পারেন।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। টাকা দেবার সময় ,ম্যাঙ্গোহোমZ-এর বুকিং পেজে আমার
              ডেবিট/ক্রেডিট কার্ডের বা ব্যাঙ্কের তথ্য দেওয়া নিরাপদ তো?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, ম্যাঙ্গোহোমZ-এর অন লাইন টাকা দেবার পদ্ধতি সমস্ত
              নিয়মের আওতায় পড়ে, তাই একদম নিরাপদ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং রদ করলে,টাকা কি করে ফেরত পাব ?
            </p>
            <p class="mh-p">
              উত্তর। বাতিল করার শর্ত অনুযায়ী আপনি যে পদ্ধতি ব্যাবহার করে অনলাইন
              টাকা দিয়েছেন সেই পদ্ধতিতেই টাকা যেখান থেকে দিয়েছেন সেখানেই ফেরত
              যাবে।বাতিল করার সময় দয়া করে বুক করার সময় যে বিশেষ ম্যাঙ্গোহোমZ-এর
              ঘর বা আবাসন ব্যাবহার করতে চেয়েছিলেন তার উল্লেখ অবশ্যই করবেন।
            </p>
          </div>
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। ভারতবর্ষের বাইরের কোন জায়গা থেকে আমি যদি ম্যাঙ্গো হোমZ,
              ইন্ডিয়ায় বুক করি, আমি কি আমার আন্তর্জাতিক কোন কার্ড বা বিদেশী
              মুদ্রা ব্যাবহার করতে পারি?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ, বুকিঙ্গের সময় ম্যাঙ্গোহোম্Z-এর অনলাইন টাকা দেবার
              পদ্ধতি,বিভিন্ন ভাষায়/পৃথিবীর বিভিন্ন জায়গার আন্তর্জাতিক মুদ্রা আর
              আন্তর্জাতিক কার্ড নেবার মতো করে তৈরি।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। বুকিং-এর সময় আমি নিজের সম্পর্কে যে তথ্যগুলো
              ম্যাঙ্গোহোমZ-কে দিচ্ছি সেগুলো আবার বাইরে চলে যাবে না তো?
            </p>
            <p class="mh-p">
              উত্তর। ম্যাঙ্গোহোমZ-এর ওয়েবসাইট ব্যাবহার যারা করছেন, তাদের দেওয়া
              তথ্য কখনই অন্য কারোর কাছে যাবে না, তাই নিরাপদ।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। আমার সন্তানরা কি আমার সাথে ম্যাঙ্গোহোমZ-এ থাকতে পারে?
            </p>
            <p class="mh-p">
              উত্তর। হ্যাঁ। বেশীরভাগ ম্যাঙ্গোহোমZ-এর আবাসনই শিশুদের থাকার মতো।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। কিছু জিনিষ যদি আমি ভুল করে ফেলে আসি ম্যাঙ্গো হোমZ ছেড়ে
              আসার সময় ,ফেরত পাওয়া যাবে তো?
            </p>
            <p class="mh-p">
              উত্তর। ম্যাঙ্গোহোমZ ছাড়বার আগে, নিয়ম অনুযায়ী আমরা অতিথিদের মনে
              করাই যাতে ঘর ভাল করে দেখে যেতে, প্রতিটা জিনিষ নিয়ে যেতে। তা সত্যেও
              যদি ভুল করে কিছু ফেলে যান, আমাদের একটা ‘হারানো/প্রাপ্তির’ বিভাগ
              আছে যেখানে ফেলে যাওয়া জিনিষ জমা করা হয়। যদি এ রকম কিছু পাওয়া যায়,
              আমরা চেষ্টা করব সে সব কি ভাবে, উভয় পক্ষের সুবিধে অনুযায়ী, ফিরিয়ে
              দেওয়া যায়।
            </p>
            <br />

            <p class="mh-p text-bold">
              প্রশ্ন। এর বাইরেও কিছু প্রশ্ন থাকলে, কাকে জিজ্ঞেষ করবো?
            </p>
            <p class="mh-p">
              উত্তর। আমাদের কাস্টমার সহায়ক দল – যাদের ২৪x৭x৩৬৫ দিন যোগাযোগ করা
              যায়-তারা খুশী হয়ে আপনার প্রশ্নের উত্তর দেবার চেষ্টা করবে।
            </p>
          </div>
        </div>
      </div>
    </q-page>

    <!-- Oriya -->

      <q-page
      class="bg-accent lt-sm"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="q-pa-xs">
        <div class="row mh-page-heading">
          <div class="col-1 col-lg-1 col-md-2 col-xs-1"></div>
          <div class="col-1 col-lg-1 col-md-2 col-xs-2">
            <q-img
              src="~assets/logos/Asset1 (1).png"
              style="width: 50px; height: 50px; max-width: 50px"
            />
          </div>
          <div class="col-12">
            <p class="text-h6 text-primary text-bold">
              ବାରମ୍ବାର ପଚରା ଯାଉଥିବା ପ୍ରଶ୍ନ
            </p>
          </div>
        </div>

        <div class="row bg-accent">
          <div class="col-1" style="text-align: center"></div>
          <div class="col-10">
            <br />

            <p class="mh-p text-bold">
              ପ୍ପ୍ର:- ମୁଁ ଏକକାଳିନ ବିଭିନ୍ନ ତାରିଖ ପାଇଁ ରୁମ୍ ବୁକିଂ କରିପାରିବି କି ?
            </p>

            <p class="mh-p">
              ଉ:-ହଁ, ଆପଣ ବିଭିନ୍ନ ତାରିଖ ପାଇଁ MangoHomz ରେ ରୁମ୍ ବୁକିଂ କରିପାରିବେ ।
            </p>

            <br />
            <p class="mh-p text-bold">
              Q. ପ୍ର:-ମୁଁ ବୁକିଂ କୁ ବାତିଲ୍ କିମ୍ବା ପୁନଃ ବୁକିଂ କରି ପାରିବି କି ?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, ଆପଣ ବୁକିଂ କୁ ବାତିଲ୍ କିମ୍ବା ପୁନଃ ନିର୍ଦ୍ଧାରଣ କରିପାରିବେ କିନ୍ତୁ ଆପଣ MangoHomz ର ବୁକିଂ ଏବଂ କ୍ୟାନ୍‌ସେଲେସନ୍ ପଲିସି ପଢି ନିଅନ୍ତୁ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:- MangoHomz ବୁକିଂ କରିବା ପାଇଁ ପଇସା ଦେବାର ଉପାୟ କଣ ?
            </p>
            <p class="mh-p">
              ଉ:-ଆପଣ MangoHomz ରେ ବୁକିଂ କରିବା ସମୟରେ ନେଟ୍ ବ୍ୟାଙ୍କିଂଗ୍‌, କ୍ରେଡିଟ ଏବଂ ଡେବିଟ୍ କାର୍ଡ ଏବଂ ଅନ୍ୟାନ୍ୟ ଇ-ୱାଲେଟ୍ ସହିତ ପଇସା ଦେଇପାରିବେ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:- MangoHomz ସହିତ ମୋର ବୁକିଂ ପାଇଁ ଦେୟ ଦେବା ବେଳେ ମୋର ଡେବିଟ୍‌/ କ୍ରେଡିଟ୍ କାର୍ଡ କିମ୍ବା ବ୍ୟାଙ୍କ ସୁଚନା ବ୍ୟବହାର କରିବା ନିରାପଦ କି ?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, MangoHomz ଅନଲାଇନ୍ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ ନିରାପଦ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଯଦି ମୁଁ ମୋର ବୁକିଂ ବାତିଲ୍ କରେ ତେବେ ମୁଁ କିପରି ଫେରସ୍ତ ପାଇବି ?
            </p>
            <p class="mh-p">
             ଉ:-ବାତିଲ୍ ନିୟମ ଅନୁଯାୟୀ ଆପଣଙ୍କର ବଳକା ଅର୍ଥ ଆପଣଙ୍କ ପେମେଣ୍ଟ ସମୟରେ ବ୍ୟବହାର କରିଥିବା ଅନଲାଇନ ମୋଡ, କ୍ରେଡିଟ୍ / ଡେବିଟ୍ କାର୍ଡ କୁ ଫେରସ୍ତ ଯିବ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଆନ୍ତର୍ଜାତୀୟ ସ୍ଥାନରୁ ଯଦି ମୁଁ ଭାରତରେ MangoHomz ବୁକ୍ କରେ ତେବେ ମୁଁ ମୋର ଆନ୍ତର୍ଜାତୀୟ କାର୍ଡ କିମ୍ବା ମୁଦ୍ରା ବ୍ୟବହାର କରିପାରିବି କି?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, ବୁକିଂ କରିବା ସମୟରେ MangoHomz ପେମେଣ୍ଟ ଗେଟ୍‌ୱେରେ ଏକାଧିକ ଭାଷା /ଅବସ୍ଥାନ ସିଷ୍ଟମକୁ ସମର୍ଥନ କରେ ଯାହା ସମସ୍ତ ଆନ୍ତର୍ଜାତିକ ମୁଦ୍ରା ଏବଂ ଆନ୍ତର୍ଜାତୀୟ କାର୍ଡ ଗ୍ରହଣ କରିଥାଏ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ବୁକିଂ କରିବା ସମୟରେ ମୋ ଦ୍ୱାରା ପ୍ରଦାନ କରାଯାଉଥିବା ସୂଚନା ସୁରକ୍ଷିତ କି ?
            </p>
            <p class="mh-p">
              ଉ:-MangoHomz ୱେବ୍‌ସାଇଟ୍‌ରେ ଆମର ଉପଭୋକ୍ତାମାନଙ୍କ ଦ୍ୱାରା ପ୍ରଦାନ କରାଯାଉଥିବା ସମସ୍ତ ସୁଚନା କିମ୍ବା ତଥ୍ୟକୁ ଗୋପୀୟ ରଖାଯାଏ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ମୋର MangoHomz ରହଣୀ ସମୟର ମୋ ସହିତ ପିଲାମାନେ ରହିପାରିବେ କି?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ ଅଧିକାଂଶ MangoHomz ଗୁଡ଼ିକ ଶିଶୁ ଅନୁକୂଳ ଅଟେ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଯଦି ମୁଁ MangoHomz ରୁ ଚେକ୍‌-ଆଉଟ୍ ସମୟରେ ମୋର କୈାଣସି ବ୍ୟକ୍ତିଗତ ଜିନିଷ ମିସ୍ କରେ ତେବେ ମୁଁ ଏହାକୁ ଫେରି ପାଇ ପାରିବି କି ?
            </p>
            <p class="mh-p">
              ଉ:-ଆମେ MangoHomz ଅତିଥିଙ୍କୁ ଚେକ୍‌-ଆଉଟ୍ କେଲା ବେଳେ ନିଜର ସମସ୍ତ ଜିନିଷ ତଦାରଖ କରି ନେବା ପାଇଁ ଅନୁରୋଧ କରିଥାଉ ତଥାପି ଯଦି ଆପଣ ନିଜର କିଛି ଜିନିଷ ଛାଡ଼ି ଯାଇଥାନ୍ତି ତାହାହେଲେ ଆପଣ ୱେବ୍‌ସାଇଟ୍‌ରେ ଥିବା ଲଷ୍ଟ ଏବଂ ଫାଉଣ୍ଡ ସେକ୍‌ସନ୍ ଦେଖିପାରିବେ ଯଦି ଆପଣଙ୍କ ଜିନିଷ ଉପଲବ୍ଧ ଥାଏ ତାହାହେଲେ ଆମେ ତାହା ଆପଣଙ୍କୁ ପଠାଇବାର ବନ୍ଦୋବସ୍ତ କରିଥାଉ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଯଦି ମୋର ଏଠାରେ ଉଲ୍ଲେଖ କରାଯାଇଥିବା ପ୍ରଶ୍ନ ବ୍ୟତୀତ ଅନ୍ୟ କୈାଣସି ପ୍ରଶ୍ନ ଅଛି ମୁଁ କାହାକୁ ପ୍ରଚାରିବି ?
            </p>
            <p class="mh-p">
              ଉ:-ଆମର ଗ୍ରହକ ସହାୟକ ଦଳ ଯାହା ଚବିଶ୍ ଘଣ୍ଟା ଉପଲବ୍ଧ ଆପଣ ପାଖରେ ଥିବା ସମସ୍ତ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବାକୁ ଖୁସି ହେବୁ ।
            </p>
          </div>
        </div>
      </div>
    </q-page>

     <q-page
      class="bg-accent gt-xs"
      v-show="this.$store.state.account.language == 'Oriya' ? true : false"
    >
      <div class="q-pa-md">
        <div class="row mh-page-heading">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-img
                  src="~assets/logos/Asset1 (1).png"
                  style="width: 50px; height: 50px; max-width: 50px"
                />
              </q-item-section>
              <q-item-section>
                <q-item-section>
                  <p class="text-h4 text-primary">
                    ବାରମ୍ବାର <br />ପଚରା ଯାଉଥିବା ପ୍ରଶ୍ନ
                  </p>
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row bg-accent">
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-weight-bold">
              ପ୍ପ୍ର:- ମୁଁ ଏକକାଳିନ ବିଭିନ୍ନ ତାରିଖ ପାଇଁ ରୁମ୍ ବୁକିଂ କରିପାରିବି କି ?
            </p>

            <p class="mh-p">
              ଉ:-ହଁ, ଆପଣ ବିଭିନ୍ନ ତାରିଖ ପାଇଁ MangoHomz ରେ ରୁମ୍ ବୁକିଂ କରିପାରିବେ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              Q. ପ୍ର:-ମୁଁ ବୁକିଂ କୁ ବାତିଲ୍ କିମ୍ବା ପୁନଃ ବୁକିଂ କରି ପାରିବି କି ?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, ଆପଣ ବୁକିଂ କୁ ବାତିଲ୍ କିମ୍ବା ପୁନଃ ନିର୍ଦ୍ଧାରଣ କରିପାରିବେ କିନ୍ତୁ ଆପଣ MangoHomz ର ବୁକିଂ ଏବଂ କ୍ୟାନ୍‌ସେଲେସନ୍ ପଲିସି ପଢି ନିଅନ୍ତୁ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:- MangoHomz ବୁକିଂ କରିବା ପାଇଁ ପଇସା ଦେବାର ଉପାୟ କଣ ?
            </p>
            <p class="mh-p">
              ଉ:-ଆପଣ MangoHomz ରେ ବୁକିଂ କରିବା ସମୟରେ ନେଟ୍ ବ୍ୟାଙ୍କିଂଗ୍‌, କ୍ରେଡିଟ ଏବଂ ଡେବିଟ୍ କାର୍ଡ ଏବଂ ଅନ୍ୟାନ୍ୟ ଇ-ୱାଲେଟ୍ ସହିତ ପଇସା ଦେଇପାରିବେ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:- MangoHomz ସହିତ ମୋର ବୁକିଂ ପାଇଁ ଦେୟ ଦେବା ବେଳେ ମୋର ଡେବିଟ୍‌/ କ୍ରେଡିଟ୍ କାର୍ଡ କିମ୍ବା ବ୍ୟାଙ୍କ ସୁଚନା ବ୍ୟବହାର କରିବା ନିରାପଦ କି ?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, MangoHomz ଅନଲାଇନ୍ ପେମେଣ୍ଟ ଗେଟ୍‌ୱେ ନିରାପଦ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଯଦି ମୁଁ ମୋର ବୁକିଂ ବାତିଲ୍ କରେ ତେବେ ମୁଁ କିପରି ଫେରସ୍ତ ପାଇବି ?
            </p>
            <p class="mh-p">
              ଉ:-ବାତିଲ୍ ନିୟମ ଅନୁଯାୟୀ ଆପଣଙ୍କର ବଳକା ଅର୍ଥ ଆପଣଙ୍କ ପେମେଣ୍ଟ ସମୟରେ ବ୍ୟବହାର କରିଥିବା ଅନଲାଇନ ମୋଡ, କ୍ରେଡିଟ୍ / ଡେବିଟ୍ କାର୍ଡ କୁ ଫେରସ୍ତ ଯିବ ।
            </p>
          </div>
          <div class="col-6 q-pa-md">
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଆନ୍ତର୍ଜାତୀୟ ସ୍ଥାନରୁ ଯଦି ମୁଁ ଭାରତରେ MangoHomz ବୁକ୍ କରେ ତେବେ ମୁଁ ମୋର ଆନ୍ତର୍ଜାତୀୟ କାର୍ଡ କିମ୍ବା ମୁଦ୍ରା ବ୍ୟବହାର କରିପାରିବି କି?
            </p>
            <p class="mh-p">
              ଉ:-ହଁ, ବୁକିଂ କରିବା ସମୟରେ MangoHomz ପେମେଣ୍ଟ ଗେଟ୍‌ୱେରେ ଏକାଧିକ ଭାଷା /ଅବସ୍ଥାନ ସିଷ୍ଟମକୁ ସମର୍ଥନ କରେ ଯାହା ସମସ୍ତ ଆନ୍ତର୍ଜାତିକ ମୁଦ୍ରା ଏବଂ ଆନ୍ତର୍ଜାତୀୟ କାର୍ଡ ଗ୍ରହଣ କରିଥାଏ ।
            </p>
            <br />

            <p class="mh-p text-bold">
             ପ୍ର:-ବୁକିଂ କରିବା ସମୟରେ ମୋ ଦ୍ୱାରା ପ୍ରଦାନ କରାଯାଉଥିବା ସୂଚନା ସୁରକ୍ଷିତ କି ?
            </p>
            <p class="mh-p">
             ଉ:-MangoHomz ୱେବ୍‌ସାଇଟ୍‌ରେ ଆମର ଉପଭୋକ୍ତାମାନଙ୍କ ଦ୍ୱାରା ପ୍ରଦାନ କରାଯାଉଥିବା ସମସ୍ତ ସୁଚନା କିମ୍ବା ତଥ୍ୟକୁ ଗୋପୀୟ ରଖାଯାଏ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ମୋର MangoHomz ରହଣୀ ସମୟର ମୋ ସହିତ ପିଲାମାନେ ରହିପାରିବେ କି?
            </p>
            <p class="mh-p">
             ଉ:-ହଁ ଅଧିକାଂଶ MangoHomz ଗୁଡ଼ିକ ଶିଶୁ ଅନୁକୂଳ ଅଟେ ।
            </p>
            <br />

            <p class="mh-p text-bold">
             ପ୍ର:-ଯଦି ମୁଁ MangoHomz ରୁ ଚେକ୍‌-ଆଉଟ୍ ସମୟରେ ମୋର କୈାଣସି ବ୍ୟକ୍ତିଗତ ଜିନିଷ ମିସ୍ କରେ ତେବେ ମୁଁ ଏହାକୁ ଫେରି ପାଇ ପାରିବି କି ?
            </p>
            <p class="mh-p">
             ଉ:-ଆମେ MangoHomz ଅତିଥିଙ୍କୁ ଚେକ୍‌-ଆଉଟ୍ କେଲା ବେଳେ ନିଜର ସମସ୍ତ ଜିନିଷ ତଦାରଖ କରି ନେବା ପାଇଁ ଅନୁରୋଧ କରିଥାଉ ତଥାପି ଯଦି ଆପଣ ନିଜର କିଛି ଜିନିଷ ଛାଡ଼ି ଯାଇଥାନ୍ତି ତାହାହେଲେ ଆପଣ ୱେବ୍‌ସାଇଟ୍‌ରେ ଥିବା ଲଷ୍ଟ ଏବଂ ଫାଉଣ୍ଡ ସେକ୍‌ସନ୍ ଦେଖିପାରିବେ ଯଦି ଆପଣଙ୍କ ଜିନିଷ ଉପଲବ୍ଧ ଥାଏ ତାହାହେଲେ ଆମେ ତାହା ଆପଣଙ୍କୁ ପଠାଇବାର ବନ୍ଦୋବସ୍ତ କରିଥାଉ ।
            </p>
            <br />

            <p class="mh-p text-bold">
              ପ୍ର:-ଯଦି ମୋର ଏଠାରେ ଉଲ୍ଲେଖ କରାଯାଇଥିବା ପ୍ରଶ୍ନ ବ୍ୟତୀତ ଅନ୍ୟ କୈାଣସି ପ୍ରଶ୍ନ ଅଛି ମୁଁ କାହାକୁ ପ୍ରଚାରିବି ?
            </p>
            <p class="mh-p">
              ଉ:-ଆମର ଗ୍ରହକ ସହାୟକ ଦଳ ଯାହା ଚବିଶ୍ ଘଣ୍ଟା ଉପଲବ୍ଧ ଆପଣ ପାଖରେ ଥିବା ସମସ୍ତ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବାକୁ ଖୁସି ହେବୁ ।
            </p>
          </div>
        </div>
      </div>
    </q-page>




  </q-page-container>
</template>
<script>
export default {
  name: "faq",
  data() {
    return {
      title: "Frequently Asked Questions",
    };
  },
};
</script>
<style >
@media screen and (min-width: 1920px) {
  .frequently {
   margin-top: 50px;
  }

}
</style>
