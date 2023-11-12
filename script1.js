var audio = new Audio('assets1/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918849248550'> <div class='socialItem' id='call'><img class='socialItemI' src='../images1/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:bhdigitalsolutions172@gmail.com'> <div class='socialItem'><img class='socialItemI' src='../images1/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://www.facebook.com/bhdigitalsolutions/'> <div class='socialItem'><img class='socialItemI' src='../images1/facebook.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/916363549133'> <div class='socialItem'><img class='socialItemI' src='../images1/whatsapp.svg' alt=''></div><a target='_blank' href='https://www.instagram.com/bhdigitalsolutions/'> <div class='socialItem'><img class='socialItemI' src='../images1/instagram.svg' alt=''></div><a target='_blank' href='https://www.linkedin.com/company/bh-digital-solutions/'> <div class='socialItem'><img class='socialItemI' src='../images1/linkedin.svg' alt=''></div>";


var resumeString = "<img src='../images1/Business_Profile_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='../images1/pdf.png'><label>Our Business Profile.pdf</label></div><a href='../assets1/Our_Business_Profile.pdf' download='Our_Business_Profile.pdf'><img class='download' src='../images1/downloadIcon.svg'></a></div>";

var imagesString = "<img src='../images1/sample image thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='../images1/pdf.png'><label>Festival Sample Images</label></div><a href='../assets1/sample images.pdf' download='Festival_sample_images.pdf'><img class='download' src='../images1/downloadIcon.svg'></a></div>";


var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name = "";
    if (inputText.toLowerCase().includes("my name is")) {
        name = inputText.substring(inputText.indexOf("is") + 2);
        if (name.toLowerCase().includes("BH Digital Solutions")) {
            sendTextMessage("Ohh! That's my name too");

        }
        inputText = "input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>We are<span class='bold'><a class='alink'> BH Digital Solutions</a>.</span><br><br>Welcome to BH Digital Solutions, Where Success in the Digital World Begins.<br><br>Send <span class='bold'style='color:yellow;'>'Help'</span> to know more about our company or <br>Send <span class='bold' style='color:yellow;'>'Website'</span> to go back to the website <br><br><span style='font-size:10px;'>Note : Scroll Down To aceess The textbox.</span>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'Services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'Contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'Clear'</span> - to clear conversation<br>");
            break;

        case "business profile":
            sendTextMessage(resumeString);
            break;

        case "sample images":
            sendTextMessage(imagesString);
            break;

        case "our offers":
            sendTextMessage("Comming Soon....");
            break;

        case "service":
            sendTextMessage("<span class='sk'>Send Keyword to get more information about our services.<br><br>1) <span class='bold'>'Social Media Marketing'</span><br>2) <span class='bold'>'Search Engine Optimization'</span> / <span class='bold'>'SEO'</span><br>3) <span class='bold'>'Graphic Design'</span><br>4) <span class='bold'>'Website Design'</span><br>5) <span class='bold'>'Website Development'</span><br>");
            break;

        case "services":
            sendTextMessage("<span class='sk'>Send Keyword to get more information about our services.<br><br>1) <span class='bold'>'Social Media Marketing'</span><br>2) <span class='bold'>'Search Engine Optimization'</span> / <span class='bold'>'SEO'</span><br>3) <span class='bold'>'Graphic Design'</span><br>4) <span class='bold'>'Website Design'</span><br>5) <span class='bold'>'Website Development'</span><br>");
            break;

        case "social media marketing":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Social Media Marketing</span><br><br>With our social media marketing services, you can build a strong online presence,connect with your target audience, drive website traffic, generate leads, and ultimately achieve your business objectives Remember to personalize this content to reflect your company's unique values, achievements, and brand voice..");
            break;

        case "search engine optimization":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Search Engine Optimization</span><br><br>At BH Digital Solutions, where we specialize in driving organic traffic and enhancing your online visibility through effective SEO strategies. Our team of experienced SEO professionals is dedicated helping you achieve higher search engine rankings,increased website traffic, and improved conversions.");
            break;

        case "seo":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Search Engine Optimization</span><br><br>At BH Digital Solutions, where we specialize in driving organic traffic and enhancing your online visibility through effective SEO strategies. Our team of experienced SEO professionals is dedicated helping you achieve higher search engine rankings,increased website traffic, and improved conversions.");
            break;

        case "graphic design":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Graphic Design</span><br><br>At BH Digital Solutions, your destination for exceptional graphic design services. We are a team of passionate designers dedicated to transforming your ideas intocaptivating visual experiences. With our expertise in graphic design, we bring your brand to life through stunning visuals that leave a lasting impression.");
            break;

        case "website design":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Website Design</span><br><br>At BH Digital Solutions, we understand the significance of a well-designed website in today's digital landscape. We take a collaborative approach, working closely with you to understand your goals, target audience, and unique brand identity.");
            break;

        case "website development":
            sendTextMessage("<span style='color:yellow;font-weight:bold;'>Website Developer</span><br><br>We understand the importance of a strong online presence in today's digital world,and we are here to help you build it with purpose. Whether you're a small business, a startup, or a large corporation, we have the expertise to elevate your brand through stunning website design and development.");
            break;

        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;

        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='../images1/github.svg' alt=''></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how r u":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how r u?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how r u?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        // case "varshith":
        //     sendTextMessage("Yes, that's me");
        //     break;
        // case "varshith hegde":
        //     sendTextMessage("Yes, that's me");
        //     break;
        // case "varshith v hegde":
        //     sendTextMessage("Yes, that's me");
        //     break;

        case "website":
            sendTextMessage("Click to go to the website here <a href='../index.html' style='color:yellow;font-weight:500'>BH Digital Solutions</a>");
            break;
        // case "blog":
        //     sendTextMessage("You can check my blog here <a target='_blank' href='https://varshithvhegde.github.io/hugo-blog'>Varshith Hegde</a>");
        //     break;

        // case "github":
        //     sendTextMessage("You can check my github here <a target='_blank' href='https://github.com/Varshithvhegde'>Varshith Hegde</a>");
        //     break;
        // case "linkedin":
        //     sendTextMessage("You can check my linkedin here <a target='_blank' href='https://www.linkedin.com/in/varshithvhegde'>Varshith Hegde</a>");
        //     break;
        // case "friends":
        // case "friend":
        //     sendTextMessage("I am always ready to make new friends");
        //     break;
        // case "input":
        //     setTimeout(() => {
        //         // sendTextMessage("What a coincidence!");
        //         sendTextMessage("Hello " + name + "! How are you?");
        //     }, 2000);
        //     break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
