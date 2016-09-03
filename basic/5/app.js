//处理用户输入
new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            { text: 'html' }
        ]
    },
    methods: {
        addTodo: function() {
            var text = this.newTodo.trim();
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1)
        }
    }
})
