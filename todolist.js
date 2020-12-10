
    var button = document.getElementById('btn');
    var listId= 0;
    
    button.addEventListener('click', function () {
        var resultat = document.getElementById('resultat');
        var list = document.createElement("li");
        list.id = 'li' + listId++;
        var value = document.getElementById("task").value;
        var text = document.createElement('span');
        
        text.innerHTML = value
        var btndel = document.createElement("button");
        btndel.innerHTML = "Supprimer";
        btndel.classList = "delete";
        list.appendChild(text);
        list.appendChild(btndel);
        resultat.appendChild(list);
        task.value = ''
        // todotab.push()
        //     localstorage.setItem(toto, JSON.stringify(todotab)) 
        resultat.appendChild(list);
        

        btndel.addEventListener('click',function(){
       
            resultat.removeChild(list)
        
    });
});
