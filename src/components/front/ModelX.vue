<template>
  <div class="model">
    <div
      class="top img-fluid"
      style="
        background: url('https://cdn-origin.cool-style.com.tw/cool/2021/02/MX-Exterior-Hero-Desktop.jpg');
      "
    >
      <div class="content" data-aos="fade-up">
        <h1 class="title">Model X</h1>
        <p>Model X為Tesla當家的純電動運動休旅車，配備全時四輪驅動且乘坐空間寬敞，可容納7名成人及其隨身行李。</p>
      </div>
      <router-link to="/product/-N9ElysEd3KVeMjDD9hs" class="btn">立即訂購</router-link>
    </div>
    <div class="stats">
      <ul class="row" data-aos="fade-up">
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>續航能力</span>
          </div>
          <div class="down">536 km</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-speedometer"></i>
            <span>0-100 km/h</span>
          </div>
          <div class="down">2.6 s</div>
        </li>
        <li class="col-6 col-md-3">
          <div class="up">
            <i class="bi bi-car-front-fill"></i>
            <span>最高車速</span>
          </div>
          <div class="down">262 km/h</div>
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
        <img class="img-fluid" src="https://ppt.cc/fVwjmx@.png" alt="" />
        <!-- <div class="crash_1">
          <span>正撞防護</span>
        </div>
        <div class="crash_2">
          <span>側撞防護</span>
        </div> -->
      </div>
      <div class="specification" data-aos="fade-up">
        <h4>Model X 規格 - Plaid</h4>
        <div class="d-flex">
          <ul>
            <li>
              <h6>續航里程 (預估)</h6>
              <p>536 公里</p>
            </li>
            <li>
              <h6>加速 0-100km/h</h6>
              <p>2.6 秒 <em>扣除起步時間</em></p>
            </li>
            <li>
              <h6>尖峰功率</h6>
              <p>1,020 匹</p>
            </li>
            <li>
              <h6>最高時速</h6>
              <p>262 公里/小時</p>
            </li>
            <li>
              <h6>超級充電功率</h6>
              <p>250 kW</p>
            </li>
          </ul>
          <ul>
            <li>
              <h6>重量</h6>
              <p>2,455 公斤</p>
            </li>
            <li>
              <h6>拖車</h6>
              <p>2,250 公斤</p>
            </li>
            <li>
              <h6>輪圈</h6>
              <p>20 / 22 吋</p>
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
      <h4 class="text-center text-light" data-aos="fade-up">完美的車配</h4>
      <div class="video">
        <video autoplay loop playsinline muted>
          <source src="@/../public/interior-X.mp4" />
        </video>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://electrek.co/wp-content/uploads/sites/3/2016/01/ultra-white-interior-tesla-model-x.jpg?quality=82&strip=all&w=1600"
            alt=""
          />
        </div>
        <div class="content">
          <h6>寬敞的車室空間</h6>
          <p>
            Model X 提供寬敞的車廂空間，並配備世界上最大的全景擋風玻璃，最多可乘坐 7 人。
          </p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://images.chinatimes.com/newsphoto/2021-11-25/1024/20211125002515.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h6>獨家鷹翼門</h6>
          <p>超跑式的車門設計，是Model 系列唯一一款能向上開門的汽車，打造獨一無二的超跑SUV。</p>
        </div>
      </div>
      <div class="interior-pic" data-aos="fade-up">
        <div class="image">
          <img
            class="img-fluid"
            src="https://media.ed.edmunds-media.com/tesla/model-x/2021/oem/2021_tesla_model-x_4dr-suv_plaid_cargo_oem_1_815.jpg"
            alt=""
          />
        </div>
        <div class="content">
          <h6>頂級載物能力</h6>
          <p>
            Model X 專為最大實用性打造，擁有 2,300 公斤拖曳能且儲物空間最高可達 2,614 公升。
          </p>
        </div>
      </div>
    </div>
    <div class="autopilot">
      <h4 class="text-dark" data-aos="fade-up">AutoPilot自動駕駛</h4>
      <h6 class="text-secondary" data-aos="fade-up">未來的駕駛趨勢</h6>
      <div class="video">
        <video autoplay="true" loop playsinline muted>
          <source src="@/../public/autopilot.mp4" />
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
    <div
      class="more bga-lg-fixed"
      style="
        background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/256d1141-44e7-4bd3-8fdc-20852283c645/bvlatuR/std/4096x3072/Model-X-Specs-Hero-Desktop-LHD');
      "
    >
      <router-link to="/product/-N9ElysEd3KVeMjDD9hs" class="btn">立即訂購</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="@/assets/css/front/model.scss"></style>
<style scoped lang="scss">
.model {
  .top {
    .content {
      color: #fff;
    }
    .btn {
      color: #fff;
      border-color: #fff;
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .model {
    .top {
      background-position: 65% center !important;
      .content {
        color: #000;
      }
    }
  }
}
</style>
