// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
           newToDo: '', 
           toDoList: [
               'Fare la spesa ore 8:00',
               'Corso Boolean ore 9:30',
               'Allenamenti ore 18:00',
               'Palestra ore 20:00'
           ]
        },
        methods: {
            addToDo() {
                if (this.newToDo != '') {
                    this.toDoList.push(this.newToDo);
                    this.newToDo = '';
                } else {
                    alert('Inserisci un compito')
                };
            },
            deleteToDo(index) {
                console.log(index)
                this.toDoList.splice(index, 1);
            }
        }
    }
) 