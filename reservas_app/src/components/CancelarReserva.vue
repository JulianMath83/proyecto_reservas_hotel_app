
<template>
    <div id="CancelReserva" class="cancel_reserva">
        <div v-if="busqueda" class="container_form3">
            <form v-on:submit.prevent="processCancelReserva" >
                <h3> Módulo: Cancelar Reserva </h3>
                <h3> Ingrese el número de reserva </h3>
                <input type="text" id="reserva" v-model="form.id_reserva" placeholder="número reserva" required>
                <button type="submit"> Cancelar reserva </button>
            </form>
        </div>
        <div v-if="resultado" class="Result5">
            <ul>
                <li> <h5> Id Reserva: <span> {{id_reserva}} </span> </h5> </li>
                <li> <h5> Estado: <span> {{estado}} </span> </h5> </li>
            </ul>
        </div>
        <div v-if="resultado" class="regresar">
            <button v-on:click="regresar"> Volver </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "CancelarReserva",
        data: function(){
            return{
                id_reserva: "",
                estado: "",
                resultado: false,
                busqueda: true,
                form: {
                    id_reserva: ""
                }
            }
        },
        methods: {
            processCancelReserva: function() {
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
                this.reserva_cancel_in = this.form
                let self = this
                axios.put("https://reservas-hotel-api37.herokuapp.com/user/reserva/cancel/", this.reserva_cancel_in)
                .then((result) => {
                    self.id_reserva = result.data.id_reserva
                    self.estado = result.data.estado
                })
                .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Reserva ya cancelada.");  
                })
            },
            regresar: function(){
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
            }
        }
    }
</script>

<style>
    .cancel_reserva{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container_form3{
        border: 3px solid #07361e;
        border-radius: 10px;
        width: 20%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cancel_reserva h3{
        color: #07361e;
        text-align: center;
    }
    .cancel_reserva h5{
        font-size: 20px;
        color: #07361e;
        justify-content: center;
    }
    .cancel_reserva form{
        width: 85%;
    }
    .cancel_reserva input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #07361e;
    }
    .cancel_reserva button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #07361e;
        border: 2px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .cancel_reserva button:hover{
        color: #07361e;
        background: #E5E7E9;
        border: 2px solid #07361e;
    }
    .Result5{
        border: 3px solid #07361e;
        background-color: #a5b696;
        border-radius: 10px;
        width: 20%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>