document.addEventListener("DOMContentLoaded" , ()=>{
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const person = document.querySelector('.person');

const quotes = [
    {
        text: "A friend is someone who knows all about you and still loves you.",
        person : "― Elbert Hubbard" 
    },
    {
        text: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place",
        person : "― J.R. Ward, Crave"
    },
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        person : "― Marilyn Monroe"  
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        person : "― Albert Einstein"   
    },
    {
        text: "A room without books is like a body without a soul.",
        person : "― Marcus Tullius Cicero"  
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        person : "― Bernard M. Baruch"   
    },
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        person : "― Dr. Seuss"
    },
    {
        text: "Be the change that you wish to see in the world.",
        person : " ― Mahatma Gandhi"
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        person : "― J.K. Rowling, Harry Potter and the Goblet of Fire"   
    },
    {
        text: "Don't walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        person : "― Albert Camus"  
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        person : "― Maya Angelou"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        person : "― Oscar Wilde"   
    },
    {
        text: "I do the very best I know - the very best I can; and I mean to keep on doing so until the end.",
        person: "― Abraham Lincoln"
    },
    {
        text : "He travels the fastest who travels alone.",
        person : "~ Rudyard Kipling"
            },
            {
            text: "he question isn't who is going to let me; it's who is going to stop me.",
            person: "Ayn Rand"
            },
             {
            text:"Winning is not a sometime thing; it's an all the time thing." ,
            person: " Vince Lombardi "
            },
             {
            text:"I alone cannot change the world, but I can cast a stone across the water to create many ripples."  ,
            person: " Mother Teresa "
            },
             {
            text: "You become what you believe." ,
            person: " Oprah Winfrey "
            },
             {
            text: "You may be disappointed if you fail, but you are doomed if you don't try." ,
            person: " Beverly Sills "
            },
             {
            text:"It does not matter how slowly you go as long as you do not stop."  ,
            person: " Confucius "
            },
            {
          text: "Beware of what you set your heart upon…for it shall surely be yours.",
          person: "Ralph Waldo Emerson"
        },
        {
          text: "My heart might be bruised, but it will recover and become capable of seeing beauty of life once more. It’s happened before, it will happen again, I’m sure. When someone leaves, it’s because someone else is about to arrive—I’ll find love again.",
          "person": "Paulo Coelho"
        },
        {
          text: "The same light you see in others is shining within you, too.",
          person: "Morgan Harper Nichols"
        }
]
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    text.innerText = quotes[random].text;
    person.innerText = quotes[random].person;
});
});