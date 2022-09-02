<template>
  <!-- MAIN INTRO -->
  <main class="container-fluid my-5 px-5">
      <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-4">
            <div class="main-title">
              <h1 class="mb-3">Hi, I'm <span>Kelly</span>.</h1>
              <p class="mb-3">This is my personal website. Enjoy!</p>
              <a href="https://drive.google.com/file/d/1sbIuqI7lORBjNmDV92PhZOO8jE3q-PO8/view?usp=sharing" target="_blank" class="downloadBtn btn btn-primary mb-3">Download CV</a>
              <p class="text-muted mb-1"><i class="fa-solid fa-envelope me-2"></i>u2kelly619@gmail.com</p>
              <p class="text-muted"><i class="fa-solid fa-phone me-2"></i>0910-409078</p>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-4">
              <div class="">
                  <img class="img-fluid" src="../assets/k.jpg" alt="Kelly photo" />
              </div>
          </div>
      </div>
  </main>

  <!-- ABOUT ME -->
  <section class="container-fluid mb-5">
      <div class="row justify-content-center mb-5">
          <div class="col-8 col-md-5 py-5">
              <p class="mb-0">我是張師竹，名字的意義是要「師」法「竹」子，在學習竹子的堅毅之外，更不會忘記做人的溫柔與彈性。我相信積極的態度會帶來積極的結果，有嘗試才有成功的可能。</p>
          </div>
      </div>
  </section>

  <!-- IMAGES -->
  <section class="container-fluid px-5">
      <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-4 mb-5">
              <img class="img-fluid rounded-3" src="../assets/food.jpg" alt="delicious food">
          </div>
          <div class="col-12 col-md-8 col-lg-4 mb-5">
              <h3 class="fw-bold">I'm a <span>Foodie</span>.</h3>
              <p>沒什麼是一頓好料不能解決的，如果有，那就來個兩頓。興趣是吃，而且要吃好的，看著Google Map內存的1000多家餐廳小吃，有時候覺得自己偏執到有點病態，但吃到美食的瞬間還是會感謝努力做功課的自己。</p>
              <p>想知道我的口袋名單？ <router-link class="food-link" to="/food-map">&rarr; Food Map</router-link></p>
          </div>
      </div>
      <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-4 mb-5 order-2 order-md-1">
              <h3 class="fw-bold">I'm a <span>Traveler</span>.</h3>
              <p>我很享受離開舒適圈、探索未知土地的過程，很喜歡那些轉角的風景，和不同腳印帶來的小驚喜。</p>
          </div>
          <div class="col-12 col-md-8 col-lg-4 mb-5 order-1 order-md-2">
              <img class="img-fluid rounded-3" src="../assets/travel.jpg" alt="mountain scenary">
          </div>
      </div>
      <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-4 mb-5">
              <img class="img-fluid rounded-3" src="../assets/catdog.jpg" alt="dog and cat">
          </div>
          <div class="col-12 col-md-8 col-lg-4 mb-5">
              <h3 class="fw-bold">I'm an <span>Animal Lover</span>.</h3>
              <p>生活中的不順心，我都靠小動物來療癒自己，看著吃到零食就好滿足的小狗，或許人生沒那麼難，是自己把他想得太複雜了，想試著找回生活的本質與初心。常常被貓貓狗狗騙去花錢，什麼貓咪咖啡廳的，可惡。</p>
          </div>
      </div>
  </section>

  <!-- SKILLS -->
  <section class="skills container-fluid mb-5 py-5">
    <h3 class="text-underline-blue text-center mb-5">My Skills</h3>
    <div class="row justify-content-center mb-5 gap-3">
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/html.png" class="img-fluid" alt="">
      </div>
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/css.png" class="img-fluid" alt="">
      </div>
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/js.png" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row justify-content-center gap-3">
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/vuejs.png" class="img-fluid" alt="">
      </div>
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/nodejs.png" class="img-fluid" alt="">
      </div>
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/bootstrap.png" class="img-fluid" alt="">
      </div>
      <div class="col-4 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
        <img src="../assets/tailwindcss.png" class="img-fluid" alt="">
      </div>
      
      <!-- <div class="col-8 col-md-3 border">
        <h5><b>語言能力</b></h5>
        <p>
          TOEIC 960<br>
          TOEIC Speaking Test 170<br>
          TOEIC Writing Test 180
        </p>
      </div> -->
    </div>
  </section>

  <!-- TIMELINE -->
  <section class="timeline-section mb-5">
    <h2 class="text-underline-blue text-center mt-5">Timeline</h2>
    <div class="timeline-container">
      <div class="timeline">
        <ul>
          <li>
            <div class="timeline-content">
              <h3 class="date">Mar 2022 - Aug 2022</h3>
              <h3>前端設計工程師養成班</h3>
              <p>中國文化大學推廣教育部
                <br>- HTML、CSS、JavaScript
                <br>- Bootstrap 5、Tailwind CSS
                <br>- Vue.js
                <br>- Node.js
              </p>                
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Sep 2019 - Dec 2021</h3>
              <h3>助理秘書</h3>
              <p>
                帕奇巨科技有限公司 Rentpackage Co., Ltd.
                <br>- 產品功能發想及UIUX介面規劃
                <br>- 多國語言行銷規劃佈局及SEO
              </p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Nov 2018 - Jun 2019</h3>
              <h3>國外業務助理</h3>
              <p>
                <span class="">原鉅實業有限公司 Original-i Co., Ltd.</span>
                <br>- 國外客戶詢價、報價回覆及後續追蹤
                <br>- 阿里巴巴電商平台管理
              </p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h3 class="date">Sep 2014 - Jun 2018</h3>
              <h3>NCTU FL</h3>
              <p>
                畢業於國立交通大學外國語文學系，課業之餘參與了許多社團活動並擔任要職。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
h1 span, h3 span{
    color: var(--main-color);
}
main h1{
    font-size: 50px;
    font-weight:bold;
    /* color: */
    /* margin-bottom: 20px; */
}
.downloadBtn{
    background-color: var(--main-color) !important;
}
.downloadBtn:hover{
    background-color: var(--main-color-hover) !important;
}
@media screen and (max-width: 992px) {
  .main-title{
    text-align: center;
  }
}


.mainpic{
    /* width: 250px;
    height: 250px; */
    border-radius: 40px;
    overflow: hidden;
    transition: 0.8s; 
}
.mainpic:hover{
    border-radius: 150px;
}

.food-link {
    text-decoration: none;
    color: var(--main-color);
}
.food-link:hover {
    color: var(--main-color-hover);
}

/* TIMELINE */
.timeline-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
  /* 覆寫掉bootstrap預設 */
  padding-left: 0 !important;
}
.timeline ul li {
  padding: 20px;
  background-color: gray;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h3 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
    color:gray;
  }
  .timeline ul li:hover::before {
    background-color: var(--main-color);
  }
}
</style>
