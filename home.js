let ques = [
    {
        q: "",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: ''
    },

    {
        q: "What does ROI stand for in business?",
        a: "Return on Investment",
        b: "Risk of Inflation",
        c: "Rate of Interest",
        d: "Revenue on Investment",
        ans: 'a'
    },
    {
        q: "What does the acronym CEO stand for?",
        a: "Chief Executive Officer",
        b: "Chief Financial Officer",
        c: "Corporate Executive Officer",
        d: "Chief Operations Officer",
        ans: 'a'
    },
    {
        q: "Which company developed the Windows operating system?",
        a: "Microsoft",
        b: "Apple",
        c: "IBM",
        d: "Google",
        ans: 'a'
    },
    {
        q: "Which company is the world's largest e-commerce retailer?",
        a: "Alibaba",
        b: "Amazon",
        c: "eBay",
        d: "Walmart",
        ans: 'b'
    },
    {
        q: "Which social media platform is known for its 280-character limit for tweets?",
        a: "Facebook",
        b: "Instagram",
        c: "Twitter",
        d: "Linkedin",
        ans: 'c'
    },
    {
        q: "",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: ''
    }
]
let i = 0;
let right = 0;
let wrong = 0;
let total = ques.length;
let qstn = document.getElementsByTagName("h3")[1];
let inp = document.querySelectorAll('.op');
let nmm = document.getElementById("nm");

//img data declare
let profile= document.getElementById("img");
const imgInp = document.getElementById("img-inp");


let check = () => {
    let data = ques[i];
    console.log(data);
    // console.log(inp.forEach)
    qstn.innerHTML = data.q;
    inp[0].nextElementSibling.innerText = data.a;
    inp[1].nextElementSibling.innerText = data.b;
    inp[2].nextElementSibling.innerText = data.c;
    inp[3].nextElementSibling.innerText = data.d;

}

let sub = () => {

    if (nm.value) {

        document.getElementById("img").style.display = "none";
        document.getElementsByClassName("contents")[0].style.display = "block";
        document.getElementById("btn").innerHTML = "Next";
        document.getElementById("btn").style.top = "100px";
        document.getElementsByClassName("nmm")[0].style.display = "none";
        submit(); //call right answer function
        final();  //call final answer
        rst();
        
    } else {
        alert("please enter your name!")
    }

}

let submit = () => {
    let nxt = next();
    let data = ques[i];
    if (nxt == data.ans) {
        right++;
    }
    console.log("righttt: ", right)
    console.log("Input Value: ", nxt);
    ++i;
    console.log("inc: ", i)
    check();
    return;

}


let next = () => {
    let answer;
    inp.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }

    )
    return answer;
}


let rst = () => {
    inp.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

//img modifier
let imgs=()=>{
    
imgInp.onchange=()=>{

      profile.src= URL.createObjectURL(imgInp.files[0])
    }
}

let final = () => {
    if (i == total-1) {
         console.log("increment:",i);
        {
            document.getElementsByClassName("contents")[0].style.display="none";
            document.getElementsByClassName("final")[0].style.display="block";
            document.getElementById("img").style.display = "block";
            document.getElementById("img-inp").readOnly = true;
            document.getElementById("btn").style.display = "none";
            
            
        }

        if(right>2)
        document.getElementsByClassName("finalin")[0].innerHTML =
            `<h4>Congratulation:</h4><h3>${nmm.value} 😊</h3>you scored:  ${right}/${total-2}`;
   
        }
        else{
            document.getElementsByClassName("finalin")[0].innerHTML =
            `<h4>Feeling sad: </h4><h3>${nmm.value} 😥</h3>you scored:  ${right}/${total-2}`;
        }

    // console.log("Final Result: ", right, "/", total);
}


check();
