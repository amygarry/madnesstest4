const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A golden egg of opportunity falls into your lap this month.",
    "A lifetime friend shall soon be made.",
    "A lifetime of happiness lies ahead of you.",
    "A light heart will carry you through hard times ahead.",
    "A new perspective will come with the new year.",
    "A pleasant surprise is waiting for you.",
    "All the effort you are making will ultimately pay off.",
    "All the troubles you have will pass away very quickly.",
    "All will go well with your new project.",
    "All your hard work will soon pay off.",
    "An acquaintance of the past will affect you in the near future.",
    "An important person will offer you support.",
    "Be careful or you could fall for some tricks today.",
    "Bide your time, for success is near.",
    "Change is happening in your life, so go with the flow!",
    "Don’t worry; prosperity will knock on your door soon.",
    "Everywhere you choose to go, friendly faces will greet you.",
    "From now on your kindness will lead you to success.",
    "Good news will come to you by mail.",
    "Happy life is just in front of you." 
]
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

//then we come over here, we get what they have sent us and we push it to the fortunes array. 
    submitFortune: (req, res)=>{
        fortunes.push(req.body)
        res.send(200).send(req.body)

    },

    getAllFortunes: (req, res) => {
       res.status(200).send(fortunes)
    },

}