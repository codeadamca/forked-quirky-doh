window.onload = function()
{
    //AUDIO OF DOH!
    const aDoh = new Audio("homer_audio/doh_scale/a_doh.mp3");
    const bDoh = new Audio("homer_audio/doh_scale/b_doh.mp3");
    const cDoh = new Audio("homer_audio/doh_scale/c_doh.mp3");
    const dDoh = new Audio("homer_audio/doh_scale/d_doh.mp3");
    const eDoh = new Audio("homer_audio/doh_scale/e_doh.mp3");
    const fDoh = new Audio("homer_audio/doh_scale/f_doh.mp3");
    const gDoh = new Audio("homer_audio/doh_scale/g_doh.mp3");

    //Array to hold all my sound components.
    const dohArray = [aDoh,bDoh,cDoh,dDoh,eDoh,fDoh,gDoh];
    const numArray = [1,2,3,4,5,6,7]
    const removedAnswers = [];

    let selectedDoh = null;

    //Progress Bar Elements
    const leftCircle7 = document.querySelector("#leftProgress .circle7")
    const leftImg7 = document.querySelector("#leftProgress .img7")
    const leftActiveCircle7 = document.querySelector("#leftProgress .circle7 .circle")

    const rightCircle7 = document.querySelector("#rightProgress .circle7")
    const rightImg7 = document.querySelector("#rightProgress .img7")
    const rightActiveCircle7 = document.querySelector("#rightProgress .circle7 .circle")

    const leftCircle6 = document.querySelector("#leftProgress .circle6")
    const leftImg6 = document.querySelector("#leftProgress .img6")
    const leftActiveCircle6 = document.querySelector("#leftProgress .circle6 .circle")

    const rightCircle6 = document.querySelector("#rightProgress .circle6")
    const rightImg6 = document.querySelector("#rightProgress .img6")
    const rightActiveCircle6 = document.querySelector("#rightProgress .circle6 .circle")

    const leftCircle5 = document.querySelector("#leftProgress .circle5")
    const leftImg5 = document.querySelector("#leftProgress .img5")
    const leftActiveCircle5 = document.querySelector("#leftProgress .circle5 .circle")

    const rightCircle5 = document.querySelector("#rightProgress .circle5")
    const rightImg5 = document.querySelector("#rightProgress .img5")
    const rightActiveCircle5 = document.querySelector("#rightProgress .circle5 .circle")

    const leftCircle4 = document.querySelector("#leftProgress .circle4")
    const leftImg4 = document.querySelector("#leftProgress .img4")
    const leftActiveCircle4 = document.querySelector("#leftProgress .circle4 .circle")

    const rightCircle4 = document.querySelector("#rightProgress .circle4")
    const rightImg4 = document.querySelector("#rightProgress .img4")
    const rightActiveCircle4 = document.querySelector("#rightProgress .circle4 .circle")


    const leftCircle3 = document.querySelector("#leftProgress .circle3")
    const leftImg3 = document.querySelector("#leftProgress .img3")
    const leftActiveCircle3 = document.querySelector("#leftProgress .circle3 .circle")

    const rightCircle3 = document.querySelector("#rightProgress .circle3")
    const rightImg3 = document.querySelector("#rightProgress .img3")
    const rightActiveCircle3 = document.querySelector("#rightProgress .circle3 .circle")

    const leftCircle2 = document.querySelector("#leftProgress .circle2")
    const leftImg2 = document.querySelector("#leftProgress .img2")
    const leftActiveCircle2 = document.querySelector("#leftProgress .circle2 .circle")

    const rightCircle2 = document.querySelector("#rightProgress .circle2")
    const rightImg2 = document.querySelector("#rightProgress .img2")
    const rightActiveCircle2 = document.querySelector("#rightProgress .circle2 .circle")

    const leftCircle1 = document.querySelector("#leftProgress .circle1")
    const leftImg1 = document.querySelector("#leftProgress .img1")

    const rightCircle1 = document.querySelector("#rightProgress .circle1")
    const rightImg1 = document.querySelector("#rightProgress .img1")
    

    function updateProgress()
    {
        if(correctSelection === 1)
        {
            leftCircle1.style.display = "none"
            leftImg1.style.display = "block"

            rightCircle1.style.display = "none"
            rightImg1.style.display = "block"

            rightActiveCircle2.style.backgroundColor = "#FFD900"
            leftActiveCircle2.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 2)
        {
            leftCircle2.style.display = "none"
            leftImg2.style.display = "block"

            rightCircle2.style.display = "none"
            rightImg2.style.display = "block"

            rightActiveCircle3.style.backgroundColor = "#FFD900"
            leftActiveCircle3.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 3)
        {
            leftCircle3.style.display = "none"
            leftImg3.style.display = "block"

            rightCircle3.style.display = "none"
            rightImg3.style.display = "block"

            rightActiveCircle4.style.backgroundColor = "#FFD900"
            leftActiveCircle4.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 4)
        {
            leftCircle4.style.display = "none"
            leftImg4.style.display = "block"

            rightCircle4.style.display = "none"
            rightImg4.style.display = "block"

            rightActiveCircle5.style.backgroundColor = "#FFD900"
            leftActiveCircle5.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 5)
        {
            leftCircle5.style.display = "none"
            leftImg5.style.display = "block"

            rightCircle5.style.display = "none"
            rightImg5.style.display = "block"

            rightActiveCircle6.style.backgroundColor = "#FFD900"
            leftActiveCircle6.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 6)
        {
            leftCircle6.style.display = "none"
            leftImg6.style.display = "block"

            rightCircle6.style.display = "none"
            rightImg6.style.display = "block"

            rightActiveCircle7.style.backgroundColor = "#FFD900"
            leftActiveCircle7.style.backgroundColor = "#FFD900"
        }
        if(correctSelection === 7)
        {
            leftCircle7.style.display = "none"
            leftImg7.style.display = "block"

            rightCircle7.style.display = "none"
            rightImg7.style.display = "block"
        }
    }

    //Generate Random Number
    function useRndGen()
    {
        let randomNum = Math.floor(Math.random() * numArray.length);
        return randomNum
    }

    //Function to create random number after correct answer is selected
    function replaceSelectedDoh()
    {


        if(correctSelection === 7)
        {
            const gameScreen = document.getElementById('gameScreen');
            const resultScreen = document.getElementById('resultScreen');

            gameScreen.style.display = "none"
            resultScreen.style.display = "flex"
            return null
        }

        do 
        {
            randomDoh = dohArray[useRndGen()]

        }
        while
        (
            removedAnswers.includes(randomDoh)
        )

        

        return randomDoh;
    }
  



    //Start Button
    const startBtn = document.getElementById("startBtn")

    startBtn.addEventListener("click", function()
    {
        const homeScreen =  document.getElementById('homeScreen');
        const gameScreen = document.getElementById('gameScreen');

        homeScreen.style.display = "none";
        gameScreen.style.display = "flex";

       

        selectedDoh = dohArray[useRndGen()];

        playDohAudio = function()
        {
            selectedDoh.play()    
        }
        
        setTimeout(playDohAudio,1000);
    });


    /***** GAME SCREEN BUTTON INTERACTIONS *****/


    

    //CREATE and GET Buttons
    const aButton = document.getElementById("aButton");
    const aButtonFont = document.getElementById("aButtonFont");
    const bButton = document.getElementById("bButton");
    const bButtonFont = document.getElementById("bButtonFont");
    const cButton = document.getElementById("cButton");
    const cButtonFont = document.getElementById("cButtonFont");
    const dButton = document.getElementById("dButton");
    const dButtonFont = document.getElementById("dButtonFont");
    const eButton = document.getElementById("eButton");
    const eButtonFont = document.getElementById("eButtonFont");
    const fButton = document.getElementById("fButton");
    const fButtonFont = document.getElementById("fButtonFont");
    const gButton = document.getElementById("gButton");
    const gButtonFont = document.getElementById("gButtonFont");

    const replayDoh = document.getElementById("replayDohBtn")


    let correctSelection = 0;
    let clickCounter = 0; 

    //End Calculations

    let percentResult = document.getElementById("percent")

    function updatePercent()
    {
        let percent = correctSelection / clickCounter * 100;
        percentResult.innerHTML = percent.toFixed(1)
    }
    

    






    //BUTTONS Functionality

    aButton.addEventListener("click", function()
    {
        if(selectedDoh === aDoh)
        {
            //Tally up correct answer clicked
            correctSelection += 1;
            clickCounter += 1;

            updatePercent()
            updateProgress()

            //Add to the correct answer array
            removedAnswers.push(aDoh);

            //Selects new audio clip to play
            selectedDoh =  replaceSelectedDoh()

            //Plays newly selected audio with a 1 second delay
            setTimeout(playDohAudio,1000);

            //Remove color from button
            aButton.style.backgroundColor = "grey";
            aButtonFont.style.color = "white";

        }
        else
        {   
            clickCounter += 1;

            aButton.classList.add("shake");
            aButton.addEventListener("animationend", () => 
                {
                    aButton.classList.remove("shake");
                }
            );
        }
        
    })

    bButton.addEventListener("click", function()
    {
        if(selectedDoh === bDoh)
        {
            //Tally up correct answer clicked
            correctSelection += 1;
            clickCounter += 1;

            updatePercent()
            updateProgress()

            //Add to the correct answer array
            removedAnswers.push(bDoh);

            //Selects new audio clip to play
            selectedDoh =  replaceSelectedDoh()

            //Plays newly selected audio with a 1 second delay
            setTimeout(playDohAudio,1000);

            //Remove color from button
            bButton.style.backgroundColor = "grey";
            bButtonFont.style.color = "white";

        }
        else
        {   
            clickCounter += 1;

            bButton.classList.add("shake");
            bButton.addEventListener("animationend", () => 
                {
                    bButton.classList.remove("shake");
                }
            );
        }  
    })

    cButton.addEventListener("click", function()
    {
        if(selectedDoh === cDoh)
        {
            //Tally up correct answer clicked
            correctSelection += 1;
            clickCounter += 1;

            updatePercent()
            updateProgress()


            //Add to the correct answer array
            removedAnswers.push(cDoh);

            //Selects new audio clip to play
            selectedDoh =  replaceSelectedDoh()

            //Plays newly selected audio with a 1 second delay
            setTimeout(playDohAudio,1000);

            //Remove color from button
            cButton.style.backgroundColor = "grey";
            cButtonFont.style.color = "white";

        }
        else
        {   
            clickCounter += 1;

            cButton.classList.add("shake");
            cButton.addEventListener("animationend", () => 
                {
                    cButton.classList.remove("shake");
                }
            );
        }  
    })

    dButton.addEventListener("click", function()
    {
        if(selectedDoh === dDoh)
        {
            //Tally up correct answer clicked
            correctSelection += 1;
            clickCounter += 1;

            updatePercent()
            updateProgress()


            //Add to the correct answer array
            removedAnswers.push(dDoh);

            //Selects new audio clip to play
            selectedDoh =  replaceSelectedDoh()

            //Plays newly selected audio with a 1 second delay
            setTimeout(playDohAudio,1000);

            //Remove color from button
            dButton.style.backgroundColor = "grey";
            dButtonFont.style.color = "white";

        }
        else
        {   
            clickCounter += 1;

            dButton.classList.add("shake");
            dButton.addEventListener("animationend", () => 
                {
                    dButton.classList.remove("shake");
                }
            );
        }  
    })

    eButton.addEventListener("click", function()
        {
            if(selectedDoh === eDoh)
            {
                //Tally up correct answer clicked
                correctSelection += 1;
                clickCounter += 1;

                updatePercent()
                updateProgress()


                //Add to the correct answer array
                removedAnswers.push(eDoh);

                //Selects new audio clip to play
                selectedDoh =  replaceSelectedDoh()

                //Plays newly selected audio with a 1 second delay
                setTimeout(playDohAudio,1000);

                //Remove color from button
                eButton.style.backgroundColor = "grey";
                eButtonFont.style.color = "white";

            }
            else
            {   
                clickCounter += 1;

                eButton.classList.add("shake");
                eButton.addEventListener("animationend", () => 
                {
                    eButton.classList.remove("shake");
                }
            );
            }  
        })

        fButton.addEventListener("click", function()
        {
            if(selectedDoh === fDoh)
            {
                //Tally up correct answer clicked
                correctSelection += 1;
                clickCounter += 1;

                updatePercent()
                updateProgress()


                //Add to the correct answer array
                removedAnswers.push(fDoh);

                //Selects new audio clip to play
                selectedDoh =  replaceSelectedDoh()

                //Plays newly selected audio with a 1 second delay
                setTimeout(playDohAudio,1000);

                //Remove color from button
                fButton.style.backgroundColor = "grey";
                fButtonFont.style.color = "white";

            }
            else
            {   
            clickCounter += 1;
                fButton.classList.add("shake");
                fButton.addEventListener("animationend", () => 
                {
                    fButton.classList.remove("shake");
                }
            );
            }  
        })

        gButton.addEventListener("click", function()
        {
            if(selectedDoh === gDoh)
            {
                //Tally up correct answer clicked
                correctSelection += 1;
                clickCounter += 1;

                updatePercent()
                updateProgress()


                //Add to the correct answer array
                removedAnswers.push(gDoh);

                //Selects new audio clip to play
                selectedDoh =  replaceSelectedDoh()

                //Plays newly selected audio with a 1 second delay
                setTimeout(playDohAudio,1000);

                //Remove color from button
                gButton.style.backgroundColor = "grey";
                gButtonFont.style.color = "white";

            }
            else
            {   
                clickCounter += 1;
                gButton.classList.add("shake");
                gButton.addEventListener("animationend", () => 
                {
                    gButton.classList.remove("shake");
                }
            );
            }  
        })

        //REPLAY BUTTON
        replayDoh.addEventListener("click", function(){
            playDohAudio()
    })



    // REPLAY GAME FUNCTION
    const playAgainBtn = document.getElementById('playAgainBtn')
    
    playAgainBtn.addEventListener("click", function(){
        
        
        const resultScreen = document.getElementById('resultScreen');
        const gameScreen = document.getElementById('gameScreen');

        resultScreen.style.display = "none"
        gameScreen.style.display = "flex"

        clickCounter = 0
        correctSelection = 0

        removedAnswers.length = 0;

        aButton.style.backgroundColor = "";
        aButtonFont.style.color = "";
        bButton.style.backgroundColor = "";
        bButtonFont.style.color = "";
        cButton.style.backgroundColor = "";
        cButtonFont.style.color = "";
        dButton.style.backgroundColor = "";
        dButtonFont.style.color = "";
        eButton.style.backgroundColor = "";
        eButtonFont.style.color = "";
        fButton.style.backgroundColor = "";
        fButtonFont.style.color = "";
        gButton.style.backgroundColor = "";
        gButtonFont.style.color = "";

        // RESETS Left Progress
        leftCircle1.style.display = "block"
        leftImg1.style.display = "none"
        leftCircle2.style.display = "block"
        leftImg2.style.display = "none"
        leftCircle3.style.display = "block"
        leftImg3.style.display = "none"
        leftCircle4.style.display = "block"
        leftImg4.style.display = "none"
        leftCircle5.style.display = "block"
        leftImg5.style.display = "none"
        leftCircle5.style.display = "block"
        leftImg5.style.display = "none"
        leftCircle6.style.display = "block"
        leftImg6.style.display = "none"
        leftCircle7.style.display = "block"
        leftImg7.style.display = "none"

        //RESET Right Progress
        rightCircle1.style.display = "block"
        rightImg1.style.display = "none"
        rightCircle2.style.display = "block"
        rightImg2.style.display = "none"
        rightCircle3.style.display = "block"
        rightImg3.style.display = "none"
        rightCircle4.style.display = "block"
        rightImg4.style.display = "none"
        rightCircle5.style.display = "block"
        rightImg5.style.display = "none"
        rightCircle5.style.display = "block"
        rightImg5.style.display = "none"
        rightCircle6.style.display = "block"
        rightImg6.style.display = "none"
        rightCircle7.style.display = "block"
        rightImg7.style.display = "none"

        //RESET Progress Circles
        rightActiveCircle2.style.backgroundColor = ""
        leftActiveCircle2.style.backgroundColor = ""
        rightActiveCircle3.style.backgroundColor = ""
        leftActiveCircle3.style.backgroundColor = ""
        rightActiveCircle4.style.backgroundColor = ""
        leftActiveCircle4.style.backgroundColor = ""
        rightActiveCircle5.style.backgroundColor = ""
        leftActiveCircle5.style.backgroundColor = ""
        rightActiveCircle6.style.backgroundColor = ""
        leftActiveCircle6.style.backgroundColor = ""
        rightActiveCircle7.style.backgroundColor = ""
        leftActiveCircle7.style.backgroundColor = ""

        selectedDoh = dohArray[useRndGen()];

        playDohAudio = function()
        {
            selectedDoh.play()    
        }
        
        setTimeout(playDohAudio,1000);

    })
};


