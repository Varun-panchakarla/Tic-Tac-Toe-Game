const box = document.querySelectorAll(".box");
const ms = document.querySelector(".ms");
const ms_con = document.querySelector(".ms-con");
const container = document.querySelector(".container");


let turn0 = true;
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerHTML = turn0 ? "O" : "X";
        turn0 = !turn0;
        box.disabled = true;

        checkwinner();
    });
});
const winner = (winner) =>{
    ms.innerHTML = `🎉 Congrats! The winner is ${winner} 🎊`;
    ms_con.classList.remove('hide');
    container.classList.add('hide');
}
const draw = () => {
    ms.innerHTML = "It's a draw!";
    ms_con.classList.remove('hide');
}
const checkwinner = () => {
    wins.forEach((win) => {
        const post1 = box[win[0]].innerHTML;
        const post2 = box[win[1]].innerHTML;
        const post3 = box[win[2]].innerHTML;
        if(post1 !== "" && post2 !== '' && post3 !== '') {
            if (post1 === post2 && post2 === post3) {
            winner(post1);
            reset();
            }
            if(post1 !== post2 && post2 !== post3 && post1 !== post3) {
            draw();
        }
        }
    });
};

function reset(){
    box.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
        });
        turn0 = true;
};
function newGame(){
    reset();
    ms_con.classList.add('hide');
    container.classList.remove('hide');
}