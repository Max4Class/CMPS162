
//function that stores the quotes and author
(function(){
    const quotes = [
        {
            quote:
                "La La Land grossed $151,101,803 in the US box office.",
            author: " - IMDB"
        },
        {
            quote:
                "Amélie grossed $33,225,499 in the US box office.",
            author: " - IMDB"
        },
        {
            quote:
                "Jo Jo Rabbit grossed $33,370,906 in the US box office.",
            author: " - IMDB"
        },
        {
            quote:
                "Parasite grossed $53,369,749 in the US box office.",
            author: " - IMDB"
        },
        {
            quote:
                "Your Name grossed $5,017,246 in the US box office.",
            author: " - IMDB"
        },
        {
            quote:
                "The Hateful Eight grossed $54,117,416 in the US box office.",
            author: " - IMDB"
        }
    ];



    const btn = document.getElementById("generate-btn")

    //Event for the button
    btn.addEventListener("click", function(){
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    })

})();