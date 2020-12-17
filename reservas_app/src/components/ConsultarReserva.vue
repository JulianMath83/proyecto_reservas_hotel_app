<template>
    <div id="consultarReserva">
        <div>
            <h5> Id Reserva: <span> {{id_reserva}} </span> </h5>
            <h5> Nombre: <span> {{nombre}} </span> </h5>
            <h5> Fecha reserva: <span> {{fecha_reserva}} </span> </h5>
            <h5> Destino: <span> {{destino}} </span> </h5>
            <h5> Hotel: <span> {{hotel}} </span> </h5>
            <h5> Tipo de habitación: <span> {{habitacion}} </span> </h5>
            <h5> Valor: <span> {{valor}} </span> </h5>
            <h5> Fecha ingreso: <span> {{fecha_in}} </span> </h5>
            <h5> Fecha salida: <span> {{fecha_out}} </span> </h5>
            <h5> Estado: <span> {{estado}} </span> </h5>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'ConsultarReserva',
        data: function (){
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
        created: function () {
            this.reserva_default = this.$route.params.reserva_default 
            let self = this
            axios.get("https://reservas-hotel-api37.herokuapp.com/user/reserva/" + this.reserva_default)
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
                alert("ERROR Servidor");
            });
        }
    }
</script>

<style>
    #consultarReserva{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
    }
    #consultarReserva h5{ 
        font-size: 20px; 
        color: #283747;
    }

    #consultarReserva span{ 
        color: crimson; 
        font-weight: bold;
    }
</style>