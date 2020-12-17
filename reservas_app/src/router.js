
import vueRouter from 'vue-router'
import App from './App'
import ConsultarReserva from './components/ConsultarReserva'
import HacerReserva from './components/HacerReserva'
import CancelarReserva from './components/CancelarReserva'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "inicio",
            component: App
        },
        {
            path: '/user/reserva/:id_reserva',
            name: "consular_reserva",
            component: ConsultarReserva
        },
        {
            path: '/user/reserva/make/',
            name: "hacer_reserva",
            component: HacerReserva
        },
        {
            path: '/user/reserva/cancel/',
            name: "cancelar_reserva",
            component: CancelarReserva
        },
    ]
})

export default router