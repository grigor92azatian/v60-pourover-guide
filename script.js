//create function for event hover that will be added to all of the 6 brew method icons. When the mouse hovers over the icon, the icon will expand to a bigger circle and give a bit more detail
//about brew method in question

function expandIcon(){
    
}


let outerIcons = [];
for(let i=1;i<=6;i++){
    outerIcons.push(document.querySelector(".icon"+i));
}

outerIcons.forEach(eachCircle => {
    eachCircle.addEventListener("mouseover", function(){
        eachCircle.style.backgroundColor = "lightpink";
    });
    eachCircle.addEventListener("mouseout", function(){
        eachCircle.style.backgroundColor = "lightblue";
    })
});
