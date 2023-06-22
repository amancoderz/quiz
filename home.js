let ques1={
    q: "What does ROI stand for in business?",
    a: "Return on Investment",
    b: "Risk of Inflation",
    c: "Rate of Interest",
    d: "Revenue on Investment",
    ans:function (){
     return this.a;
     
    }
}
let ques2={
    q: "What does the acronym CEO stand for?",
    a: "Chief Executive Officer",
    b: "Chief Financial Officer",
    c: "Corporate Executive Officer",
    d: "Chief Operations Officer",
    ans:function (){
     return this.a;
     
    }
}
let ques3={
    q: "Which company developed the Windows operating system?",
    a: "Microsoft",
    b: "Apple",
    c: "IBM",
    d: "Google",
    ans:function (){
     return this.a;
     
    }
}
let ques4={
    q: "Which company is the world's largest e-commerce retailer?",
    a: "Alibaba",
    b: "Amazon",
    c: "eBay",
    d: "Walmart",
    ans:function (){
     return this.b;
     
    }
}
let ques5={
    q: "Which social media platform is known for its 280-character limit for tweets?",
    a: "Facebook",
    b: "Instagram",
    c: "Twitter",
    d: "Linkedin",
    ans:function (){
     return this.c;
     
    }
}
let sub=()=>{



    document.getElementById("img").style.display="none";
    document.getElementsByClassName("q-space")[0].style.display="block";
    document.getElementById("btn").innerHTML="Next";
    
    
    
    
    
    {
        document.getElementsByTagName("h3")[0].innerHTML=ques1.q;
        let a= document.getElementById("op1").innerHTML=ques1.a;
        let b= document.getElementById("op2").innerHTML=ques1.b;
        let c= document.getElementById("op3").innerHTML=ques1.c;
        let d=  document.getElementById("op4").innerHTML=ques1.d;
        let ans= ques1.ans;
        let arr=[a,b,c,d];
        return arr;
    }
}

let check=(arr)=>{
    document.getElementsByClassName("op")[0].style.background="rgb(30, 156, 85)"; 
    let qwq = document.getElementById("op1").value;
    // for(let i=0;i<arr.length;i++){
    //   if(ans=arr[i]){
    //       return i;
    //   }
    // }
      alert(qwq);
}


