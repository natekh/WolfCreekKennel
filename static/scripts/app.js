const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            carouselItems: [],
            currentCarouselIndex: 2,
            carousel: {}
        }
    },
    methods: {
        getCarouselItems(){
            if (this.currentCarouselIndex >= this.carouselItems.length){
                this.currentCarouselIndex = 2
            }
            if (this.currentCarouselIndex < 2) {
                this.currentCarouselIndex = this.carouselItems.length - 1
            }
            for (let i=0; i < this.carouselItems.length; i++){
                if (i >= this.currentCarouselIndex - 2 && i <= this.currentCarouselIndex) {
                    this. carouselItems[i].style.display = 'block'
                }
                else {
                    this. carouselItems[i].style.display = 'none'
                }
            }
        },
        carouselLeft(){
            this.currentCarouselIndex--
            this.getCarouselItems()
        },  
        carouselRight(){
            this.currentCarouselIndex++
            this.getCarouselItems()        
        }       
    },
    created: function() {    
        
    },
    mounted(){   
        this.carouselItems = document.querySelectorAll('.card')
        this.carousel = document.querySelector('.card-container')
        this.getCarouselItems() 
    }
})