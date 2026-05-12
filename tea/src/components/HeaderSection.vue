<template>

  <header class="header">

    <div class="container">

      <!-- LOGO -->
      <div class="logo">

        <img
          src="@/assets/imgs/logo.png"
          alt="tea logo"
        >

      </div>

      <!-- NAV -->
      <nav class="nav">

        <ul>

          <li>
            <a href="#">
              HOME
            </a>
          </li>

          <li>
            <a href="#">
              TEA ENCYCLOPEDIA
            </a>
          </li>

          <li>
            <a href="#">
              TEA RECIPE
            </a>
          </li>

          <li>
            <a href="#">
              TEA JOURNAL
            </a>
          </li>

          <li>
            <a href="#">
              CLASS
            </a>
          </li>

          <li>
            <a href="#">
              SHOP
            </a>
          </li>

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
  height:100px;

  position:fixed;
  top:0;
  left:0;
  z-index:999;

  backdrop-filter: blur(10px);

  background:rgba(5, 12, 10, .45);

  border-bottom:1px solid rgba(255,255,255,.06);

  .container{
    width:100%;
    max-width:1600px;
    height:100%;

    padding:0 80px;
    margin:0 auto;

    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .logo{
    width:72px;

    img{
      width:100%;
      object-fit:contain;
    }
  }

  .nav{

    ul{
      display:flex;
      align-items:center;
      gap:60px;

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
    height:80px;

    .nav{
      display:none;
    }

    .logo{
      width:60px;
    }

  }

}

</style>