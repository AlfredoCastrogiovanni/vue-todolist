const { createApp } = Vue

createApp({
    data() {
        return {
            newToDoEl: "",
            toDoList: [
                {text: "Mangiare la pasta", done: false},
                {text: "Cucinare la pasta", done: false},
                {text: "Lavare le stoviglie", done: false},
                {text: "Pulire il bagno", done: false},
            ],
        }
    },

    methods: {
        addToDoEl(newEl) {
            newEl.length > 0 ? this.toDoList.push({text: newEl, done: false}) : alert("Insert valid text");
            this.newToDoEl = "";
        },
        removeToDoEl(index){ this.toDoList.splice(index, 1); },
        changeDoneStatus(element) { element.done = element.done == false ? true : false; },
        beautifier: text => text[0].toUpperCase() + text.trim().toLowerCase().slice(1)
    }
}).mount('#app')