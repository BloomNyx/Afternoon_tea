<script setup>

import { onMounted } from "vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* =========================
    IMAGE IMPORT
========================= */

import greenTea from "@/assets/imgs/tea/green.jpg";
import blackTea from "@/assets/imgs/tea/black.jpg";
import oolongTea from "@/assets/imgs/tea/oolong.jpg";
import whiteTea from "@/assets/imgs/tea/white.jpg";
import puerTea from "@/assets/imgs/tea/puer.jpg";


/* =========================
    DATA
========================= */

const teaList = [

  {
    number: "01",
    name: "녹차",
    desc: "신선하고 섬세한 맛과 우아한 풀 향이 어우러진 차입니다.",
    image: greenTea,
  },

  {
    number: "02",
    name: "홍차",
    desc: "깊고 진한 풍미와 묵직한 향이 특징인 전통 차입니다.",
    image: blackTea,
  },

  {
    number: "03",
    name: "우롱차",
    desc: "녹차와 홍차의 매력을 동시에 느낄 수 있는 차입니다.",
    image: oolongTea,
  },

  {
    number: "04",
    name: "백차",
    desc: "부드럽고 은은한 향이 특징인 고급 수제 차입니다.",
    image: whiteTea,
  },

  {
    number: "05",
    name: "보이차",
    desc: "오랜 숙성에서 나오는 깊고 흙내음 가득한 차입니다.",
    image: puerTea,
  },

];


/* =========================
    GSAP
========================= */

onMounted(() => {

  gsap.from(".tea-card", {

    y: 120,
    opacity: 0,

    duration: 1.2,

    stagger: 0.2,

    ease: "power4.out",

    scrollTrigger: {
      trigger: ".tea-wrap",
      start: "top 80%",
    }

  });

});

</script>


<template>

<section class="skill-section">

  <div class="container">

    <!-- TITLE -->
    <div class="title-wrap">

      <span>티 컬렉션</span>

      <h2>
        다양한 차 종류를
        살펴보세요
      </h2>

      <p>
        전 세계에서 엄선한 시대를 초월하는 차 컬렉션을 만나보세요.
      </p>

    </div>


    <!-- CARD -->
    <div class="tea-wrap">

      <div
        class="tea-card"
        v-for="tea in teaList"
        :key="tea.number"
      >

        <div class="img-wrap">

          <img
            :src="tea.image"
            :alt="tea.name"
          >

        </div>


        <div class="text-wrap">

          <span class="number">
            {{ tea.number }}
          </span>

          <h3>
            {{ tea.name }}
          </h3>

          <p>
            {{ tea.desc }}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</template>


<style lang="scss" scoped>

.skill-section{
  width:100%;

  padding:220px 0;

  background:#021510;

  overflow:hidden;
}


.container{
  width:100%;
  max-width:1600px;

  margin:0 auto;
  padding:0 60px;
}


/* =========================
    TITLE
========================= */

.title-wrap{
  text-align:center;

  margin-bottom:120px;

  span{
    display:block;

    margin-bottom:24px;

    color:#caa96b;

    font-size:14px;
    letter-spacing:8px;
  }

  h2{
    font-size:110px;
    line-height:1.1;

    font-family:"Cormorant Garamond";

    color:#f5f1e8;

    margin-bottom:40px;
  }

  p{
    color:rgba(255,255,255,.6);

    font-size:18px;
  }

}


/* =========================
    GRID
========================= */

.tea-wrap{
  display:grid;

  grid-template-columns:
  repeat(3, 1fr);

  gap:40px;
}


/* =========================
    CARD
========================= */

.tea-card{
  overflow:hidden;

  border:1px solid rgba(255,255,255,.08);

  background:rgba(255,255,255,.03);

  transition:.5s;

  &:hover{
    transform:translateY(-12px);

    border-color:#caa96b;
  }

}


.img-wrap{
  width:100%;
  height:500px;

  overflow:hidden;

  img{
    width:100%;
    height:100%;

    object-fit:cover;

    transition:1s;
  }

  &:hover img{
    transform:scale(1.08);
  }

}


.text-wrap{
  padding:40px;

  .number{
    display:block;

    margin-bottom:20px;

    color:#caa96b;

    font-size:12px;
    letter-spacing:5px;
  }

  h3{
    margin-bottom:24px;

    font-size:54px;

    font-family:"Cormorant Garamond";

    color:#f5f1e8;
  }

  p{
    color:rgba(255,255,255,.65);

    line-height:1.8;
  }

}


/* =========================
    RESPONSIVE
========================= */

@media(max-width:1200px){

  .tea-wrap{
    grid-template-columns:1fr 1fr;
  }

}


@media(max-width:800px){

  .container{
    padding:0 24px;
  }

  .title-wrap{

    h2{
      font-size:58px;
    }

  }

  .tea-wrap{
    grid-template-columns:1fr;
  }

}

</style>