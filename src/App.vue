<template>
  <div id="app" class="container">
        <h1 class="text-center mb-5">My component based structure</h1>
        <div class="row">

            <div class="col-md-9 col-12">
                <news-holder v-on:read="newsRead" date="yesterday"></news-holder>
            </div>
            <div class="col-md-2 d-sm-none d-md-block">
                <links-holder></links-holder>

                <adds-holder></adds-holder>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
    newsRead(num){
      alert('Xəbəri oxudunuz! Nömrəsi: ' + num)
    }
  }
}
</script>






