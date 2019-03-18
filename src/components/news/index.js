import Vue from 'vue'
import NewsHolder from './NewsHolder';

Vue.component('news-holder', NewsHolder);
Vue.component('links-holder', require('./LinksHolder').default);
Vue.component('adds-holder', require('./AddsHolder').default);
