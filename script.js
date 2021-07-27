//create function for event hover that will be added to all of the 6 brew method icons. When the mouse hovers over the icon, the icon will expand to a bigger circle and give a bit more detail
//about brew method in question

function expandIcon(){
    let centerCircle = document.querySelector(".centerIcon");
    let brewMethodInfo;
    if(this.innerHTML === "CAFEC"){
        brewMethodInfo = "The osmotic flow method.";
    }
    if(this.innerHTML === "April Coffee"){
        brewMethodInfo = "Let's see how April Coffee brews with the v60!";
    }
    if(this.innerHTML === "Tetsu Kasuya"){
        brewMethodInfo = "The 4:6 method.";
    }
    if(this.innerHTML === "Onyx Coffee"){
        brewMethodInfo = "This is how Onyx Coffee does it!";
    }
    if(this.innerHTML === "Scott Rao"){
        brewMethodInfo = "Scott Rao's personal v60 technique.";
    }
    if(this.innerHTML === "James Hoffman"){
        brewMethodInfo = "The ultimate v60 method by the one and only James Hoffman.";
    }
    centerCircle.innerHTML = brewMethodInfo;
}
function retractIcon(){
    let centerCircle = document.querySelector(".centerIcon");
    centerCircle.innerHTML = '<img src="graphics/v60-logo.png" alt="v60Logo" width="250">';
}

let outerIcons = [];
for(let i=1;i<=6;i++){
    outerIcons.push(document.querySelector(".icon"+i));
}

outerIcons.forEach(eachCircle => {
    eachCircle.addEventListener("mouseover", expandIcon);
    eachCircle.addEventListener("mouseout", retractIcon);
});

