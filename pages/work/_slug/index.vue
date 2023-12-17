<template>
  <div>
    <div v-if="isZoom !== false" class="zoom-image" v-on:click="isZoom = false">
      <img :src="obra[isZoom].img" />

      <div class="detail">
        <p class="detail-title">{{ obra[isZoom].name }}</p>
        <p class="detail-tech">{{ obra[isZoom].tech }}</p>
      </div>
    </div>
    <div
      v-bind:class="{ 'page-container': true, 'is-hover': isHover }"
      id="art-list"
    >
      <span
        :key="index"
        v-for="(item, index) in obra"
        v-bind:class="getRandomClass(index)"
        on
      >
        <div class="interactive-area">
          <img
            style="cursor: pointer"
            v-on:click="isZoom = index"
            @mouseleave="mouseLeave(index)"
            @mouseover="mouseEnter(index)"
            :src="item.img"
            class="l-pic"
          />
          <div class="work-title">
            <div class="glitch" :data-text="item.name">{{ item.name }}</div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import config from "../../../config";
import { shuffleArray } from "../../../utils";
import { SectionTitle, Parraph, ImageComponent } from "../../../components";
import { mapState } from "vuex";
import { widhtHead } from "../../../utils/head";

export default {
  async fetch({ store, route }) {
    const {
      params: { slug },
    } = route;
    const fetch = {
      art: "fetchObras",
      ilustraciones: "fetchIlustraciones",
    };
    await store.dispatch({ type: fetch[slug] });
  },

  components: {
    SectionTitle,
    ImageComponent,
  },

  data() {
    return { isZoom: false, imageList: [] };
  },

  computed: mapState({
    isZoom: 1,
    obra: function({ items }) {
      const {
        params: { slug },
        query,
      } = this.$route;

      let it = items.filter(({ tags }) =>
        query.type ? tags.indexOf(query.type) !== -1 : true
      );

      it = it.reduce((acc, current) => {
        current.images.forEach((img) => {
          console.log(img);
          acc.push({
            img: img.imagen.url,
            link: current.link,
            name: img?.titulo1[0]?.text || img?.titulo2[0]?.text,
            tech: img?.tecnica[0]?.text,
          });
        });
        return acc;
      }, []);
      return shuffleArray(it);
    },
  }),

  methods: {
    is2Cols: function() {
      if (process.browser) {
        return document.location.search === "";
      }
    },
    getRandomClass(index) {
      return `col--${Math.ceil(
        Math.random() * 5
      )} item-img item-index-${index}`;
    },
    getTransform() {
      return `translate(${-20 + Math.random() * 40}vw,${-20 +
        Math.random() * 40}vw)`;
    },
    mouseEnter(indexItem) {
      document.querySelectorAll(".interactive-area").forEach((item, index) => {
        if (indexItem !== index) {
          item.querySelector("img").style.opacity = 0.1;
          item.style.background = "white";
        }
      });
    },

    mouseLeave() {
      document.querySelector(".page-container").style.background =
        "transparent";
      document.querySelectorAll(".interactive-area").forEach((item, index) => {
        item.querySelector("img").style.opacity = 1;
      });
    },

    onClick(index) {
      console.log(index);
    },
  },
};
</script>

<style>
.foot-title {
  margin-top: 20px;
  font-size: 18px;
  margin-top: 5px;
  color: gray;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.description {
  margin-bottom: 50px;
  line-height: 30px;
}

#art-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.is-hover #art-list span {
  opacity: 0.2;
}

#art-list span {
  display: flex;
  width: 33.33%;
  box-sizing: border-box;
  padding: 2vw;
  vertical-align: top;
  justify-content: center;
  align-items: center;
}

#art-list img {
  width: 100%;

  box-sizing: border-box;
}

#art-list .col--1 {
  width: 33%;
  padding: 5vw;
}

#art-list .col--2 {
  width: 50%;
  padding: 6vw;
}

#art-list .col--3 {
  width: 25%;
  padding: 5vw;
}

#art-list .col--4 {
  width: 20%;
  padding: 3vw;
}

#art-list .col--5 {
  width: 33.33%;
  padding: 5vw;
}

.work-title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-decoration: none;
  opacity: 0;
  font-size: 3vw;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  pointer-events: none;
  transition: all 0.22s;
  line-height: 3vw;
  text-align: center;
  background: blue;
  color: white;
}
.interactive-area {
  line-height: 0;
}

.interactive-area:hover .work-title {
  opacity: 1;
}

.page-container {
}

.zoom-image {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 99999;
  justify-content: center;
  align-items: center;
  cursor: crosshair;
}

.zoom-image img {
  object-fit: contain;
  height: 100vh;
}

.zoom-image .detail {
  position: fixed;
  bottom: 10px;
  left: 10px;
  color: black;
}
.zoom-image .detail p {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

.zoom-image .detail p.detail-tech {
  font-family: "RoslindaleVariable";

  font-size: 13px;
}

.glitch {
  position: relative;
  /* Animation provies a slight random skew. Check bottom of doc
  for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  /* Creates an initial clip for our glitch. This works in
  a typical top,right,bottom,left fashion and creates a mask
  to only show a certain part of the glitch at a time. */
  clip: rect(44px, 450px, 56px, 0);
  /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
  with an alternating animation to keep things fresh. */
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

/* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  0% {
    clip: rect(60px, 9999px, 20px, 0);
    transform: skew(0.36deg);
  }
  5% {
    clip: rect(26px, 9999px, 39px, 0);
    transform: skew(0.65deg);
  }
  10% {
    clip: rect(31px, 9999px, 51px, 0);
    transform: skew(0.38deg);
  }
  15% {
    clip: rect(94px, 9999px, 83px, 0);
    transform: skew(0.21deg);
  }
  20% {
    clip: rect(43px, 9999px, 69px, 0);
    transform: skew(0.75deg);
  }
  25% {
    clip: rect(76px, 9999px, 55px, 0);
    transform: skew(0.91deg);
  }
  30% {
    clip: rect(14px, 9999px, 90px, 0);
    transform: skew(0.65deg);
  }
  35% {
    clip: rect(71px, 9999px, 17px, 0);
    transform: skew(0.49deg);
  }
  40% {
    clip: rect(75px, 9999px, 58px, 0);
    transform: skew(0.17deg);
  }
  45% {
    clip: rect(63px, 9999px, 18px, 0);
    transform: skew(0.19deg);
  }
  50% {
    clip: rect(99px, 9999px, 44px, 0);
    transform: skew(0.73deg);
  }
  55% {
    clip: rect(21px, 9999px, 25px, 0);
    transform: skew(0.3deg);
  }
  60% {
    clip: rect(80px, 9999px, 68px, 0);
    transform: skew(0.01deg);
  }
  65% {
    clip: rect(63px, 9999px, 4px, 0);
    transform: skew(0.76deg);
  }
  70% {
    clip: rect(75px, 9999px, 52px, 0);
    transform: skew(0.63deg);
  }
  75% {
    clip: rect(14px, 9999px, 85px, 0);
    transform: skew(0.18deg);
  }
  80% {
    clip: rect(87px, 9999px, 7px, 0);
    transform: skew(0.78deg);
  }
  85% {
    clip: rect(58px, 9999px, 5px, 0);
    transform: skew(0.1deg);
  }
  90% {
    clip: rect(4px, 9999px, 73px, 0);
    transform: skew(0.81deg);
  }
  95% {
    clip: rect(64px, 9999px, 17px, 0);
    transform: skew(0.72deg);
  }
  100% {
    clip: rect(59px, 9999px, 91px, 0);
    transform: skew(0.04deg);
  }
}
@keyframes glitch-anim2 {
  0% {
    clip: rect(34px, 9999px, 94px, 0);
    transform: skew(0.66deg);
  }
  5% {
    clip: rect(87px, 9999px, 16px, 0);
    transform: skew(0.48deg);
  }
  10% {
    clip: rect(66px, 9999px, 33px, 0);
    transform: skew(0.61deg);
  }
  15% {
    clip: rect(3px, 9999px, 65px, 0);
    transform: skew(0.46deg);
  }
  20% {
    clip: rect(38px, 9999px, 32px, 0);
    transform: skew(0.39deg);
  }
  25% {
    clip: rect(56px, 9999px, 70px, 0);
    transform: skew(0.3deg);
  }
  30% {
    clip: rect(56px, 9999px, 62px, 0);
    transform: skew(0.73deg);
  }
  35% {
    clip: rect(57px, 9999px, 32px, 0);
    transform: skew(0.69deg);
  }
  40% {
    clip: rect(99px, 9999px, 15px, 0);
    transform: skew(0.58deg);
  }
  45% {
    clip: rect(78px, 9999px, 90px, 0);
    transform: skew(0.53deg);
  }
  50% {
    clip: rect(20px, 9999px, 79px, 0);
    transform: skew(0.39deg);
  }
  55% {
    clip: rect(14px, 9999px, 91px, 0);
    transform: skew(0.07deg);
  }
  60% {
    clip: rect(72px, 9999px, 96px, 0);
    transform: skew(0.77deg);
  }
  65% {
    clip: rect(65px, 9999px, 85px, 0);
    transform: skew(0.23deg);
  }
  70% {
    clip: rect(52px, 9999px, 76px, 0);
    transform: skew(0.23deg);
  }
  75% {
    clip: rect(67px, 9999px, 6px, 0);
    transform: skew(0.43deg);
  }
  80% {
    clip: rect(70px, 9999px, 80px, 0);
    transform: skew(0.9deg);
  }
  85% {
    clip: rect(96px, 9999px, 31px, 0);
    transform: skew(0.59deg);
  }
  90% {
    clip: rect(43px, 9999px, 26px, 0);
    transform: skew(1deg);
  }
  95% {
    clip: rect(41px, 9999px, 11px, 0);
    transform: skew(0.03deg);
  }
  100% {
    clip: rect(17px, 9999px, 21px, 0);
    transform: skew(0.14deg);
  }
}
@keyframes glitch-skew {
  0% {
    transform: skew(-2deg);
  }
  10% {
    transform: skew(-3deg);
  }
  20% {
    transform: skew(-4deg);
  }
  30% {
    transform: skew(2deg);
  }
  40% {
    transform: skew(3deg);
  }
  50% {
    transform: skew(4deg);
  }
  60% {
    transform: skew(-1deg);
  }
  70% {
    transform: skew(-1deg);
  }
  80% {
    transform: skew(1deg);
  }
  90% {
    transform: skew(-2deg);
  }
  100% {
    transform: skew(-4deg);
  }
}

@media (max-width: 640px) {
  #art-list .col--1,
  #art-list .col--2,
  #art-list .col--3,
  #art-list .col--4,
  #art-list .col--5,
  #art-list .col--6 {
    width: 90%;
  }

  .zoom-image img {
    width: 100vw;
  }
}
</style>
