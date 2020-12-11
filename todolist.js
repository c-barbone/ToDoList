
    var button = document.getElementById('btn');
    var listId
    var todotab = localStorage.getItem('todolist');
    if(todotab !== null){
        let tab2 = JSON.parse(todotab);
        var listId = tab2.length;
    }
        else{
            var listId= 0;
        }

        // objet de génération de liste
        function toDo(whatToDo){
            this.content = function(){
                var list = document.createElement("li");
            list.id = 'li' + listId++;
            var value = whatToDo;
            var text = document.createElement('span');  
            text.innerHTML = value
            var btndel = document.createElement("button");
            btndel.innerHTML = "Supprimer";
            btndel.classList = "btn btn-outline-light"
            list.appendChild(text);
            list.appendChild(btndel);
            resultat.prepend(list); 
            btndel.addEventListener('click',function(){
                resultat.removeChild(list)
            });  
        }
            }
        var resultat = document.getElementById('resultat');
        let todo = []

            // Génération initiale de la liste
        var todotab = localStorage.getItem('todolist');
        if(todotab !== null){
        let todotabParced = JSON.parse(todotab)
        for(let i = 0; i <todotabParced.length; i++){
            var element = new toDo(todotabParced[i])
            element.content();
        }
        }

        // génération de la liste au clic

        btn.addEventListener("click", function(){

        var list = document.createElement("li");
        list.id = 'li' + listId++;
        var value = document.getElementById("task").value;
        var text = document.createElement("span");
        
        text.innerHTML = value
        var btndel = document.createElement("button");
        btndel.innerHTML = "Supprimer";
        btndel.classList = "btn btn-outline-light";
        list.appendChild(text);
        list.appendChild(btndel);
        resultat.prepend(list);
        todo.push(value);

        task.value = ''

        localStorage.setItem("todolist", JSON.stringify(todo))

        btndel.addEventListener("click",function(){
            resultat.removeChild(list)
        });
    });
