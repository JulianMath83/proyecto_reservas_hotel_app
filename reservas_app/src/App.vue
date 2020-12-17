<template>
  <div id="app">
    <div class="header">
        <nav>
          <button> Inicio </button>
          <button> Login </button>
          <button> Registrarse </button>
          <button> Consultar reserva </button>
          <button> Hacer reserva </button>
          <button> Cancelar reserva </button>
        </nav>
        <h1> RESERVAS DE HOTEL APP </h1>
    </div>
    <div class="main-component">
      
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

    }
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
    height: 71vh;
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
