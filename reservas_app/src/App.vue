
<template>
  <div id="app">
    <div class="header">
        <nav>
          <button v-on:click="principal"> Inicio </button>
          <button v-on:click="logIn2" v-if="not_is_auth"> Login </button>
          <button v-on:click="registrar_usuario" v-if="not_is_auth"> Registrarse </button>
          <button v-on:click="get_reserva" v-if="is_auth"> Consultar reserva </button>
          <button v-on:click="make_reserva" v-if="is_auth"> Hacer reserva </button>
          <button v-on:click="cancel_reserva" v-if="is_auth"> Cancelar reserva </button>
          <button v-on:click="logOut" v-if="is_auth"> Cerrar sesión </button>
        </nav>
        <h1> RESERVAS DE HOTEL APP </h1>
    </div>
    <div class="main-component">
      <router-view v-on:log-in="logIn"> </router-view>
    </div>
    <div class="footer">
      <h4> G1M3 MISIONTIC 2022 </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function (){
    return {
      is_auth: false,
      not_is_auth: true,
      username: "",
      password: ""
    }
  },
  methods: {
    principal: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
      }
    },
    updateAuth: function(){
        let self = this
        if(self.is_auth == false)
          self.$router.push({name: "login_usuario"})
        else{
          self.$router.push({name: "inicio"})
        }
    },
    logIn2: function(){
      if(this.$route.name != "login_usuario"){
        this.$router.push({name: "login_usuario"})
      }
    },
    logIn: function(){
      this.is_auth = !this.is_auth
      this.not_is_auth = !this.not_is_auth
      this.updateAuth()
    },
    logOut: function(){
      this.is_auth = !this.is_auth
      this.not_is_auth = !this.not_is_auth
      this.updateAuth()
    },
    get_reserva: function(){
      if(this.$route.name != "consultar_reserva"){
        this.$router.push({name: "consultar_reserva"})
      }
    },
    make_reserva: function(){
      if(this.$route.name != "hacer_reserva"){
        this.$router.push({name: "hacer_reserva"})
      }
    },
    cancel_reserva: function () {
      if(this.$route.name != "cancelar_reserva"){
        this.$router.push({name: "cancelar_reserva"})
      }
    },
    registrar_usuario: function(){
      if(this.$route.name != "registro_user"){
        this.$router.push({name: "registro_user"})
      }
    }
  },
  beforeCreate: function(){
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
    background-color: #a5b696;
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
    background:#FDFEFE;
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
