let ques = [

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
    }
]
let sub = () => {



   
    document.getElementById("img").style.display = "none";
    document.getElementsByClassName("q-space")[0].style.display = "block";
    document.getElementById("btn").innerHTML = "Next";
    document.getElementById("btn").style.top = "314px";




}

let check = (arr) => {
    document.getElementsByClassName("op")[0].style.background = "rgb(30, 156, 85)";
    let qwq = document.getElementById("op1").value;
    // for(let i=0;i<arr.length;i++){
    //   if(ans=arr[i]){
    //       return i;
    //   }
    // }
    //   alert(qwq);
}


