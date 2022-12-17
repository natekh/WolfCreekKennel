const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            carouselItems: [],
            imageCarouselItems: [],
            currentCarouselItems: [],
            upcomingCarouselItems: [],
            pastCarouselItems: [],
            currentCarouselIndex: 2,
            currentImageCarouselIndex: 3,
            currentLitterIndex: 2,
            upcomingLitterIndex: 2,
            pastLitterIndex: 2    
        }
    },
    methods: {
        getCarouselItems(carousel){
            if (carousel === "general") {
                if (this.currentCarouselIndex >= this.carouselItems.length){
                    this.currentCarouselIndex = 2
                }
                if (this.currentCarouselIndex < 2) {
                    this.currentCarouselIndex = this.carouselItems.length - 1
                }
                for (let i=0; i < this.carouselItems.length; i++){
                    if (i >= this.currentCarouselIndex - 2 && i <= this.currentCarouselIndex) {
                        this.carouselItems[i].style.display = 'block'
                    }
                    else {
                        this.carouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "current") {
                if (this.currentLitterIndex >= this.currentCarouselItems.length){
                    this.currentLitterIndex = 2
                }
                if (this.currentLitterIndex < 2) {
                    this.currentLitterIndex = this.currentCarouselItems.length - 1
                }
                for (let i=0; i < this.currentCarouselItems.length; i++){
                    if (i >= this.currentLitterIndex - 2 && i <= this.currentLitterIndex) {
                        this.currentCarouselItems[i].style.display = 'block'
                    }
                    else {
                        this.currentCarouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "upcoming") {
                if (this.upcomingLitterIndex >= this.upcomingCarouselItems.length){
                    this.upcomingLitterIndex = 2
                }
                if (this.upcomingLitterIndex < 2) {
                    this.upcomingLitterIndex = this.upcomingCarouselItems.length - 1
                }
                for (let i=0; i < this.upcomingCarouselItems.length; i++){
                    if (i >= this.upcomingLitterIndex - 2 && i <= this.upcomingLitterIndex) {
                        this.upcomingCarouselItems[i].style.display = 'block'
                    }
                    else {
                        this.upcomingCarouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "past") {
                if (this.pastLitterIndex >= this.pastCarouselItems.length){
                    this.pastLitterIndex = 2
                }
                if (this.pastLitterIndex < 2) {
                    this.pastLitterIndex = this.pastCarouselItems.length - 1
                }
                for (let i=0; i < this.pastCarouselItems.length; i++){
                    if (i >= this.pastLitterIndex - 2 && i <= this.pastLitterIndex) {
                        this.pastCarouselItems[i].style.display = 'block'
                    }
                    else {
                        this.pastCarouselItems[i].style.display = 'none'
                    }
                }
            }
            
        },
        getImageCarouselItems(){
            if (this.currentImageCarouselIndex >= this.imageCarouselItems.length){
                this.currentImageCarouselIndex = 3
            }
            if (this.currentImageCarouselIndex < 3) {
                this.currentImageCarouselIndex = this.imageCarouselItems.length - 1
            }
            for (let i=0; i < this.imageCarouselItems.length; i++){
                if (i >= this.currentImageCarouselIndex - 3 && i <= this.currentImageCarouselIndex) {
                    this.imageCarouselItems[i].style.display = 'block'
                }
                else {
                    this.imageCarouselItems[i].style.display = 'none'
                }
            }
        },
        carouselLeft(carousel){
            if (carousel === "general") {
                this.currentCarouselIndex--
            }
            else if (carousel === "current") {
                this.currentLitterIndex--
            }
            else if (carousel === "upcoming") {
                this.upcomingLitterIndex--
            }
            else if (carousel === "past") {
                this.pastLitterIndex--
            }
            this.getCarouselItems(carousel)
        },  
        carouselRight(carousel){
            if (carousel === "general") {
                this.currentCarouselIndex++
            }
            else if (carousel === "current") {
                this.currentLitterIndex++
            }
            else if (carousel === "upcoming") {
                this.upcomingLitterIndex++
            }
            else if (carousel === "past") {
                this.pastLitterIndex++
            }
            this.getCarouselItems(carousel)        
        },
        imageCarouselLeft(){
            this.currentImageCarouselIndex--
            this.getImageCarouselItems() 
        },
        imageCarouselRight(){
            this.currentImageCarouselIndex++
            this.getImageCarouselItems() 
        }
    },
    created: function() {    
        
    },
    mounted(){   
        this.carouselItems = document.querySelectorAll('.card')
        if (this.carouselItems.length > 0 ) {
            this.getCarouselItems("general")
        }      
        this.currentCarouselItems = document.querySelectorAll(".current-card")
        if (this.currentCarouselItems.length > 0) {
            this.getCarouselItems("current")
        }
        this.upcomingCarouselItems = document.querySelectorAll(".upcoming-card")
        if (this.upcomingCarouselItems.length > 0) {
            this.getCarouselItems("upcoming")
        }
        this.pastCarouselItems = document.querySelectorAll(".past-card")
        if (this.pastCarouselItems.length > 0) {
            this.getCarouselItems("past")
        }
        this.imageCarouselItems = document.querySelectorAll('.image-carousel-image')
        this.getImageCarouselItems()
    }
})