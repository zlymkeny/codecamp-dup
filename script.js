{/* <div id="Here">
    <h3>Here is what our alumni say about freeCodeCamp:</h3>
    <p id="alumni">

     <img src="https://tse4.mm.bing.net/th/id/OIP.D7Z717v4s3WTMbHRAdCfqQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=""><br>
     <p id="names"> Sarah Chima</p>
     <p id="work"> Software Engineer at Chatdesk</p>
     <p>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>

    </p>

    <p id="alumni">
        
     <img src="https://www.all-things-photography.com/wp-content/uploads/2018/07/People-Photography-4-Large.jpg" alt=""><br>
     <p id="names"> Laura Debbie</p>
     <p id="work"> Software Engineer at Amazon</p>
     <p>"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."

</p>

 <p id="alumni">
        
     <img src="https://www.nme.com/wp-content/uploads/2021/02/Digga-D-Lead-Shot-1392x884.jpg" alt=""><br>
     <p id="names">Shotty Shane</p>
     <p id="work"> Pyrex chef at Can</p>
     <p>"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."

    </p><br>
    
</p> */}

const testimonials = [
    {
        name : "Shotty Shane",
        workplace : "Software Engineer at Amazon",
        img : "https://tse4.mm.bing.net/th/id/OIP.D7Z717v4s3WTMbHRAdCfqQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        text : '"Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."',
        
    },
    {
        name : "micro man",
        workplace : "Software Engineer at Church",
        img : "https://www.nme.com/wp-content/uploads/2021/02/Digga-D-Lead-Shot-1392x884.jpg",
        text : '"Its scary trap insidious. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."',
        
    },
    {
        name : "micro woman",
        workplace : "Engineer at rurch",
        img : "https://www.nme.com/wp-content/uploads/2021/02/Digga-D-Lead-Shot-1392x884.jpg",
        text : '"Its scary trap insidious. how do you expect us to know how to love. If money talks why the mandem still speak"',

        
    },
    
];

console.log(testimonials)

const container = document.getElementById("testimonial-card");

let output = "";
testimonials.forEach(person => {
    output += `
    <div>
    <div class ="testimonial-card">
    <img src="${person.img}" id="downpic">
    <div class="testimonialtext">
    <h5>${person.name}</h5>
    <strong>${person.workplace}</strong>
    <p>${person.text}</p>
    </div>
    </div>
    `
})

container.innerHTML = output;