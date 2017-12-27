<template>
<div>

    <template v-if="!markcl">
        <div class="columns is-mobile">
            <div class="column"><a class="button is-info levelButton" v-on:click="clickMarker(allEvent)">Level 1 <br><span class="icon is-small"><i class="fa fa-unlock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 2 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 3 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 4 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
        </div>
        <div class="columns is-mobile">
            <div class="column"><a class="button is-info levelButton" disabled>Level 5 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 6 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 7 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 8 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
        </div>
        <div class="columns is-mobile">
            <div class="column"><a class="button is-info levelButton" disabled>Level 9 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 10 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 11 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 12 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
        </div>
        <div class="columns is-mobile">
            <div class="column"><a class="button is-info levelButton" disabled>Level 13 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 14 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 15 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 16 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
        </div>
        <div class="columns is-mobile">
            <div class="column"><a class="button is-info levelButton" disabled>Level 17 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 18 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 19 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
            <div class="column"><a class="button is-info levelButton" disabled>Level 20 <br><span class="icon is-small"><i class="fa fa-lock"></i></span></a></div>
        </div>
  </template>

  <template v-else>
    <div>
        <h3><p class="question">Столица Австралии</p></h3>
    </div>
    <div class="columns is-mobile">
        <div class="column is-two-thirds">
            <img class="quistionImage" src="https://files.adme.ru/files/news/part_130/1302265/10579915-16-1000-1d0a0ae271-1477569002.jpg" alt="Placeholder image">
        </div>
        <div class="column"><br>
            <div class="columns is-mobile">
                <div class="column"><a class="button is-info levelButton">Аделаида</a></div>
            </div>
            <div class="columns is-mobile">
                <div class="column"><a class="button is-info levelButton">Мельбурн</a></div>
            </div>
            <div class="columns is-mobile">
                <div class="column"><a class="button is-info levelButton">Канберра</a></div>
            </div>
            <div class="columns is-mobile">
                <div class="column"><a class="button is-info levelButton">Сидней</a></div>
            </div>
        </div>
    </div>
  </template>

</div>
</template>

<script>
export default {
  name: 'Level',
  data () {
    return {
      markcl: false
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
.levelButton{
    width: 100%;
    height: 70px;
}
</style>