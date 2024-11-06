const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            if (this.cart.length >= 1) {
                const idX = this.cart.indexOf(id)
                if (idX <= -1) {
                    return
                }
                this.cart.splice(idX, 1)
            }

        }
    }
})
