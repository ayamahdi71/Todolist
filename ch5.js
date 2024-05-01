let taskin=document.getElementById("item").value;
let taskcon=document.getElementById("list");
let ltask=localStorage.setItem("Task",taskin);
let lt=document.getElementById("litem");
if(localStorage.getItem("Task")==="")
{  
  alert("There is no stored tasks");
  }
  else { 
      lt.innerHTML="Your previous task was "+localStorage.getItem("Task")+"<hr>";
    }
function add(){
  let taskin=document.getElementById("item").value;
  let taskcon=document.getElementById("list");

  if(taskin===""){
    alert("please enter at least one task");
  }
  else{
let tasklist=document.createElement("li");
   taskcon.appendChild(tasklist);
   tasklist.innerHTML=taskin;
let delbtn=document.createElement("button");
   tasklist.appendChild(delbtn);
   delbtn.innerHTML="Delete";
   delbtn.style.border="none";
   delbtn.style.outLine="none";
   delbtn.style.fontSize="15px";
   delbtn.style.fontWeight="700";
   delbtn.style.textAlign="center";
   delbtn.style.width="150px";
   delbtn.style.margin="15px 20px"
let delfun=delbtn.addEventListener("click",function(){
    // tasklist.innerHTML="";
  tasklist.remove(taskin);
  tasklist.remove(delbtn);
  });
}
}
//done
//ch6 started
let arr1=[10,30,10,20];
let arr2=[30,20,10];
console.log(Math.max(...arr1,...arr2)*[...arr1,...arr2].length);
//ch6 done
//ch7 started 
let url1="elzero.org";
let url2="http://elzero.org";
let url3="https://elzero.org";
let url4="https://www.elzero.org";
let url5="https://www.elzero.org:8080/articles.php?id=100&cat=topices";
//let re1=/\w+\.org/ig;
//let re2=/((http)\:\/\/)?\w+\.org/ig;
//let re3=/((https)?\:\/\/)?\w+\.org/ig;
//t re4=/((https)?\:\/\/(www)?\.)?\w+\.org/ig;
let re5=/((http)?(https)?\:\/\/(www)?\.?)?\w+\.org(\:\d+\/\w+\.\w+\?\w+\=\d+\&\w+\=\w+)?/ig;

console.log(url1.match(re5));
console.log(url2.match(re5));
console.log(url3.match(re5));
console.log(url4.match(re5));
console.log(url5.match(re5));


//ch7 done///
//ch8 started ON OBIECT DESTRUCHURING //
let chosen=3;
let myfriends=[
  {title :"osama",age:38,available:true,skills:["html","css"]},
  {title: "ahmed",age:25,available:false,skills:["python","django"]},
  {title: "sayed",age:33,available:true,skills:["php","laravel"]},
];
const [t1,t2,t3]=["osama","ahmed","sayed"];
const [a,b,c]=[28,25,33];
const [a1,a2]=[true,false];
const [s1,s2,s3]=[["html","css"],["python","django"],["php","laravel"]];
if (chosen==1){
console.log("Hello"+" "+t1+ " your age is : "+a+ " your availablity is: "+a1+" your skills are : "+ s1);
}
else if(chosen===2)
{
  console.log("Hello"+" "+t2+ " your age is : "+b+ " your availablity is: "+a2+" your skills are : "+ s2);

}
else if(chosen===3){
  console.log("Hello"+" "+t3+ " your age is : "+c+ " your availablity is: "+a1+" your skills are : "+ s3);

}

//ch8 done
//CH9 STARTED 
class User{
  #e;
  constructor(id,user,sal){
    this.i=id;
    this.u=user;
    this.#e=sal;

  }
  getsal(){
    return parseInt(this.#e);
  }
}

let user1=new User(100,"elzero",5000);
console.log(user1.i,user1.u,user1.getsal()*3);



