import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/global.css'

// Patient views
import PatientHome from './views/patient/Home.vue'
import PatientHealth from './views/patient/Health.vue'
import PatientMessage from './views/patient/Message.vue'
import PatientMy from './views/patient/My.vue'

// Yahe views
import YaheEntry from './views/patient/yahe/Entry.vue'
import YaheHome from './views/patient/yahe/Home.vue'
import YaheRegister from './views/patient/yahe/Register.vue'
import YaheInsurance from './views/patient/yahe/Insurance.vue'
import YaheGuide from './views/patient/yahe/Guide.vue'
import YaheInpatient from './views/patient/yahe/Inpatient.vue'
import YaheHealth from './views/patient/yahe/Health.vue'
import YaheReport from './views/patient/yahe/Report.vue'
import YahePay from './views/patient/yahe/Pay.vue'
import YaheDoctors from './views/patient/yahe/Doctors.vue'

const routes = [
  { path: '/', redirect: '/patient/home' },
  { path: '/patient/home', component: PatientHome },
  { path: '/patient/health', component: PatientHealth },
  { path: '/patient/message', component: PatientMessage },
  { path: '/patient/my', component: PatientMy },
  { path: '/yahe/entry', component: YaheEntry },
  { path: '/yahe/home', component: YaheHome },
  { path: '/yahe/register', component: YaheRegister },
  { path: '/yahe/insurance', component: YaheInsurance },
  { path: '/yahe/guide', component: YaheGuide },
  { path: '/yahe/inpatient', component: YaheInpatient },
  { path: '/yahe/health', component: YaheHealth },
  { path: '/yahe/report', component: YaheReport },
  { path: '/yahe/pay', component: YahePay },
  { path: '/yahe/doctors', component: YaheDoctors },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
