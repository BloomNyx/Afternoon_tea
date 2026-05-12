<template>

  <header class="header">

    <div class="container">

      <!-- LOGO -->
      <h1 class="logo">

        <a href="#">

          <img
            src="@/assets/imgs/logo.png"
            alt="logo"
          >

        </a>

      </h1>

      <!-- NAV -->
      <nav class="nav">

        <ul>

          <li><a href="#">HOME</a></li>
          <li><a href="#">TEA ENCYCLOPEDIA</a></li>
          <li><a href="#">TEA RECIPE</a></li>
          <li><a href="#">TEA JOURNAL</a></li>
          <li><a href="#">CLASS</a></li>
          <li><a href="#">SHOP</a></li>

        </ul>

      </nav>

    </div>

  </header>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.header{
  width:100%;
  height:120px;

  position:fixed;
  top:0;
  left:0;
  z-index:9999;

  background:#021510;

  border-bottom:1px solid rgba(194,168,120,.08);

  .container{
    width:100%;
    max-width:1600px;
    height:100%;

    padding:0 60px;
    margin:0 auto;

    display:flex;
    justify-content:space-between;
    align-items:center;
  }


  /* =========================
      LOGO
  ========================= */

  .logo{
    width:180px;

    a{
      display:block;
      width:100%;
    }

    img{
      width:100%;
      display:block;
      object-fit:contain;
    }
  }


  /* =========================
      NAV
  ========================= */

  .nav{

    ul{
      display:flex;
      align-items:center;
      gap:56px;

      li{

        a{
          position:relative;

          font-family:"Pretendard";
          font-size:15px;
          font-weight:500;

          letter-spacing:2px;

          color:rgba(255,255,255,.82);

          transition:.4s;

          &::after{
            content:"";

            width:0%;
            height:1px;

            position:absolute;
            left:0;
            bottom:-8px;

            background:#c2a878;

            transition:.4s;
          }

          &:hover{
            color:#c2a878;
          }

          &:hover::after{
            width:100%;
          }

        }

      }

    }

  }

}


/* =========================
    RESPONSIVE
========================= */

@media (max-width:1200px){

  .header{

    .container{
      padding:0 40px;
    }

    .logo{
      width:140px;
    }

    .nav{

      ul{
        gap:32px;

        li{

          a{
            font-size:13px;
          }

        }

      }

    }

  }

}


@media (max-width:900px){

  .header{
    height:90px;

    .nav{
      display:none;
    }

    .logo{
      width:120px;
    }

  }

}

</style>