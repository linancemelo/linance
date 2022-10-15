<template>
  <div class="model">
    <div
      class="top img-fluid"
      style="
        background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/2391415a-7273-4735-92b2-a37c84c26f04/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-RHD');
      "
    >
      <div class="content" data-aos="fade-up">
        <h1 class="title">Model S</h1>
        <p>
          Model
          S專為速度和續航而打造，具有出眾的加速能力、無與倫比的性能與絕美外觀。Model
          S專為速度和續航而打造，具有出眾的加速能力、無與倫比的性能與絕美外觀。
        </p>
      </div>
      <router-link to="/product/-N9Eg4ltDi2cGMOrJGr-" class="btn">立即訂購</router-link>
    </div>
    <div class="stats">
      <ul class="row" data-aos="fade-up">
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>續航能力</span>
          </div>
          <div class="down">637 km</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-speedometer"></i>
            <span>0-100 km/h</span>
          </div>
          <div class="down">2.1 s</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-car-front-fill"></i>
            <span>最高車速</span>
          </div>
          <div class="down">322 km/h</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-wrench-adjustable"></i>
            <span>尖峰功率</span>
          </div>
          <div class="down">1,020 匹</div>
        </li>
      </ul>
    </div>
    <div class="performance">
      <div class="image">
        <img class="img-fluid" src="https://ppt.cc/fFv7jx@.png" alt="" />
        <!-- <div class="crash_1">
          <span>正撞防護</span>
        </div>
        <div class="crash_2">
          <span>側撞防護</span>
        </div> -->
      </div>
      <div class="specification" data-aos="fade-up">
        <h4>Model S 規格</h4>
        <div class="d-flex">
          <ul>
            <li>
              <h6>續航里程 (預估)</h6>
              <p>637公里</p>
            </li>
            <li>
              <h6>加速 0-100km/h</h6>
              <p>2.1秒 <em>扣除起步時間</em></p>
            </li>
            <li>
              <h6>尖峰功率</h6>
              <p>1,020匹</p>
            </li>
            <li>
              <h6>最高時速</h6>
              <p>322公里/小時</p>
            </li>
            <li>
              <h6>超級充電功率</h6>
              <p>250 kW</p>
            </li>
          </ul>
          <ul>
            <li>
              <h6>重量</h6>
              <p>2,162公斤</p>
            </li>
            <li>
              <h6>貨物空間</h6>
              <p>793公升</p>
            </li>
            <li>
              <h6>輪圈</h6>
              <p>19 / 21吋</p>
            </li>
            <li>
              <h6>驅動</h6>
              <p>三馬達全輪驅動</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="interior">
      <h4 class="text-center text-light" data-aos="fade-up">前衛的內裝</h4>
      <div class="video">
        <video autoplay loop playsinline muted>
          <source src="@/../public/interior-S.mp4">
        </video>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"
            alt=""
          />
        </div>
        <div class="content">
          <h6>隨時隨地保持連線</h6>
          <p>
            透過多裝置藍牙即時連接，或透過無線和 36 瓦 USB-C
            充電為裝置進行快速充電。
          </p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop"
            alt=""
          />
        </div>
        <div class="content">
          <h6>可容納一切的空間</h6>
          <p>
            擁有前、後行李廂與可折疊式座椅，可收納整輛單車且不必拆卸輪圈，以及您的行李。
          </p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://cdn.motor1.com/images/mgl/bey0v/s3/tesla-model-s-plaid-audio.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h6>沉浸式音效</h6>
          <p>
            22 組揚聲器、960
            瓦音響系統搭配「主動道路噪音降噪」功能，提供沈浸式聆聽效果和錄音室等級的音質。
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
    <div class="more bga-lg-fixed" style=" background: url('http://cdn.shopify.com/s/files/1/0589/7542/0614/collections/2021-tesla-model-s-updates-01-1611890995.jpg?v=1639764439')">
      <router-link to="/product/-N9Eg4ltDi2cGMOrJGr-" class="btn">立即訂購</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="@/assets/css/front/model.scss"></style>
