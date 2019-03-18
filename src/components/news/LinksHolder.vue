<template>
    <div>
        <h5>Addtional links</h5>
        <div class="link-container">
            <p v-for="link in links">
                <a v-bind:href="link.url">{{link.name}}</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LinksHolder",
        data(){
            return{
                links: [{url: '/sport',name : 'Sport Xəbər ',},{url: '/economy',name: 'Economy Xəbər '},{url: '/latest',name : 'Latest Xəbər '}],
            }
        }
    }
</script>
