'use strict';

const Vue = require('vue');
const VueRouter = require('vue-router');
const $ = require('jquery');
const foo = require('./components/foo');
const bar = require('./components/bar');
$(function () {
    const router = new VueRouter({
        routes: [
            {
                path: '/foo',
                components: foo,
            },
            {
                path: '/bar',
                components: bar,
            },
        ]
    });
    const test = new Vue({
        el: '#test',
        router,
    })
});
