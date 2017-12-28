<template>
<div> 


<nav class="level is-mobile navic">

  <div class="level-item has-text-centered">
    <div>
        <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <figure class="image is-48x48">
                    <img class="iconUser" src="https://i.pinimg.com/736x/b3/ef/af/b3efaf8736889073351cac8a415c6c69--swag-friends.jpg" alt="Placeholder image">
                </figure>
            </div>
            <div class="level-item has-text-centered navigation">
                <div>
                    <p class="heading">Jane Doe</p>
                    <p class="title"><span class="icon is-small"><i class="fa fa-cubes" aria-hidden="true"></i></span>&nbsp; : {{ allScore }}</p>
                </div>
            </div>
        </nav>
    </div>
  </div>

  <div class="level-item has-text-centered">
    <div>
        <!-- <span class="icon is-large">
            <span class="fa-stack">
                <a class="fa fa-circle fa-stack-2x"></a>
                <a class="fa fa-shopping-cart fa-stack-1x fa-inverse"></a>
            </span>
        </span> -->


        <span class="icon is-large" v-on:click="menu=1"><a class="button is-medium is-link fa fa-3x fa fa-shopping-cart" aria-hidden="true" title="Магазин"></a></span>
        <span class="icon is-large" v-on:click="menu=0"><a class="button is-medium is-link fa fa-3x fa fa-bars" aria-hidden="true" title="Уровни"></a></span>
        <span class="icon is-large" v-on:click="menu=2"><a class="button is-medium is-link fa fa-3x fa fa-star" aria-hidden="true" title="Рейтинг"></a></span>
        <span class="icon is-large" v-on:click="menu=3"><a class="button is-medium is-link fa fa-3x fa fa-info-circle" aria-hidden="true" title="Помощь"></a></span>
    </div>
  </div>

  <div class="level-item has-text-centered">
    <div>
        {{ level }} <span class="icon is-small"><i class="fa fa-key" title="Текущий уровень"></i></span>
        {{ hint }} <span class="icon is-small"><i class="fa fa-eye" title="Подсказки"></i></span>
        {{ money }}<span class="icon is-small"><i class="fa fa-rub" title="Валюта"></i></span>
    </div>
  </div>

</nav>



            <div class="card hero mainCard is-bold">
<!-- 
                <header class="card-header is-primary">

                <div class="media firstPanel" style="margin-top: 0.5%">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img class="iconUser" src="https://i.pinimg.com/736x/b3/ef/af/b3efaf8736889073351cac8a415c6c69--swag-friends.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 ">John Smith</p>
                        <p class="subtitle is-6"><span class="icon is-small"><i class="fa fa-cubes" aria-hidden="true"></i></span>&nbsp;All score: {{ allScore }}</p>
                    </div>
                </div>


                    <div class="shop">
                        <span class="icon is-large" v-on:click="menu=1"><a class="fa fa-3x fa fa-shopping-cart" aria-hidden="true"></a></span>
                    </div>
                    <div class="hint">
                        <span class="icon is-large" v-on:click="menu=0"><a class="fa fa-3x fa fa-bars" aria-hidden="true"></a></span>
                    </div>
                    <div class="hint">
                        <span class="icon is-large" v-on:click="menu=2"><a class="fa fa-3x fa fa-star" aria-hidden="true"></a></span>
                    </div>
                    <div class="hint">
                        <span class="icon is-large" v-on:click="menu=3"><a class="fa fa-3x fa fa-question" aria-hidden="true"></a></span>
                    </div>
                    <div class="cost">
                            <p class="title is-4">Level</p>
                            <p class="subtitle is-6">{{ level }}/20 <span class="icon is-small"><i class="fa fa-key"></i></span></p>
                    </div>
                    <div class="hint">
                            <p class="title is-4">Hint</p>
                            <p class="subtitle is-6">{{ hint }}/1 <span class="icon is-small"><i class="fa fa-eye"></i></span></p>
                    </div>
                    <div class="hint">
                            <p class="title is-4">Score</p>
                            <p class="subtitle is-6">{{ score }}/100 <span class="icon is-small"><i class="fa fa-cube"></i></span></p>
                    </div>


                </header> -->

                <div class="container card-content">

                    <div class="content">           
                        <div v-if="menu==0">
                            <Level />
                        </div>
                        <div v-if="menu==1">
                            <Shop />
                        </div>  
                        <div v-if="menu==2">
                            <Rating />
                        </div> 
                        <div v-if="menu==3">
                            <Info />
                        </div>                            
                    </div>
                </div>

                <footer class="card-footer foot">
                    <a href="/" class="card-footer-item"><span class="icon is-small"><i class="fa fa-reply"></i></span>&nbsp;Выйти</a>
                    <a href="#" class="card-footer-item"><span class="icon is-small"><i class="fa fa-retweet"></i></span>&nbsp;Рассказать о игре друзьям</a>
                    <a href="#" class="card-footer-item"><span class="icon is-small"><i class="fa fa-fighter-jet"></i></span>&nbsp;Бросить вызов другу</a>
                </footer>

            </div>

</div>
</template>

<script>
import Level from './Level'
import Shop from './Shop'
import Rating from './Rating'
import Info from './Info'

export default {
  name: 'Home',
  data () {
    return {
      level: 1,
      hint: 3,
      money: 5,
      allScore: 0,
      menu: 0
    }
  },
  components: {
    Level,
    Shop,
    Rating,
    Info
  }
}
</script>

<style>
.startButton{
    margin-left: 45%;
    margin-top: 15%;
}

.iconUser{
    border-radius: 5px;
}

.question{
    margin-bottom: 2%;
    text-align: center;
}

.mainCard{
    background-color: whitesmoke;
}

.navigation{
    margin-left: 10%;
}

.navic{
    margin-top: 1%;
}

.foot{
    background-color: white;
}
</style>