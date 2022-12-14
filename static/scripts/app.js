const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            carouselItems: [],
            currentCarouselIndex: 2,
            carousel: {},
            blockElement: {}
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
        // backgroundAnimation(){
        //     const tl = gsap.timeline({
  
        //         scrollTrigger: {
        //         trigger: "#block",
        //         pin: true,
        //         scrub: true,
        //         end: () => `+=${this.blockElement.offsetWidth}`
                  
        //       }
              
        //     })
        //     tl.to(container, { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 1)
        // }       
    },
    created: function() {    
        
    },
    mounted(){   
        this.carouselItems = document.querySelectorAll('.card')
        this.carousel = document.querySelector('.card-container')
        // this.blockElement = document.querySelector('#block');
        // gsap.registerPlugin(ScrollTrigger);
        this.getCarouselItems() 
    }
})