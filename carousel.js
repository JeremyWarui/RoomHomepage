(function (d) {

    // variables
    const cardsClass = ".card";
    const cards = document.querySelectorAll(cardsClass);
    const no_of_cards = cards.length;
    let current_card = 0;

    // disable hover
    const disableOnHover = document.querySelector("#disable-hover");
    // let interval = setInterval(nextCard, 10000);




    // set the next and previous and current classes
    function setClasses() {
        cards[no_of_cards - 1].classList.add("prev");
        cards[0].classList.add("current");
        cards[1].classList.add("next")
    }

    // set addevent listeners

    function setEventListeners() {
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        prev.addEventListener("click", previousCard);
        next.addEventListener("click", nextCard);

    }
    // automate the carousel after 5seconds

    setInterval(nextCard, 20000);


    // DISABLE AUTMATION ON HOVER
    // disableOnHover.addEventListener("mouseover", () => {
    //     clearInterval(interval)
    // }
    // );


    // the funcitons to call next card or previous card

    function previousCard() {

        // if its first card then go t the last one or else decrement
        if (current_card === 0) {
            current_card = (no_of_cards - 1);
        } else {
            current_card--;
        }
        // then move the card
        moveCardTo(current_card);

        let interval = setInterval(nextCard, 20000);
        clearInterval(interval);


    }


    function nextCard() {


        // if its the last card set to the first or else increment
        if (current_card === (no_of_cards - 1)) {
            current_card = 0;
        } else {
            current_card++;
        }

        moveCardTo(current_card);

        let interval = setInterval(nextCard, 20000);
        clearInterval(interval);


    }


    // now the main function that wraps all the functions t move our carousel cards moveCardTo



    function moveCardTo(current_card) {
        let nextCard = current_card + 1;
        let prevCard = current_card - 1;


        //     set the cards
        if (current_card === 0) {
            prevCard = no_of_cards - 1;
            nextCard = 1;
        } else if (current_card === no_of_cards - 1) {
            nextCard = 0;
            prevCard = 1;
        }

        //    set classes
        cards[nextCard].className = "card next";
        cards[prevCard].className = "card prev";
        cards[current_card].className = "card current";
    }




    // lets make evrything work now

    function startCarousel() {
        setClasses();
        setEventListeners();
        // set moving to false
    }



    // call the fucntion    
    startCarousel();




}(document));



