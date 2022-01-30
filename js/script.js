const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question1
const cat = {complain:
    function(){
      console.log("Meow!")
    }
    };
    cat.complain();
    //Question2
    const heading = document.querySelector("h3");
    heading.innerHTML = "Updated heading";
    //Question3
    const headings = document.querySelectorAll("h3");
    
    for(let i = 0; i < headings.length; i++) {
        headings[i].style.font = "2em";
    }
    //Question4
    const heading = document.querySelector("subheading");
    content.innerHTML += "subheading";
    

