<template>
    <div>
       <div class="news-holder" v-for="(newsContent, index) in news">
            <h1 class="text-danger">{{newsContent.name}}</h1>
            <h4 class="text-primary">{{newsContent.header}}</h4>
            <p>{{newsContent.body}}</p>
            <div class="mb-2 text-info">{{date}}</div>

           <div class="row">
               <div class="col-6">
                   <my-button :click-function="showDate" b-class="btn-danger btn-sm" b-text="show year"></my-button>
                   <my-button :click-function="tourEnded" b-class="btn-success btn-sm ml-3" b-text="end tour" :is-disabled="!isTourEnded"></my-button>
               </div>
               <div class="col-6">
                   <button type="button" class="btn btn-outline-primary btn-sm float-right" v-on:click="readNews(index + 1)">Oxudum</button>
               </div>
           </div>

            <div style="border: 1px dashed;" class="mt-2"></div>
       </div>
    </div>
</template>

<script>
export default {
    name: "NewsHolder",
    props: {
        date: {
            type: String,
            required: false,
            default: 'today'
        }
    },

    data() {
        return {
            news: [{"name" : "Xəbər 1","header" : "Xəbər 1 başlıq","body" : "Xəbər 1 xəbər məlumatı"}, {"name" : "Xəbər 2","header" : "Xəbər 2 başlıq","body" : "Xəbər 2 xəbər məlumatı"}, {"name" : "Xəbər 3","header" : "Xəbər 3 başlıq","body" : "Xəbər 3 xəbər məlumatı"}],
            isTourEnded : false
        }
    },

    methods: {
        readNews(newsNum){
            this.$emit('read', newsNum);
        },

        showDate(){
            setTimeout(() => {
                this.isTourEnded = true
            }, 2000);
        },
        tourEnded(){
            alert('Tour ended successfully')
        }
    }
}
</script>

