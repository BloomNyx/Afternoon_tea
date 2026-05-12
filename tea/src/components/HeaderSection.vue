<script setup>

import { ref, onMounted, onUnmounted } from "vue";
import Lenis from "lenis";

const isScroll = ref(false);

let lenis = null;


/* =========================
    TOP SCROLL
========================= */

const scrollTop = () => {

  window.scrollTo({
    top:0,
    behavior:"smooth",
  });

};


/* =========================
    SCROLL EVENT
========================= */

const scrollEvent = ({ scroll }) => {

  if(scroll > 50){

    isScroll.value = true;

  } else{

    isScroll.value = false;

  }

};


onMounted(() => {

  /* =========================
      LENIS
  ========================= */

  lenis = new Lenis({
    duration:1.2,
    smoothWheel:true,
  });

  function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

  }

  requestAnimationFrame(raf);


  /* =========================
      SCROLL LISTENER
  ========================= */

  lenis.on("scroll", scrollEvent);

});


onUnmounted(() => {

  if(lenis){
    lenis.destroy();
  }

});

</script>


<template>

  <header
    class="header"
    :class="{ active : isScroll }"
  >

    <div class="container">

      <!-- LOGO -->
      <h1 class="logo">

        <button @click="scrollTop">

          <img
            src="@/assets/imgs/logo.png"
            alt="logo"
          >

        </button>

      </h1>


      <!-- NAV -->
      <nav class="nav">

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

      </nav>

    </div>

  </header>

</template>


<style lang="scss" scoped>

.header{
  width:100%;
  height:120px;

  position:fixed;
  top:0;
  left:0;
  z-index:9999;

  background:#021510;

  transition:
  background .5s ease,
  backdrop-filter .5s ease,
  transform .5s ease;

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

}


/* =========================
    ACTIVE
========================= */

.header.active{

  background:rgba(2,21,16,.28);

  backdrop-filter:blur(16px);

  border-bottom:1px solid rgba(255,255,255,.05);

  transform:translateY(-6px);

}


/* =========================
    LOGO
========================= */

.logo{
  width:180px;

  button{
    width:100%;

    background:none;
    border:none;

    cursor:pointer;
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

        font-size:15px;
        font-weight:500;

        letter-spacing:2px;

        color:rgba(255,255,255,.85);

        transition:.4s;

        &::after{
          content:"";

          width:0%;
          height:1px;

          position:absolute;
          left:0;
          bottom:-8px;

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