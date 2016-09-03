//处理用户输入
new Vue({
    el: '#app',
    data: {
        message : 'hello vue'
    },
    methods:{
    	reverseMessage :function(){
    		this.message = this.message.split('').reverse().join('')
    	}
    }
})
