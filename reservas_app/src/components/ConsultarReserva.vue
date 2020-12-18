
<template>
    <div id="formularioGetReserva" class="formulario_get_reserva">
        <div class="container_form">
            <form v-on:submit.prevent="processGetReserva" >
                <h3> Ingrese el número de reserva </h3>
                <input type="text" v-model="id_reserva_in" placeholder="número reserva">
                <button type="submit"> Consultar reserva </button>
            </form>
        </div>
        <div class="Result1">
            <ul>
                <li> <h5> Id Reserva: <span> {{id_reserva}} </span> </h5> </li>
                <li> <h5> Nombre: <span> {{nombre}} </span> </h5> </li>
                <li> <h5> Fecha reserva: <span> {{fecha_reserva}} </span> </h5> </li>
                <li> <h5> Destino: <span> {{destino}} </span> </h5> </li>
                <li> <h5> Hotel: <span> {{hotel}} </span> </h5> </li>
            </ul>
        </div>
        <div class="Result2">
            <ul>
                <li> <h5> Tipo de habitación: <span> {{habitacion}} </span> </h5> </li>
                <li> <h5> Valor: <span> $ {{valor}} </span> </h5> </li>
                <li> <h5> Fecha ingreso: <span> {{fecha_in}} </span> </h5> </li>
                <li> <h5> Fecha salida: <span> {{fecha_out}} </span> </h5> </li>
                <li> <h5> Estado: <span> {{estado}} </span> </h5> </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "HacerReserva",
        data: function(){
            return {
                id_reserva: "",
                nombre: "",
                fecha_reserva: "",
                destino: "",
                hotel: "",
                habitacion: "",
                valor: 0,
                fecha_in: "",
                fecha_out: "",
                estado: ""
            }
        },
        methods: {
            processGetReserva: function(){
                this.id_reserva = this.id_reserva_in
                let self = this
                axios.get("https://reservas-hotel-api37.herokuapp.com/user/reserva/" + this.id_reserva)
                .then((result) => {
                    self.id_reserva = result.data.id_reserva
                    self.nombre = result.data.nombre
                    self.fecha_reserva = result.data.fecha_reserva
                    self.destino = result.data.destino
                    self.hotel = result.data.hotel
                    self.habitacion = result.data.tipo_habitacion
                    self.valor = result.data.valor
                    self.fecha_in = result.data.fecha_in
                    self.fecha_out = result.data.fecha_out
                    self.estado = result.data.estado
                })
                .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Reserva no encontrada.");
                });
            }
        }
    }
</script>

<style>
    .formulario_get_reserva{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .container_form {
        border: 3px solid #07361e;
        border-radius: 10px;
        width: 15%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .formulario_get_reserva h3{
        color: #07361e;
        text-align: center;
    }
    .formulario_get_reserva form{
        width: 80%;
    }
    .formulario_get_reserva input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #07361e;
    }
    .formulario_get_reserva button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #07361e;
        border: 2px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .formulario_get_reserva button:hover{
        color: #07361e;
        background: #E5E7E9;
        border: 2px solid #07361e;
    }
    .Result1{
        border: 3px solid #07361e;
        background-color: #a5b696;
        border-radius: 10px;
        width: 35%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .Result2{
        border: 3px solid #07361e;
        background-color: #a5b696;
        border-radius: 10px;
        width: 35%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .formulario_get_reserva h5{
        font-size: 25px;
        color: #07361e;
        justify-content: center;

    }
    .formulario_get_reserva span{
        font-size: 30px;
        color: #071636;
        text-align: center;
    }
</style>