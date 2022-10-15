<template>
  <div class="model">
    <div
      class="top img-fluid"
      style="
        background: url('https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/M3_web.jpg');
      "
    >
      <div class="content" data-aos="fade-up">
        <h1 class="title">Model 3</h1>
        <p>
          Model 3專為發揮高效純電動力性能而設計，具有雙馬達全輪驅動、長續航里程和快速充電等特色。</p>
      </div>
      <router-link to="/product/-N9ElGaAdLd1q5VERyXV" class="btn">立即訂購</router-link>
    </div>
    <div class="stats">
      <ul class="row" data-aos="fade-up">
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>續航能力</span>
          </div>
          <div class="down">563 km</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-speedometer"></i>
            <span>0-100 km/h</span>
          </div>
          <div class="down">3.3 s</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-car-front-fill"></i>
            <span>最高車速</span>
          </div>
          <div class="down">261 km/h</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-wrench-adjustable"></i>
            <span>尖峰功率</span>
          </div>
          <div class="down">576 匹</div>
        </li>
      </ul>
    </div>
    <div class="performance">
      <div class="image">
        <img class="img-fluid" src="https://ppt.cc/fbZNzx@.png" alt="" />
        <!-- <div class="crash_1">
          <span>正撞防護</span>
        </div>
        <div class="crash_2">
          <span>側撞防護</span>
        </div> -->
      </div>
      <div class="specification" data-aos="fade-up">
        <h4>Model 3 規格 - Peformance</h4>
        <div class="d-flex">
          <ul>
            <li>
              <h6>續航里程 (預估)</h6>
              <p>563 公里</p>
            </li>
            <li>
              <h6>加速 0-100km/h</h6>
              <p>3.3 秒 <em>扣除起步時間</em></p>
            </li>
            <li>
              <h6>尖峰功率</h6>
              <p>576 匹</p>
            </li>
            <li>
              <h6>最高時速</h6>
              <p>261 公里/小時</p>
            </li>
            <li>
              <h6>超級充電功率</h6>
              <p>250 kW</p>
            </li>
          </ul>
          <ul>
            <li>
              <h6>重量</h6>
              <p>1,836 公斤</p>
            </li>
            <li>
              <h6>貨物空間</h6>
              <p>649 公升</p>
            </li>
            <li>
              <h6>輪圈</h6>
              <p>20 吋</p>
            </li>
            <li>
              <h6>驅動</h6>
              <p>雙馬達全輪驅動</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="interior">
      <h4 class="text-center text-light" data-aos="fade-up">前衛的外觀</h4>
      <div class="video">
        <video autoplay loop playsinline muted>
          <source src="@/../public/interior-S.mp4">
        </video>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e2cc8a0c-9473-41a6-ae7f-9ffab318ff16/bvlatuR/std/2560x1394/Model-3-Interior-Carousel-2-Slide-2-Desktop-LHD"
            alt=""
          />
        </div>
        <div class="content">
          <h6>與時俱進的風格</h6>
          <p>
            在 15 吋觸控螢幕上控制一切功能—旨在與時俱進提供功能改進 (透過定期軟體更新引進新功能與提升性能)。
          </p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/0d1c2dcb-32b6-49e8-9b5e-2ed98cb331ac/bvlatuR/std/0x0/spoiler"
            alt=""
          />
        </div>
        <div class="content">
          <h6>碳纖維擾流板</h6>
          <p>
            降低風阻及提升高速行駛達  261 公里/小時的穩定性
          </p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/abc26d0a-79b5-4d7a-987b-9871ee85e373/bvlatuR/std/0x0/premium3@2"
            alt=""
          />
        </div>
        <div class="content">
          <h6>頂級音效</h6>
          <p>
            我們的頂級音響系統配備 14 組揚聲器，包含 1 組超低音揚聲器與 2 個擴大機，提供媲美錄音工作室的車室音響效果。
          </p>
        </div>
      </div>
    </div>
    <div class="autopilot">
      <h4 class="text-dark" data-aos="fade-up">AutoPilot自動駕駛</h4>
      <h6 class="text-secondary" data-aos="fade-up">未來的駕駛趨勢</h6>
      <div class="video">
        <video autoplay="true" loop playsinline muted>
          <source src="@/../public/autopilot.mp4"/>
        </video>
      </div>
      <div class="description">
        <ul class="row" data-aos="fade-up">
          <li class="col-md-4">
            <h6>自動導航駕駛</h6>
            <p>主動引導車輛上下砸道</p>
          </li>
          <li class="col-md-4">
            <h6>自動變換車道</h6>
            <p>在高速公路上駕駛時自動變換車道</p>
          </li>
          <li class="col-md-4">
            <h6>自動停車</h6>
            <p>輕點螢幕即可路邊停車及倒車入庫</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="tour">
      <div class="title" data-aos="fade-up">
        <h3>隨心所欲地出發</h3>
        <p>自動規劃您的旅程以及可能使用的超級充電站。</p>
      </div>
      <div class="map">
        <img class="img-fluid" src="https://ppt.cc/fVu5Sx@.png" alt="" />
      </div>
      <div class="description mt-3 text-end" data-aos="fade-left">
        宜蘭縣出發 - 經台中 J Mall 超充站 - 抵達台南市
        <p class="h2 mt-3">365 公里</p>
      </div>
    </div>
    <div class="more bga-lg-fixed" style=" background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/cd8ca7c5-ae2e-457a-85e3-a672c37f606f/bvlatuR/std/1024x732/Model-3-Specs-Desktop-Mobile-LHD')">
      <router-link to="/product/-N9ElGaAdLd1q5VERyXV" class="btn">立即訂購</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="@/assets/css/front/model.scss"></style>
