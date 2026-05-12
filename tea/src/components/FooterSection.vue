<script setup>

const scrollTop = () => {

  window.scrollTo({
    top:0,
    behavior:"smooth",
  });

};

</script>

<template>

  <footer class="footer">

    <div class="container">

      <!-- TOP -->
      <div class="footer-top">

        <!-- LEFT -->
        <div class="left">

          <!-- LOGO -->
          <div class="logo">

            <img
              src="@/assets/imgs/f_logo.png"
              alt="logo"
            >

          </div>

          <!-- DESC -->
          <p class="desc">
            Timeless Tea Culture,
            Experience The Art Of Tea.
          </p>

        </div>


        <!-- RIGHT -->
        <div class="right">

          <ul>

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

        </div>

      </div>


      <!-- BOTTOM -->
      <div class="footer-bottom">

        <p>
          © 2026 Maison de Thé. All Rights Reserved.
        </p>

        <button @click="scrollTop">
          BACK TO TOP
        </button>

      </div>

    </div>

  </footer>

</template>

<style lang="scss" scoped>

.footer{
  width:100%;

  padding:120px 0 40px;

  background:#021510;

  border-top:1px solid rgba(194,168,120,.08);

  .container{
    width:100%;
    max-width:1600px;

    padding:0 60px;
    margin:0 auto;
  }

}


/* =========================
    TOP
========================= */

.footer-top{
  width:100%;

  display:flex;
  justify-content:space-between;
  align-items:flex-start;

  padding-bottom:80px;

  border-bottom:1px solid rgba(255,255,255,.06);
}


/* LEFT */

.left{

  .logo{
    width:180px;

    margin-bottom:24px;

    img{
      width:100%;
      display:block;
      object-fit:contain;
    }
  }

  .desc{
    font-size:15px;
    line-height:1.8;

    letter-spacing:1px;

    color:rgba(255,255,255,.65);
  }

}


/* RIGHT */

.right{

  ul{
    display:flex;
    flex-direction:column;

    gap:20px;

    li{

      a{
        position:relative;

        font-size:15px;
        letter-spacing:2px;

        color:rgba(255,255,255,.82);

        transition:.4s;

        &::after{
          content:"";

          width:0%;
          height:1px;

          position:absolute;
          left:0;
          bottom:-6px;

          background:#d8bc8c;

          transition:.4s;
        }

        &:hover{
          color:#d8bc8c;
        }

        &:hover::after{
          width:100%;
        }

      }

    }

  }

}


/* =========================
    BOTTOM
========================= */

.footer-bottom{
  width:100%;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding-top:40px;

  p{
    font-size:13px;
    letter-spacing:1px;

    color:rgba(255,255,255,.45);
  }

  button{
    background:none;
    border:none;

    cursor:pointer;

    font-size:14px;
    letter-spacing:2px;

    color:#d8bc8c;

    transition:.4s;

    &:hover{
      opacity:.6;
    }

  }

}


/* =========================
    RESPONSIVE
========================= */

@media (max-width:900px){

  .footer{

    padding:80px 0 30px;

    .container{
      padding:0 24px;
    }

  }

  .footer-top{
    flex-direction:column;

    gap:50px;

    padding-bottom:50px;
  }

  .footer-bottom{
    flex-direction:column;

    align-items:flex-start;

    gap:20px;
  }

}

</style>