<template>
    <div>
        <div class="columns">
            <div class="column is-two-thirds animated fadeInDown ratingUsers">
                <table is-hoverable>
                <thead>
                    <tr style="background-color: #FCDC59">
                        <th>Toп 10</th>
                        <th>Игрок</th>
                        <th>Очки</th>
                    </tr>
                </thead>
                <tr>
                    <td>1</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                                <tr>
                    <td>6</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Jane Doe</td>
                    <td>11111</td>
                </tr>
                </table>
            </div>
            <div class="column animated fadeInUp informUser">
                <figure class="image is-256x256">
                    <img class="iconUser photoUser" src="https://i.pinimg.com/736x/b3/ef/af/b3efaf8736889073351cac8a415c6c69--swag-friends.jpg" alt="Placeholder image">
                </figure><hr>
                 <p class="textUser"><span class="icon is-small"><i class="fa fa-user" aria-hidden="true"></i></span>&nbsp;User: John Smith</p><hr>
                 <p class="textUser"><span class="icon is-small"><i class="fa fa-cubes" aria-hidden="true"></i></span>&nbsp;All score: 0</p>
                 <p class="textUser"><span class="icon is-small"><i class="fa fa-sort" aria-hidden="true"></i></span>&nbsp;Position: 0</p>
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
    margin-left: 8%;
}
.photoUser{
    margin-bottom: 0%;
}
.informUser{
    background-color: white;
    margin-left: 5%;
    border-radius: 5px;
}
.ratingUsers{
    background-color: white;
    border-radius: 3px;
}
</style>