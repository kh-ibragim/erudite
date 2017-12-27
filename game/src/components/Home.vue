<template>
<div>

            <div class="card hero mainCard is-bold">

                <header class="card-header is-primary">

                <div class="media firstPanel">
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


                </header>

                <div class="card-content" style="height: 490px;">

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

                <footer class="card-footer">
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
      hint: 1,
      score: 0,
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
.quistionImage{
    height: 400px;
}
.iconUser{
    border-radius: 5px;
}
.firstPanel{
    margin-left: 2%;
    margin-top: 2%;
}
.cost{
    margin-top: 2%;
    margin-left: 16%;
    text-align: center;
}
.hint{
    margin-top: 2%;
    margin-left: 2%;
    text-align: center;
}
.question{
    margin-bottom: 2%;
    text-align: center;
}
.shop{
    margin-top: 2%;
    margin-left: 20.5%;
}
.mainCard{
    background-color: white;
}
</style>