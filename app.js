let cat={ 
  name: "Mr. Snibbly",
  moods: [{
    mood: "Happy",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9"
    },
    {
      mood: "Irritated",
      image: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs="
    }, 
    {
      mood: "Bitey",
      image: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6"
     },
     {
      mood: "Blood Thirsty",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS"
     }],
  petCount: 0
}

//responsible for taking the values of the cat object and printing them onto the page
function drawCat(){
  let index = Math.floor((Math.random() * 3)+1)
  if(cat.petCount == 0){
    index = 0
  }
  let moodObj = cat.moods[index]


  let nameElem = document.querySelector("#cat-name")
  let moodElem = document.querySelector("#cat-mood")
  let petCountElem = document.querySelector("#cat-pet-count")
  let imageElem = document.querySelector("#cat-image")
  nameElem.innerHTML = cat.name
  moodElem.innerHTML = moodObj.mood
  petCountElem.innerHTML = cat.petCount.toString()
  imageElem.src = moodObj.image
}

//responsible for increasing the count of the petCount property on the cat object
function petCat(){
  cat.petCount++
  drawCat()
} 


function catnip(){
  cat.petCount = 0
  drawCat()
}

drawCat()