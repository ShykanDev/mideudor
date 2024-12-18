import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaFlag,
  RiZhihuFill,
  BiBank2,
  MdFacebook,
  MdLocationonRound,
  FaPhoneAlt,
  HiMail,
  LaWhatsapp,
  CoTwitter,
  CoInstagram,
  HiSolidCursorClick,
  GiClick,
  BiInfoCircle,
} from 'oh-vue-icons/icons'

addIcons(
  FaFlag,
  RiZhihuFill,
  BiBank2,
  MdFacebook,
  MdLocationonRound,
  FaPhoneAlt,
  HiMail,
  LaWhatsapp,
  CoTwitter,
  CoInstagram,
  HiSolidCursorClick,
  GiClick,
  BiInfoCircle,
)

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

// ..
AOS.init()
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzJHhyJiI__tNgEQtRHTbvK0ximKsp5ks',
  authDomain: 'mideudor-misdeudores.firebaseapp.com',
  projectId: 'mideudor-misdeudores',
  storageBucket: 'mideudor-misdeudores.firebasestorage.app',
  messagingSenderId: '689690270653',
  appId: '1:689690270653:web:e06bd954c2e3c41afb50d4',
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)
app.mount('#app')
