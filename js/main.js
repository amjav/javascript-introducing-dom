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
    
})();

