<template>
<div>
<section class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Erudite
      </h1>
      <h2 class="subtitle">
        #Kill the time
      </h2>
    </div>
  </div>
</section>

  <section class="section">
    <div class="container">
            <div class="card">
                <header class="card-header is-primary">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://i.mycdn.me/image?id=838474021148&ts=000000000000000258&plc=WEB&tkn=*rmLUvuWiyZZjBvJDl0y0fi0w2lQ&fn=sqr_50" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">Score: {{ score }}</p>
                    </div>
                </div>
                </header>
                <div class="card-content" style="height: 500px">
                    <div class="content">
                        <template v-if="!markcl">
                            <!-- <a class="button is-primary startButton" v-on:click="clickMarker(allEvent)">Start game</a> -->
                            <div class="columns is-mobile">
                                <div class="column"><a class="button is-primary levelButton" v-on:click="clickMarker(allEvent)">Level 1</a></div>
                                <div class="column"><a class="button is-info levelButton" disabled>Level 2</a></div>
                                <div class="column"><a class="button is-success levelButton" disabled>Level 3</a></div>
                                <div class="column"><a class="button is-link levelButton" disabled>Level 4</a></div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column"><a class="button is-primary levelButton" disabled>Level 5</a></div>
                                <div class="column"><a class="button is-info levelButton" disabled>Level 6</a></div>
                                <div class="column"><a class="button is-success levelButton" disabled>Level 7</a></div>
                                <div class="column"><a class="button is-link levelButton" disabled>Level 8</a></div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column"><a class="button is-primary levelButton" disabled>Level 9</a></div>
                                <div class="column"><a class="button is-info levelButton" disabled>Level 10</a></div>
                                <div class="column"><a class="button is-success levelButton" disabled>Level 11</a></div>
                                <div class="column"><a class="button is-link levelButton" disabled>Level 12</a></div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column"><a class="button is-primary levelButton" disabled>Level 13</a></div>
                                <div class="column"><a class="button is-info levelButton" disabled>Level 14</a></div>
                                <div class="column"><a class="button is-success levelButton" disabled>Level 15</a></div>
                                <div class="column"><a class="button is-link levelButton" disabled>Level 16</a></div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column"><a class="button is-primary levelButton" disabled>Level 17</a></div>
                                <div class="column"><a class="button is-info levelButton" disabled>Level 18</a></div>
                                <div class="column"><a class="button is-success levelButton" disabled>Level 19</a></div>
                                <div class="column"><a class="button is-link levelButton" disabled>Level 20</a></div>
                            </div>
                        </template>

                        <template v-else>
                            <div class="about">
                                <h3 class="has-text-primary subtitle is-3" style="text-align: center">Level 1</h3>
                            </div>
                            <div class="about">
                                <h3 class="subtitle is-3" style="text-align: right">0/100</h3>
                            </div>
                            <br><br>
                        </template>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="/" class="card-footer-item" v-on:click="markcl=false"><span class="icon is-small"><i class="fa fa-reply"></i></span>&nbsp;Вернуться</a>
                    <a href="#" class="card-footer-item"><span class="icon is-small"><i class="fa fa-retweet"></i></span>&nbsp;Рассказать о игре друзьям</a>
                    <a href="#" class="card-footer-item">Бросить вызов другу</a>
                </footer>
            </div>
    </div>
  </section>

  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Erudite</strong> game by Ibragim Khasanov</a>. Game for #KillingTheTime.
      </p>
    </div>
  </div>
</footer>

</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      markcl: false,
      score: 0
    }
  },
  methods: {
    clickMarker: function (allEvent) {
      this.markcl = true
    }
  }
}
</script>

<style>
.startButton{
    margin-left: 45%;
    margin-top: 15%;
}
.levelButton{
    width: 100%;
    height: 70px;
}
.about {
 display:inline-block;
}
</style>