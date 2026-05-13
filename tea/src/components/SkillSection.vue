<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    TYPES
========================= */

interface TeaItem {
  number: string;
  name: string;
  desc: string;
  image: string;
}

/* =========================
    DATA
========================= */

const teaList: TeaItem[] = [
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
    CAROUSEL STATE
========================= */

const activeIndex = ref(0);
const rotation = ref(0);
const showDetail = ref(false);

// 카드 개수
const itemCount = teaList.length;
// 각 카드 사이의 각도
const angleSlice = (360 / itemCount);

/* =========================
    COMPUTED
========================= */

// 회전 각도에 따른 스타일 계산
const getCardStyle = (index: number) => {
  // 각 카드의 기본 각도
  const baseAngle = (angleSlice * index);
  // 현재 회전값을 반영한 최종 각도
  const finalAngle = baseAngle + rotation.value;

  // 라디안으로 변환
  const rad = (finalAngle * Math.PI) / 180;

  // 3D 공간에서의 위치 계산
  const radius = 400; // 원형 배치의 반경
  const x = Math.cos(rad) * radius;
  const z = Math.sin(rad) * radius;

  // 중앙에서의 거리 (0 ~ 1)
  const distanceFromCenter = Math.abs(Math.sin(rad));

  // 카드 회전 각도 (Y축)
  const rotateY = finalAngle;

  // 스케일 (중앙: 1, 측면: 0.7)
  const scale = 0.7 + distanceFromCenter * 0.3;

  // 투명도 (중앙: 1, 측면: 0.4)
  const opacity = 0.4 + distanceFromCenter * 0.6;

  // Z-index (중앙이 가장 위)
  const zIndex = Math.round(distanceFromCenter * 1000);

  return {
    transform: `
      translateX(${x}px)
      translateZ(${z}px)
      rotateY(${rotateY}deg)
      scale(${scale})
    `,
    opacity: opacity,
    zIndex: zIndex,
  };
};

/* =========================
    METHODS
========================= */

// 마우스 휠 이벤트 처리
const handleWheel = (event: WheelEvent) => {
  event.preventDefault();
  
  // 휠 방향에 따라 회전 각도 변경
  const delta = event.deltaY > 0 ? angleSlice : -angleSlice;
  
  // GSAP를 사용한 부드러운 애니메이션
  gsap.to({ rotation: rotation.value }, {
    rotation: rotation.value + delta,
    duration: 0.8,
    ease: 'power2.out',
    onUpdate: function() {
      rotation.value = this.targets()[0].rotation;
      // 활성 카드 인덱스 업데이트
      updateActiveIndex();
    },
  });
};

// 터치 드래그 처리
let touchStartX = 0;
const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  const touchEndX = e.touches[0].clientX;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > 30) {
    const delta = diff > 0 ? angleSlice : -angleSlice;
    gsap.to({ rotation: rotation.value }, {
      rotation: rotation.value + delta,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: function() {
        rotation.value = this.targets()[0].rotation;
        updateActiveIndex();
      },
    });
    touchStartX = touchEndX;
  }
};

// 활성 카드 인덱스 업데이트
const updateActiveIndex = () => {
  // 가장 가까운 카드 인덱스 계산
  const normalizedRotation = ((rotation.value % 360) + 360) % 360;
  const closestIndex = Math.round(normalizedRotation / angleSlice) % itemCount;
  activeIndex.value = closestIndex;
};

// 키보드 네비게이션
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    handleWheel({ deltaY: -100 } as WheelEvent);
  } else if (e.key === 'ArrowRight') {
    handleWheel({ deltaY: 100 } as WheelEvent);
  }
};

// 상세 정보 닫기
const closeDetail = () => {
  showDetail.value = false;
};

/* =========================
    LIFECYCLE
========================= */

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

</script>

<template>
  <section class="skill-section">
    <div class="container">
      <!-- TITLE -->
      <div class="title-wrap">
        <span>티 컬렉션</span>
        <h2>
          다양한 차 종류를<br />
          살펴보세요
        </h2>
        <p>
          전 세계에서 엄선한 시대를 초월하는 차 컬렉션을 만나보세요.
        </p>
      </div>

      <!-- 3D CAROUSEL -->
      <div class="carousel-wrapper" @wheel.prevent="handleWheel" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
        <div class="carousel-track">
          <div
            v-for="(tea, index) in teaList"
            :key="index"
            class="carousel-card"
            :style="getCardStyle(index)"
            @click="showDetail = true; activeIndex = index"
          >
            <div class="card-image">
              <img :src="tea.image" :alt="tea.name" />
            </div>
            <div class="card-content">
              <span class="card-number">{{ tea.number }}</span>
              <h3 class="card-title">{{ tea.name }}</h3>
              <p class="card-desc">{{ tea.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 선택된 카드 상세 정보 -->
      <div v-if="showDetail" class="detail-overlay" @click="closeDetail">
        <div class="detail-content" @click.stop>
          <button class="close-btn" @click="closeDetail">✕</button>
          <img :src="teaList[activeIndex].image" :alt="teaList[activeIndex].name" />
          <h2>{{ teaList[activeIndex].name }}</h2>
          <p>{{ teaList[activeIndex].desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skill-section {
  width: 100%;
  min-height: 100vh;
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f1428 100%);
  overflow: hidden;
  position: relative;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 60px;
}

/* =========================
    TITLE
========================= */

.title-wrap {
  text-align: center;
  margin-bottom: 80px;

  span {
    display: block;
    margin-bottom: 24px;
    color: #caa96b;
    font-size: 14px;
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 110px;
    line-height: 1.1;
    font-family: "Cormorant Garamond", serif;
    color: #f5f1e8;
    margin-bottom: 40px;
    font-weight: 500;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
  }
}

/* =========================
    3D CAROUSEL
========================= */

.carousel-wrapper {
  width: 100%;
  height: 600px;
  perspective: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 60px;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-card {
  position: absolute;
  width: 280px;
  height: 420px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(202, 169, 107, 0.5);
    box-shadow: 0 8px 32px rgba(202, 169, 107, 0.2);
  }

  .card-image {
    width: 100%;
    height: 60%;
    overflow: hidden;
    background: #1a1a2e;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .card-content {
    padding: 20px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(26, 26, 46, 0.8) 0%, rgba(10, 14, 39, 0.95) 100%);

    .card-number {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 3px;
      color: #caa96b;
      text-transform: uppercase;
    }

    .card-title {
      font-size: 24px;
      font-weight: 500;
      color: #f5f1e8;
      margin: 8px 0;
      line-height: 1.2;
      font-family: "Cormorant Garamond", serif;
    }

    .card-desc {
      font-size: 12px;
      color: rgba(245, 241, 232, 0.6);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

/* =========================
    DETAIL OVERLAY
========================= */

.detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  .detail-content {
    background: linear-gradient(135deg, #1a1a3e 0%, #0f1428 100%);
    border: 1px solid rgba(202, 169, 107, 0.3);
    border-radius: 16px;
    padding: 40px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.4s ease;

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      color: #f5f1e8;
      font-size: 28px;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #caa96b;
      }
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 32px;
      color: #f5f1e8;
      margin-bottom: 16px;
      font-weight: 500;
      font-family: "Cormorant Garamond", serif;
    }

    p {
      font-size: 16px;
      color: rgba(245, 241, 232, 0.8);
      line-height: 1.8;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* =========================
    RESPONSIVE
========================= */

@media (max-width: 1200px) {
  .carousel-wrapper {
    height: 500px;
  }

  .carousel-card {
    width: 240px;
    height: 360px;
  }
}

@media (max-width: 800px) {
  .container {
    padding: 0 24px;
  }

  .title-wrap {
    margin-bottom: 60px;

    h2 {
      font-size: 58px;
    }

    p {
      font-size: 16px;
    }
  }

  .carousel-wrapper {
    height: 400px;
  }

  .carousel-card {
    width: 200px;
    height: 300px;

    .card-content {
      padding: 15px;

      .card-title {
        font-size: 18px;
      }

      .card-desc {
        font-size: 11px;
      }
    }
  }

  .detail-overlay .detail-content {
    padding: 30px 20px;
    max-width: 90%;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
}

@media (max-width: 480px) {
  .skill-section {
    padding: 80px 0;
  }

  .title-wrap {
    margin-bottom: 40px;

    h2 {
      font-size: 36px;
    }

    span {
      font-size: 12px;
    }
  }

  .carousel-wrapper {
    height: 350px;
  }

  .carousel-card {
    width: 160px;
    height: 240px;

    .card-content {
      padding: 12px;

      .card-title {
        font-size: 16px;
      }

      .card-desc {
        font-size: 10px;
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>