const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'These are comfy leggings for your feet!',
            image: './assets/images/socks_blue.jpg',
            url: 'https://johnscrazysocks.com',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})
