const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#foturneButton")
const fortuneSbmt  = document.querySelector("#submitFortune")
const seeAllBtn = document.querySelector("#seeAll")
const fortuneInpt = document.querySelector("#fortuneTxt")
const body = document.querySelector('body')

let newFortune = fortuneInpt.value

let myBod = {
    newFortune
}


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            // const data = res.data;
            alert(res.data);
    });
};

function getFortune (){
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        alert(res.data)
    })
};

// once they submit it I want to put/post it to the database 
//I did a .put 
//once it is put there I want there to be an alert that says whatever their function was and then the statement was added to the databas
//I don't know how to do this 
// I don't know how to create a body, and since I don't know how to create a body I can't send anything. 
function submitFortune (event){
event.preventDefault()
    axios.post("http://localhost:4000/api/fortuneSubmit/")
    .then(res =>{
        console.log(res)
        alert(res.data)
    })
}

function seeAll (fortunes){
    axios.get("http://localhost:4000/api/fortuneGetAll/")
    .then(res =>{
        console.log(res)
        let allFortunes = document.createElement('div')
        allFortunes.innerHTML = `<p>${res.data}</p>`
        body.appendChild(allFortunes)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fortuneSbmt.addEventListener('click',submitFortune)
seeAllBtn.addEventListener('click', seeAll)