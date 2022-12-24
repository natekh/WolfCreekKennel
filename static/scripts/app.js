const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            //this is a comment
            carouselItems: [],
            imageCarouselItems: [],
            currentCarouselItems: [],
            upcomingCarouselItems: [],
            pastCarouselItems: [],
            currentCarouselIndex: 2,
            currentImageCarouselIndex: 3,
            currentLitterIndex: 2,
            upcomingLitterIndex: 2,
            pastLitterIndex: 2,
            imageCarouselLimit: 3,
            carouselLimit: 2,
            email: {
                'first_name': '',
                'last_name': '',
                'reply_to': ''
            }    
        }
    },
    methods: {
        getCarouselItems(carousel){
            if (carousel === "general") {
                if (this.currentCarouselIndex >= this.carouselItems.length){
                    this.currentCarouselIndex = this.carouselLimit
                }
                if (this.currentCarouselIndex < this.carouselLimit) {
                    this.currentCarouselIndex = this.carouselItems.length - 1
                }
                for (let i=0; i < this.carouselItems.length; i++){
                    if (i >= this.currentCarouselIndex - this.carouselLimit && i <= this.currentCarouselIndex) {
                        this.carouselItems[i].style.display = 'block'
                    }
                    else {
                        this.carouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "current") {
                if (this.currentLitterIndex >= this.currentCarouselItems.length){
                    this.currentLitterIndex = this.carouselLimit
                }
                if (this.currentLitterIndex < this.carouselLimit) {
                    this.currentLitterIndex = this.currentCarouselItems.length - 1
                }
                for (let i=0; i < this.currentCarouselItems.length; i++){
                    if (i >= this.currentLitterIndex - this.carouselLimit && i <= this.currentLitterIndex) {
                        this.currentCarouselItems[i].style.display = 'block'
                    }
                    else {
                        this.currentCarouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "upcoming") {
                if (this.upcomingLitterIndex >= this.upcomingCarouselItems.length){
                    this.upcomingLitterIndex = this.carouselLimit
                }
                if (this.upcomingLitterIndex < this.carouselLimit) {
                    this.upcomingLitterIndex = this.upcomingCarouselItems.length - 1
                }
                for (let i=0; i < this.upcomingCarouselItems.length; i++){
                    if (i >= this.upcomingLitterIndex - this.carouselLimit && i <= this.upcomingLitterIndex) {
                        this.upcomingCarouselItems[i].style.display = 'block'
                    }
                    else {
                        this.upcomingCarouselItems[i].style.display = 'none'
                    }
                }
            }
            else if (carousel === "past") {
                if (this.pastLitterIndex >= this.pastCarouselItems.length){
                    this.pastLitterIndex = this.carouselLimit
                }
                if (this.pastLitterIndex < this.carouselLimit) {
                    this.pastLitterIndex = this.pastCarouselItems.length - 1
                }
                for (let i=0; i < this.pastCarouselItems.length; i++){
                    if (i >= this.pastLitterIndex - this.carouselLimit && i <= this.pastLitterIndex) {
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
                this.currentImageCarouselIndex = this.imageCarouselLimit
            }
            if (this.currentImageCarouselIndex < this.imageCarouselLimit) {
                this.currentImageCarouselIndex = this.imageCarouselItems.length - 1
            }
            for (let i=0; i < this.imageCarouselItems.length; i++){
                if (i >= this.currentImageCarouselIndex - this.imageCarouselLimit && i <= this.currentImageCarouselIndex) {
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
        },
        sendEmail(){ 
            axios({
                method: 'post',
                url: 'https://api.emailjs.com/api/v1.0/email/send',
                data: {
                    'service_id': '',
                    'template_id': '',
                    'user_id': '',
                    'template_params': {
                        'from_name': `${this.email.first_name} ${this.email.last_name}`,
                        'to_name': 'Kyle',
                        'message': document.querySelector('#textbox').value,
                        'reply_to': this.email.reply_to
                    },
                    'accessToken': ''
                }
            }).then(response => {
                console.log(response)
                this.email.first_name = ""
                this.email.last_name = ""
                this.email.reply_to = ""
                document.querySelector('#textbox').value = ""
                alert("Message was sent!")
            }).catch(error => {
                console.log(error.response.data)
                alert("There was an error.")
            })
        }
    },
    created: function() {    
        s = window.matchMedia("(max-width: 640px)")
        if (s.matches) {
            this.currentImageCarouselIndex = 0
            this.currentCarouselIndex = 0           
            this.currentLitterIndex = 0
            this.upcomingLitterIndex = 0
            this.pastLitterIndex = 0
            this.imageCarouselLimit = 0
            this.carouselLimit = 0
        }
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