
import vueRouter from 'vue-router'
import App from './App'
import ConsultarReserva from './components/ConsultarReserva'
import HacerReserva from './components/HacerReserva'
import CancelarReserva from './components/CancelarReserva'
import Inicio from './components/Inicio'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "principal",
            component: App
        },
        {
            path: '/inicio/',
            name: "inicio",
            component: Inicio
        },
        {
            path: '/user/reserva/:id_reserva',
            name: "consultar_reserva",
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