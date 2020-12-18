
<template>
  <div id="app">
    <div class="header">
        <nav>
          <button v-on:click="principal"> Inicio </button>
          <button> Login </button>
          <button> Registrarse </button>
          <button v-on:click="get_reserva" v-if="is_auth"> Consultar reserva </button>
          <button> Hacer reserva </button>
          <button> Cancelar reserva </button>
        </nav>
        <h1> RESERVAS DE HOTEL APP </h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h4> G1M3 SPRINT3 MISIONTIC 2022 </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function (){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    principal: function(){
      if(this.$route.name != "principal"){
        this.$router.push({name: "principal"})
      }
    },
    get_reserva: function(){
      if(this.$route.name != "consultar_reserva"){
        this.$router.push({name: "consultar_reserva"})
      }
    },
    form_make_reserva: function(){
      if(this.$route.name != "formulario_make_reserva"){
        this.$router.push({name: "formulario_make_reserva"})
      }
    }
  },
  beforeCreate: function(){ 
    localStorage.setItem('default_reserva', '3')
    localStorage.setItem('isAuth', true)
    this.$router.push({name: "inicio"})
  }
}
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #a5b696 ;
    color:#07361e ;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header h1{
    width: 35%;
    text-align: center;
    font-size: 35px;
  }
  .header nav {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #07361e;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 5px 10px;
  }
  .header nav button:hover{
    color: #07361e;
    background: #E5E7E9;
    border: 1px solid #07361e;
  }
  .main-component{
    height: 90vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    background-color: #a5b696 ;
    color: #07361e;
  }
  .footer h4{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
