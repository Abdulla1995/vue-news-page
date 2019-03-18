<template>
    <div>
        <p class="mt-5 text-secondary">Adds</p>
        <div class="mt-2">
            <div v-for="add in adds">
                <a href="#">
                    <img v-bind:src="add" style="width: 150px;" class="d-block mb-3">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddsHolder",
    data(){
        return {
            adds : ['https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png', 'https://cdn-images-1.medium.com/max/1200/0*iBvb3FQRnC4Xdyv4.jpg', 'https://www.braveterry.com/wp-content/uploads/2015/12/vue.js.png']
        }
    }
}
</script>
