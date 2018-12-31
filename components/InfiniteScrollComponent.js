import Vue from 'vue';

export default InfiniteScrollComponent = (wrappedComponent) => Vue.component('InfiniteScrollComponent', {
    render(createElement) {
        return createElement(wrappedComponent);
    }
});