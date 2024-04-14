// get the data
let users = [
    {
        profilepic: "https://images.unsplash.com/photo-1617058848582-5d852ad5be2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        displaypic: "https://images.unsplash.com/photo-1617059070087-d05ea39977dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 6,
        location: "Utter Predesh, india",
        name: "Harshita",
        age: "20",
        interest: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        }],
        bio: "Lorem ipsum dolor sit amet facilis deleniti  placeat nihil a! elit. Nam, optio,corrupti animi est qui cupiditate",
        isfriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1616790876844-97c0c6057364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBnaXJsfGVufDB8fDB8fHww",
        displaypic: "https://images.unsplash.com/photo-1618488221006-4ee92e2192cf?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 14,
        location: "Delhi NCR, india",
        name: "Sherya",
        age: "19",
        interest: [{
            icon: `<i class="ri-mic-fill"></i>`,
            interest: "Singing"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Painting"
        }],
        bio: "Lorem ipsum dolor sit consectetur adipisicing elit. Nam, facilis deleniti  sapiente, placeat nihil a!",
        isfriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1618374845648-162318f1e486?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypic: "https://images.unsplash.com/photo-1617059153946-97005c8b5dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        pendingMessage: 6,
        location: "Banglore, india",
        name: "Nishi",
        age: "24",
        interest: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Art"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisic cupiditate inventore nostrum provident,  a!",
        isfriend: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        displaypic: "https://images.unsplash.com/photo-1618149103301-9626efd3c38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 10,
        location: "Noida, india",
        name: "Avni",
        age: "22",
        interest: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Artist"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, optio,corrupti animi est qui cupiditate inventore facilis deleniti ea! Atqu!",
        isfriend: null
    },
];
function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;
function setData(index){
    select(".maincard img").src = users[index].displaypic;
    select(".incomingcard img").src = users[index]?.displaypic;


    select(".proflimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;


    let clutter = "";
    users[index].interest.forEach(function (interest) {
        clutter += `<div class="tag flex items-center bg-white/30 py-1 px-3 rounded-full gap-3">
${interest.icon}
<h3 class="text-sm tracking-tight capitalize"> ${interest.interest}</h3>
</div>`
    })
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}
(function setInital() {
    
    select(".maincard img").src = users[curr].displaypic;
    select(".incomingcard img").src = users[curr + 1]?.displaypic;

setData(curr);
     
    curr = 2;
})();


function imagechange(){
    if(! isAnimating){
        isAnimating = true;
    let tl = gsap.timeline({
        onComplete: function() {
            isAnimating = false;
          let main = select(".maincard");
          let incoming = select(".incomingcard"); 
          incoming.classList.remove("z-[2]");
          incoming.classList.add("z-[3]");
          incoming.classList.remove("incomingcard");


          main.classList.remove("z-[3]");
          main.classList.add("z-[2]");
          gsap.set(main,{
            scale: 1,
            opacity: 1,
          })
          if(curr === users.length) curr = 0;
          select(".maincard img").src = users[curr].displaypic;
          curr++;
          main.classList.remove("maincard");
          incoming.classList.add("maincard");
          main.classList.add("incomingcard");
        }
    });
   tl.to(".maincard",{
    scale: .5,
    opacity: 0,
    ease: Circ,
    duration: .9,
       },"a") 
       .from (".incomingcard",{
        scale: 1,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
           },"a") 
     }    
}
   let deny = select(".deny");
   let accept =  select(".accept");
   deny.addEventListener("click", function(){
     imagechange();
     setData(curr-1);
     gsap.from(".details .element",{
        y: "100",
        ease: Power4.easeInOut,
        duration: 1.5,
        stagger: .06,
        
    })
      
});

accept.addEventListener("click", function(){
    imagechange();
    setData(curr-1);
    gsap.from(".details .element",{
       y: "100",
       ease: Power4.easeInOut,
       duration: 1.5,
       stagger: .06,
       
   })
     
});


(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
       let div =  document.createElement("div");
       div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
       div.appendChild(element);
       select(".details").appendChild(div);
    })
})();
 
 