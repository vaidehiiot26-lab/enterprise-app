let cart=0;

const books={

story:[
{name:"The Alchemist",price:399},
{name:"Harry Potter",price:499},
{name:"The Hobbit",price:450},
{name:"Treasure Island",price:350},
{name:"Dracula",price:399},
{name:"Moby Dick",price:420},
{name:"Sherlock Holmes",price:500},
{name:"Peter Pan",price:320},
{name:"Jungle Book",price:300},
{name:"Robinson Crusoe",price:380}
],

romantic:[
{name:"Pride and Prejudice",price:299},
{name:"The Notebook",price:349},
{name:"Me Before You",price:450},
{name:"Love Story",price:399},
{name:"Dear John",price:420},
{name:"After",price:500},
{name:"Safe Haven",price:430},
{name:"Reminders of Him",price:480},
{name:"The Wedding",price:370},
{name:"Forever",price:350}
],

science:[
{name:"Cosmos",price:599},
{name:"A Brief History of Time",price:650},
{name:"Origin",price:700},
{name:"The Gene",price:550},
{name:"Sapiens",price:699},
{name:"Pale Blue Dot",price:600},
{name:"Astrophysics",price:750},
{name:"The Grand Design",price:620},
{name:"Evolution",price:560},
{name:"Physics Basics",price:500}
],

study:[
{name:"Data Structures",price:799},
{name:"DBMS",price:899},
{name:"OS Concepts",price:850},
{name:"Java Programming",price:650},
{name:"Python Programming",price:700},
{name:"Software Engineering",price:720},
{name:"Cloud Computing",price:800},
{name:"Web Technology",price:600},
{name:"AI Fundamentals",price:950},
{name:"Machine Learning",price:999}
],

networking:[
{name:"CCNA Guide",price:999},
{name:"Computer Networking",price:850},
{name:"TCP/IP",price:1200},
{name:"Linux Networking",price:900},
{name:"Cyber Security",price:950},
{name:"Ethical Hacking",price:1100},
{name:"Network Security",price:850},
{name:"Routing Basics",price:750},
{name:"Switching Concepts",price:700},
{name:"Wireless Networks",price:800}
],

children:[
{name:"Matilda",price:299},
{name:"Winnie the Pooh",price:250},
{name:"Pinocchio",price:300},
{name:"Cinderella",price:280},
{name:"Snow White",price:320},
{name:"Rapunzel",price:290},
{name:"Peter Rabbit",price:270},
{name:"Charlie Chocolate",price:350},
{name:"Little Prince",price:330},
{name:"Alice Wonderland",price:340}
]

};

function addCart(){
cart++;
document.getElementById("count").innerText=cart;
}

function showBooks(category){

let html="";

books[category].forEach(book=>{

html+=`
<div class="book">

<img src="https://picsum.photos/200/300?random=${Math.random()}">

<h3>${book.name}</h3>

<p>⭐⭐⭐⭐⭐</p>

<p>₹${book.price}</p>

<button class="buy" onclick="addCart()">
Add To Cart
</button>

</div>
`;
});

document.getElementById("books").innerHTML=html;
}

showBooks("story");