import {defineStore} from "pinia";

export const cart = defineStore('cart', {
    state: () => {
        return {
            num: 3,
            price: 123.21
        }
    },
    getters: {
        doubleNum: (state) => state.num * 2,
        max() {
            return this.doubleNum + 10
        }
    },
    actions: {
        increment() {
            this.num++
        },
    }
})
