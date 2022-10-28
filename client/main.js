const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#foturneButton")
const fortuneSbmt  = document.querySelector("#submitFortune")
const seeAllBtn = document.querySelector("#seeAll")
const fortuneInpt = document.querySelector("#fortuneTxt")
const body = document.querySelector('body')
const form = document.querySelector('#form')
const deleteBtn = document.querySelector('#deleteFortune')
const spicyForm = document.querySelector('#spicyForm')
const spicyInput = document.querySelector('#spicyInput')
const clearBtn = document.querySelector("#clear")

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
}

function submitFortune (event){
    event.preventDefault()

    let myBody = {
        newFortune: fortuneInpt.value
    }

    axios.post("http://localhost:4000/api/fortuneSubmit/", myBody)
   
    .then((response) =>{
        let db = response.data
        console.log(db)
        alert(db + ", was added to the list of fortunes!")
    })
    .catch((err)=>{
        console.log(err)
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

function deleteFortune (){
    axios.delete("http://localhost:4000/api/delete/")
    .then(res =>{
        let lastFortune = res.data
        // console.log(lastFortune)
        alert(lastFortune + " was deleted")
    })
}

function addSomeSpice (event){
    event.preventDefault()

    let myBody = {
        spice: spicyInput.value
    }

    axios.put("http://localhost:4000/api/putspice", myBody)
    .then (res =>{
        console.log(res)
        alert("the new fortune now says:" + res.data)
    })
}

function clearDOM (){
    const div = document.querySelector(div)
    div.remove(div)
}
 
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit',submitFortune)
seeAllBtn.addEventListener('click', seeAll)
deleteBtn.addEventListener('click', deleteFortune)
spicyForm.addEventListener('submit', addSomeSpice)
clearBtn.addEventListener('click',clearDOM)