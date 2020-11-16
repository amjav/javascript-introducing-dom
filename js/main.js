//immediately invokes a function (IIFE)
(function(){

    //alert("Hello")
    console.info("Hello console");
    console.dir(document);
    // replaces the inner html in the webpage by getting the Id.
    document.getElementById("myHeading").innerHTML = "Amina's Website";
    
    //will only find the first match.
    //it will then apply the class currentPage attribute (in css) to the nav li selected in the query selector
    document.querySelector("nav ul li").setAttribute("class", "currentPage");

    //will select the fift nav ul li a and change the href attribute to take the user to the google page
    //document.querySelector("nav ul li a").setAttribute("href", "http://www.google.co.uk");

    //DOM event
    // document.getElementById("myTestEvent").onclick = function(){
    //     console.info("I was clicked!");
    // }


    //function referenced for click attribute
    //gets the id then when the attribute is clicked myFunction() runs
    document.getElementById("myTestEvent").addEventListener("click", myFunction)

    //seperate function
    //event handler role is to handle events 
    //expose by putting in a parameter name in
    function myFunction(ev)
    {
        console.info("I was clicked")

        //tell us the event that occured and much more
        console.dir(ev);
    }

    //this is one way of changing the background using selectors
    // document.querySelector(".red").addEventListener("click", function(){
    //     document.querySelector("body").setAttribute("class","redBack")
    // })

    //node list generated
    var colourButtons = document.querySelectorAll(".colPicker")

    //node list is looped around and attaches events to everything in the 
    //list.
    //it calls the same function by exposing the same object
    for(var i=0; i< colourButtons.length; i++){
        colourButtons[i].addEventListener("click", chgColour)
    }


    //work out which one was clicked on and apply the class of colour
    function chgColour(ev){
        console.info(ev.target.classList[0])
        var colourPicked = ev.target.classList[0] + "Back"
        var bodyElement = document.querySelector("body")
        if(colourPicked === "resetBack"){
            bodyElement.removeAttribute("class")
        }else{
            bodyElement.setAttribute("class", colourPicked)
        }
    }

    //image rotator
    var imageAr = ['images/view1.jpg',
                    'images/view2.jpg',
                    'images/view3.jpg',
                    'images/view4.jpg', 
                    'images/view5.jpg', 
                    'images/view6.jpg'
    ];

    
    var counter = 0;

    //makes sure an image is there straight away
    chgImage();

    setInterval(chgImage(), 1000)
    
    function chgImage(){
        
        counter++
        if (counter === imageAr.length){
             counter = 0;
        }
        document.getElementById("myImages").setAttribute("src", imageAr[counter])  
    }

    //console.dir(window.location.href);

    var url = window.location.href
    //console.dir(url.split("/")).pop();

    var filename = url.split("/").pop();
    console.info(filename)
    
})();

