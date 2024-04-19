import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Add PrimeVue
import PrimeVue from "primevue/config";

// Add PrimeVue Components
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";

// Add App Design or Theme
import 'primevue/resources/themes/md-dark-indigo/theme.css'

// Add PrimeIcons
import 'primeicons/primeicons.css'

// Add App Prime flex library
import 'primeflex/primeflex.css'

// Create App
const app = createApp(App);

// Add Ripple for button's animation
// Add PrimeVue Plugin
app.use(PrimeVue, {ripple : true})
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button',SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu',Menu)
    .component('pv-menubar',Menubar)
    .component('pv-toolbar', Toolbar);

// Mount into App
app.mount('#app');
