<template>
    <div>
        <div class="columns">
            <div class="column is-two-thirds">
                First column
            </div>
            <div class="column">
                <figure class="image is-256x256">
                    <img class="iconUser photoUser" src="https://i.pinimg.com/736x/b3/ef/af/b3efaf8736889073351cac8a415c6c69--swag-friends.jpg" alt="Placeholder image">
                </figure>
                 <p class="title is-4 has-text-primary textUser"><span class="icon is-small"><i class="fa fa-cubes" aria-hidden="true"></i></span>&nbsp;User: John Smith</p>
                 <p class="subtitle is-6 textUser"><span class="icon is-small"><i class="fa fa-cubes" aria-hidden="true"></i></span>&nbsp;All score: 0</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Rating'
}
</script>

<style>
.textUser{
    margin-left: 12%;
}
.photoUser{
    margin-bottom: 0;
}
</style>