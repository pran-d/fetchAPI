const getTodos = async() => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    return data;
}

function call(consent){
    getTodos()
        .then(data => {
            let txt;
            let para = document.createElement("p");
            let element=document.getElementById("new");
            let nochoice = document.getElementById("consent");
            nochoice.innerText="";
            element.innerHTML="";
            if(!consent)
            {
                para = document.createElement("p");
                txt = document.createTextNode("Too bad. You have no choice.");
                nochoice.appendChild(txt);
                txt = document.createElement('br');
                nochoice.appendChild(txt);
            }
            console.log('resolved', data);
            if(data.type=='twopart')
            {
                txt = document.createTextNode(data.setup);
                para.appendChild(txt);
                txt = document.createElement('br');
                para.appendChild(txt);
                txt = document.createTextNode(data.delivery);
                para.appendChild(txt);
            }
            else
            {
                txt = document.createTextNode(data.joke);
                para.appendChild(txt);
            }        
            element.appendChild(para);
        })
        .catch(error => console.log('rejected', error));
}