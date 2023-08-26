const alldata=document.getElementById("alldata");
const alldatashow=document.getElementById("alldatashow");
const income=document.getElementById("income").value;
const showdatabtn=document.getElementById("show-data");
const toastmsg=document.getElementById("toastmsg");

setTimeout(() => {
  toastmsg.remove();
}, 3000);


showdatabtn.addEventListener("click", (e)=>{
    const income=document.getElementById("income").value;
    const food=document.getElementById("food").value;
    const coffee=document.getElementById("coffee").value;
    const otheritem=document.getElementById("otheritem").value;
    const shopping=document.getElementById("shopping").value;
    const travelling=document.getElementById("travelling").value;
  //  var total=food+coffee+otheritem+shopping+travelling;
   // console.log(total)
    e.preventDefault();
    console.log("Button is Clicked...");
  
  // document.getElementById("totalexpenses").innerHTML=(total);
   if(showdatabtn.className=="ali btn btn-primary"){
    alldata.remove()
    showdatabtn.className="btn btn-primary";
    showdatabtn.innerText="Show All Data";
   }else{
    alldatashow.appendChild(alldata);
    document.getElementById("monincome").innerHTML=income;
    document.getElementById("foodexpenses").innerHTML=food;
    document.getElementById("coffeeexpenses").innerHTML=coffee;
    document.getElementById("foodexpenses").innerHTML=otheritem;
    document.getElementById("shoppingexpenses").innerHTML=shopping;
    document.getElementById("travellingexpenses").innerHTML=travelling;
    showdatabtn.className="ali btn btn-primary";
    showdatabtn.innerText="Remove All Data";

   }


})
console.log(income);

;