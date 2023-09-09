var color = [$(".box")[0], $(".box")[1], $(".box")[2], $(".box")[3]];
var step = [];
var userclicked = [];
var level = 0;
var start = false;

var green = new Audio("./sounds/green.mp3");
var red = new Audio("./sounds/red.mp3");
var yellow = new Audio("./sounds/yellow.mp3");
var blue = new Audio("./sounds/blue.mp3");
var wrong = new Audio("./sounds/wrong.mp3");


$("body").keydown(function(){
    if(!start){
        nextStep();
        start = true;
    }
})

$(".box").click(function(event){
    push(event.target);
    userclicked.push(event.target);
    console.log(userclicked);
    checkAnswer();
});


function buttonFlash(button){
    //button.fadeOut().fadeIn();
    switch(button){
        case $(".box")[0]:
            green.play();
            $(".green").fadeOut(400).fadeIn(400);
            break;
        case $(".box")[1]:
            red.play();
            $(".red").fadeOut(400).fadeIn(400);
            break;
        case $(".box")[2]:
            yellow.play();
            $(".yellow").fadeOut(400).fadeIn(400);
            break;
        case $(".box")[3]:
            blue.play();
            $(".blue").fadeOut(400).fadeIn(400);
            break;
}
}

function push(button){
    switch(button){
        case $(".box")[0]:
            green.play();
            $(".green").addClass("pressed");
            setTimeout(() => {$(".green").removeClass("pressed")}, 100);
            break;
        case $(".box")[1]:
            red.play();
            $(".red").addClass("pressed");
            setTimeout(() => {$(".red").removeClass("pressed")}, 100);
            break;
        case $(".box")[2]:
            yellow.play();
            $(".yellow").addClass("pressed");
            setTimeout(() => {$(".yellow").removeClass("pressed")}, 100);
            break;
        case $(".box")[3]:
            blue.play();
            $(".blue").addClass("pressed");
            setTimeout(() => {$(".blue").removeClass("pressed")}, 100);
            break;
}
}

function nextStep(){
    userclicked = [];
    var newstep = color[Math.floor(Math.random() * 4)];
    buttonFlash(newstep);
    step.push(newstep);
    level = level + 1;
    $("h1").text("LEVEL " + level);
}

/*
function checkAnswer(){
    for (let i=0; i<userclicked.length; i++){
        if (userclicked[i] === step[i]){
            console.log("success");
            if (userclicked.length === step.length){
                nextStep();
        }
        } else {
            console.log("wrong");
            $("body").addClass("wrong");
            setTimeout(() => {$("body").removeClass("wrong")}, 200);
            start = false;
            step = [];
            userclicked = [];
            level = 0;
            $("h1").text("GAME OVER Press any key to restart");
            wrong.play();
            break;
        }
    }
}
*/
function checkAnswer(){
    let correct = true; // 添加一个标志来跟踪是否所有按钮都正确
    
    for (let i = 0; i < userclicked.length; i++){
        if (userclicked[i] === step[i]){
            console.log("success");
        } else {
            console.log("wrong");
            correct = false; // 如果有一个按钮按错，将标志设置为 false
            break; // 立即退出循环，不再检查后续的按钮
        }
    }
    
    if (correct) { // 如果所有按钮都正确
        if (userclicked.length === step.length){
            nextStep();
        }
    } else { // 如果有按钮按错
        $("body").addClass("wrong");
        setTimeout(() => {$("body").removeClass("wrong")}, 200);
        start = false;
        step = [];
        userclicked = [];
        level = 0;
        $("h1").text("GAME OVER Press any key to restart");
        wrong.play();
    }
}

