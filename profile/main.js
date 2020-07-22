const profile = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "susan.jpeg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "john.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "peter.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "billl.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

var profile_pic = document.getElementById('profilepic')
var username = document.getElementById('username')
var job = document.getElementById('job')
var bio = document.getElementById('bio')
var previousBtn = document.getElementById('previousBtn')
var nextBtn = document.getElementById('nextBtn')
var person = document.getElementById('person')

nextBtn.addEventListener('click',nextProfile)
previousBtn.addEventListener('click',previousProfile)

var counter = 1

//the fading animation function
function fadeAnimation (){
    //animation
    var t = setInterval(fade,100)

    //initializing the value of the opacity
    var opec = 0
    function fade() {
        if (opec >= 1) {
            clearInterval(t)
        } else {
            opec += 0.5

            username.style.opacity = opec
            job.style.opacity = opec
            bio.style.opacity = opec
            previousBtn.style.opacity = opec
            nextBtn.style.opacity = opec
            profile_pic.style.opacity = opec
        }
    }
}

function nextProfile(e) {
    e.preventDefault();
    counter += 1
    if (counter < 5) {
        console.log(counter)
        fadeAnimation()
        let display = profile[counter -1]
        console.log(display)


        //asigning elements
        person.src =display.img
        username.textContent = display.name
        job.textContent = display.job
        bio.textContent = display.text

    } else {
        counter = 1
        console.log(counter)
        fadeAnimation()
        let display = profile[counter -1]
        console.log(display)

        //asigning elements
        person.src = display.img
        username.textContent = display.name
        job.textContent = display.job
        bio.textContent = display.text
    }
}

function previousProfile(e) {
    e.preventDefault();
    counter -= 1
    if (counter > 0 ) {
        console.log(counter)
        fadeAnimation()
        let display = profile[counter -1]
        console.log(display)

        //asigning elements
        person.src =display.img
        username.textContent = display.name
        job.textContent = display.job
        bio.textContent = display.text
    } else {
        counter = 4
        console.log(counter)
        fadeAnimation()
        let display = profile[counter -1]
        console.log(display)

        //asigning elements
        person.src = display.img
        username.textContent = display.name
        job.textContent = display.job
        bio.textContent = display.text
    }
}