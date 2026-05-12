<script setup>

import { onMounted } from "vue";

import gsap from "gsap";

onMounted(() => {

  const tl = gsap.timeline();

  tl

  .from(
    ".logo-wrap",
    {
      opacity:0,
      y:80,
      duration:1.2,
      ease:"power4.out",
    }
  )

  .from(
    ".sub",
    {
      opacity:0,
      y:40,
      duration:.8,
      ease:"power3.out",
    },
    "-=.6"
  )

  .from(
    ".title-wrap h1",
    {
      opacity:0,
      y:60,
      duration:1,
      ease:"power4.out",
    },
    "-=.4"
  )

  .from(
    ".title-wrap p",
    {
      opacity:0,
      y:40,
      duration:.8,
      ease:"power3.out",
    },
    "-=.6"
  )

  .from(
    ".btn-wrap",
    {
      opacity:0,
      y:40,
      duration:.8,
      ease:"power3.out",
    },
    "-=.5"
  )

  .from(
    ".scroll",
    {
      opacity:0,
      duration:1,
    },
    "-=.2"
  );

});

</script>

<template>

  <section class="intro-section">

    <!-- BG -->
    <div class="bg"></div>

    <!-- GLOW -->
    <div class="glow glow01"></div>
    <div class="glow glow02"></div>

    <!-- CONTENT -->
    <div class="container">

      <!-- LOGO -->
      <div class="logo-wrap">

        <img
          src="@/assets/imgs/logo.png"
          alt="logo"
        >

      </div>

      <!-- TITLE -->
      <div class="title-wrap">

        <span class="sub">
          TIMELESS TEA CULTURE
        </span>

        <h1>
          Experience
          <br>
          The Art Of Tea
        </h1>

        <p>
          Discover tea recipes, tea journals,
          tea encyclopedia and elegant tea culture.
        </p>

      </div>

      <!-- BUTTON -->
      <div class="btn-wrap">

        <a href="#">
          Explore Tea
        </a>

      </div>

    </div>

    <!-- SCROLL -->
    <div class="scroll">

      <span>
        SCROLL
      </span>

      <div class="line"></div>

    </div>

  </section>

</template>

<style lang="scss" scoped>

.intro-section{
  width:100%;
  height:100vh;

  position:relative;

  overflow:hidden;

  background:#021510;
}


/* =========================
    BG
========================= */

.bg{
  width:100%;
  height:100%;

  position:absolute;
  inset:0;

  background:
  radial-gradient(
    circle at center,
    rgba(216,188,140,.08),
    transparent 40%
  );

  opacity:.9;
}


/* =========================
    GLOW
========================= */

.glow{
  position:absolute;

  border-radius:50%;

  filter:blur(120px);
}

.glow01{
  width:400px;
  height:400px;

  top:-100px;
  left:-100px;

  background:rgba(216,188,140,.08);
}

.glow02{
  width:500px;
  height:500px;

  right:-200px;
  bottom:-200px;

  background:rgba(216,188,140,.05);
}


/* =========================
    CONTAINER
========================= */

.container{
  width:100%;
  max-width:1600px;
  height:100%;

  margin:0 auto;
  padding:140px 60px 80px;

  position:relative;
  z-index:10;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  text-align:center;
}


/* =========================
    LOGO
========================= */

.logo-wrap{
  width:240px;

  margin-bottom:50px;

  img{
    width:100%;
    display:block;

    object-fit:contain;
  }
}


/* =========================
    TITLE
========================= */

.title-wrap{

  .sub{
    display:block;

    margin-bottom:20px;

    font-size:14px;
    letter-spacing:6px;

    color:#d8bc8c;
  }

  h1{
    font-family:"Cormorant Garamond", serif;

    font-size:110px;
    line-height:1;

    font-weight:500;

    letter-spacing:2px;

    color:#f4efe6;

    margin-bottom:32px;
  }

  p{
    max-width:700px;

    margin:0 auto;

    font-size:18px;
    line-height:1.8;

    letter-spacing:1px;

    color:rgba(255,255,255,.68);
  }

}


/* =========================
    BUTTON
========================= */

.btn-wrap{
  margin-top:60px;

  a{
    width:220px;
    height:64px;

    display:flex;
    justify-content:center;
    align-items:center;

    border:1px solid rgba(216,188,140,.3);

    background:rgba(255,255,255,.02);

    backdrop-filter:blur(10px);

    font-size:15px;
    letter-spacing:3px;

    color:#d8bc8c;

    transition:.4s;

    &:hover{
      background:#d8bc8c;
      color:#021510;
    }

  }

}


/* =========================
    SCROLL
========================= */

.scroll{
  position:absolute;

  left:50%;
  bottom:40px;

  transform:translateX(-50%);

  z-index:20;

  display:flex;
  flex-direction:column;
  align-items:center;

  gap:14px;

  span{
    font-size:12px;
    letter-spacing:4px;

    color:rgba(255,255,255,.5);
  }

  .line{
    width:1px;
    height:70px;

    background:rgba(216,188,140,.4);

    animation:scrollLine 1.6s infinite;
  }

}


@keyframes scrollLine{

  0%{
    transform:scaleY(0);
    transform-origin:top;
  }

  50%{
    transform:scaleY(1);
    transform-origin:top;
  }

  51%{
    transform-origin:bottom;
  }

  100%{
    transform:scaleY(0);
    transform-origin:bottom;
  }

}



/* =========================
    RESPONSIVE
========================= */

@media (max-width:900px){

  .container{
    padding:120px 24px 60px;
  }

  .logo-wrap{
    width:160px;

    margin-bottom:40px;
  }

  .title-wrap{

    h1{
      font-size:58px;
    }

    p{
      font-size:15px;
    }

  }

  .btn-wrap{

    a{
      width:180px;
      height:56px;

      font-size:13px;
    }

  }

}

</style>