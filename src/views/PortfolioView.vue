<template>
    <h1 class="text-center my-5">Portfolio</h1>
    <div class="container-fluid">
        <section class="row justify-content-center my-5">
            <div class="col-12 col-md-8 col-lg-4">
                <p>在前端工程師培訓中學習了核心的前端知識，並運用這些知識實作出購物網站、產品及企業實習等專案，從前端基礎HTML、CSS、JavaScript及框架Vue.js，和Bootstrap及Tailwind的使用，到後端Node.js的實作及串接API，實際了解一個網站的開發流程。</p>
            </div>
        </section>
    </div>

    <main class="container-fluid">
        <section class="row justify-content-center my-5">
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <img class="img-fluid" src="../assets/whisperNote.jpg" alt="whisperNote app">
            </div>
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <h3 class="fw-bold">WhisperNote 交換日記平台</h3>
                <p>2022.07 - 2022.08</p>
                <p>前端工程師</p>
                <p><a href="https://www.youtube.com/watch?v=n8-UBPNITsA" target="_blank" class="link">See Demo Video</a></p>
                <ul>
                    <li>開發交換日記平台，實作新增修改刪除日記、日記分類和好友，及串接後端等功能</li>
                    <li>使用技術：Vue.js (Vue 3)/ Vue CLI/ Vue Router/ Vuex、HTML、CSS、JavaScript、Tailwind</li>
                </ul>
            </div>
        </section>
        <section class="row justify-content-center mb-5">
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <img class="img-fluid" src="../assets/minecraft.jpg" alt="minecraft website">
            </div>
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <h3 class="fw-bold">2022麥塊建築大賽-明道場邀請賽活動網頁</h3>
                <p>2022.07</p>
                <p>小組負責人、前端工程師</p>
                <p><a href="http://mingdao.ntc.im/" target="_blank" class="link">mingdao.ntc.im</a></p>
                <ul>
                    <li>設計並開發遊戲風格網頁，讓使用者了解該賽詳細資訊</li>
                    <li>使用技術：Vue.js (Vue 3)/ Vue CLI/ Vue Router、HTML、CSS、JavaScript、Bootstrap 5</li>
                </ul>
            </div>
        </section>
        <!-- <section class="row justify-content-center mb-5">
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <img class="img-fluid" src="" alt="delicious food">
            </div>
            <div class="col-12 col-md-8 col-lg-4 mb-5">
                <h3 class="fw-bold">喜妹菜籃子-產品形象網頁</h3>
                <p>2022.05</p>
                <p><a>https://u2kelly619.github.io/happygirlbasket</a></p>
                <ul>
                    <li>運用所學實作購物車、登入註冊功能，替家裡的小事業製作產品網站，方便推廣及介紹自家品牌</li>
                    <li>使用技術（前端）：Vue.js (Vue 3)/ Vue CLI/ Vue Router/ Vuex、HTML、CSS、JavaScript、Bootstrap 5</li>
                    <li>使用技術（後端）：Node.js</li>
                </ul>
            </div>
        </section> -->
    </main>
</template>

<script>
export default {
    name: 'PortfolioView',
}
</script>

<style>
.link {
    text-decoration: none;
    color: var(--main-color);
}
.link:hover {
    color: var(--main-color-hover);
}
</style>