<template>
    <button class="btn" :class="bClass" @click="clickFunction" :disabled="isDisabled">{{ bText }}</button>
</template>

<script>
    export default {

        name: "MyButton",

        props: {
            bClass: {
                type: String,
                required: false
            },

            bText : {
                type: String,
                default: 'I am a button'
            },
            clickFunction : {
                type: Function,
                required: true
            },
            isDisabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
