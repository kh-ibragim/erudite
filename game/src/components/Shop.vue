<template>
    <div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
        

      <div class="tile is-parent">
        <article class="tile is-child notification is-primary">
          <p class="title"><i class="fa fa-cube"></i> Уровень</p>
          <p class="subtitle">Открыть следующий уровень за 100 голосов</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
          <a class="button is-light buy">Купить</a>
        </article>
      </div>

      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-light">
          <p class="title has-text-dark"><i class="fa fa-eye"></i> Подсказка</p>
          <p class="subtitle has-text-dark">Одна подсказка за 1 голос</p>
          <a class="button is-primary buy">Купить</a>
        </article>
        <article class="tile is-child notification is-light">
          <p class="title has-text-dark"><i class="fa fa-eye"></i> Подсказка</p>
          <p class="subtitle has-text-dark">10 подсказок за 8 голосов</p>
          <a class="button is-primary buy">Купить</a>
        </article>
      </div>

    </div>
  </div>

      <div class="tile is-parent">
        <article class="tile is-child notification is-primary">
          <p class="title"><i class="fa fa-cube"></i> Уровень</p>
          <p class="subtitle">Открыть два следующих уровня за 150 голосов</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
          <a class="button is-light buy">Купить</a>
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