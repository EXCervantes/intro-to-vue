app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `
        <div class="product-display">
        <div class="product-container">
      <div class="product-image">
        <a :href="url">
          <img :src="image" :class="{'out-of-stock-img': !inStock}">
        </a>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show="onSale">{{brand}} {{product}} is on sale.</p>
        <p>{{description}}</p>
        <product-details :details="details"></product-details>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          class="color-circle" :class="{ active: activeClass }" :style="{backgroundColor: variant.color}">
        </div>
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
        </ul>
        <br>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost sold out!</p>
        <p v-else-if="!inStock">Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <button
            class="button"
            :class="{disabledButton: !inStock}"
            :disabled="!inStock"
            @click="addToCart">
            Add to Cart
        </button>
        <button
            class="button"
            @click="removeFromCart">
            Remove Item
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`
    ,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'These are comfy leggings for your feet!',
            selectedVariant: 0,
            url: 'https://johnscrazysocks.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            activeClass: true,
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})