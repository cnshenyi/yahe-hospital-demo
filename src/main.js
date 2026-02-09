import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/global.css'

// Patient views
import PatientHome from './views/patient/Home.vue'
import PatientHealth from './views/patient/Health.vue'
import PatientMessage from './views/patient/Message.vue'
import PatientMy from './views/patient/My.vue'

// Doctor views
import DoctorWorkstation from './views/doctor/Workstation.vue'
import DoctorPatients from './views/doctor/Patients.vue'
import DoctorMessage from './views/doctor/Message.vue'
import DoctorMy from './views/doctor/My.vue'

const routes = [
  { path: '/', redirect: '/patient/home' },
  { path: '/patient/home', component: PatientHome },
  { path: '/patient/health', component: PatientHealth },
  { path: '/patient/message', component: PatientMessage },
  { path: '/patient/my', component: PatientMy },
  { path: '/doctor/workstation', component: DoctorWorkstation },
  { path: '/doctor/patients', component: DoctorPatients },
  { path: '/doctor/message', component: DoctorMessage },
  { path: '/doctor/my', component: DoctorMy },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
