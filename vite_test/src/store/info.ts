import {defineStore} from "pinia";

import {computed, ref} from 'vue'

export const infoStore = defineStore('infoStore', () => {
    const name = ref('tim')
    const age = ref(21)

    const getAge = computed(() => age.value + 1)

    function addAge() {
        age.value++
    }

    return {
        name,
        age,
        getAge,
        addAge
    }
})
