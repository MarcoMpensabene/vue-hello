const {createApp} = Vue

const app = createApp({
    data() {
    return {
        msg : "Hello Vue sei molto figo" ,
        imgEl : "https://i.pinimg.com/736x/91/77/97/91779771e0c323b769b5468319754d3a.jpg",
        msgInp : "" 
    }
    }
})

app.mount('#app')