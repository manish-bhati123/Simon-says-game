        let gameseq =[];
        let user =[];
        let btns =["red","green","yellow","blue"]

        let started =false;
        let Level =0;
        let h2 =document.querySelector("h2");


        document.addEventListener("keypress",function(){
            if(started == false){
                console.log("game is started")
                started=true;
            }
            Levelup();

        });

        function btnFlash(btn){
        btn.classList.add("flase")
            setTimeout(function(){
                btn.classList.remove("flase");
            },250);
        }

        function userFlash(btn){
            btn.classList.add("flaseuser")
                setTimeout(function(){
                    btn.classList.remove("flaseuser");
                },250);
            }

        function Levelup(){
            user=[];
            Level++;
            h2.innerText =`Level ${Level}`;
            let randIdx = Math.floor(Math.random()*4);
            let randColor =btns[randIdx];
            let randbtn =document.querySelector(`.${randColor}`);
            // console.log(randIdx);
            // console.log(randColor);
            // console.log(randbtn);
            btnFlash(randbtn);
            gameseq.push(randColor);
            console.log(gameseq);
        }
        function checkans(idx){
     if(user[idx]=== gameseq[idx]){
        if(user.length==gameseq.length){
            Levelup();

        }
     }
     else{
        h2.innerHTML =`game Over! your score was <b>${Level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
     }
        }
        function btnpress(){
            let btn =this;
            userFlash(btn)
            userColor =btn.getAttribute("id");
            user.push(userColor);
            checkans(user.length-1);

         
            
        }

        let allbtns =document.querySelectorAll(".btn");

        for(btn of allbtns){
            btn.addEventListener("click",btnpress)
        }
