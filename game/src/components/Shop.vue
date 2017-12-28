<template>
    <div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
        

      <div class="tile is-parent animated jackInTheBox">
        <article class="tile is-child notification is-white">
          <p class="title"><i class="fa fa-rub"></i> Кошелек</p>
          <p class="subtitle">Пополнить личный кошелек используя голоса</p>
          <figure class="image is-4by3">
            <img src="../../static/golosa.png">
          </figure>
          <!-- <a class="button is-primary buy">Пополнить</a> -->
          <div class="field has-addons has-addons-centered">
              <p class="control">
                <input class="input" type="text" placeholder="Введите кол-во">
              </p>
              <p class="control">
                <a class="button is-primary">Пополнить</a>
              </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-vertical animated jackInTheBox">
        <article class="tile is-child notification is-white">
          <p class="title has-text-dark"><i class="fa fa-eye"></i> Подсказка</p>
          <p class="subtitle has-text-dark">Одна подсказку за 1 <i class="fa fa-rub"></i></p>
          <a class="button is-primary buy">Купить</a>
        </article>
        <article class="tile is-child notification is-white">
          <p class="title has-text-dark"><i class="fa fa-gift"></i> Призы <i class="fa fa-gift"></i></p>
          <p class="subtitle has-text-dark">Играй каждый день и тебя обязательно будут ждать призы </p>
        </article>
      </div>

    </div>
  </div>

      <div class="tile is-parent animated jackInTheBox">
        <article class="tile is-child notification is-white">
          <p class="title"><i class="fa fa-key"></i> Уровень</p>
          <p class="subtitle">Открыть следующий уровень за 150 <i class="fa fa-rub"></i></p>
          <figure class="image is-4by3">
            <img src="../../static/nextlevel.jpg">
          </figure>
          <a class="button is-primary buy">Купить</a>
        </article>
      </div>

</div>

    </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style>
.buy{
    float: right;
}
</style>