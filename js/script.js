let two=document.querySelector(".two")
let inputName=document.querySelector(".inputName")
let inputPassword=document.querySelector(".inputPassword")
let makeButton=document.querySelector(".makeButton")
let one=document.querySelector(".one")
let errow=document.querySelector(".errow")
let pain=document.querySelector(".pain")




let three=document.querySelector(".three")
let pain3=document.querySelector(".pain3")
let playerChange=document.querySelector(".playerChange")
let chance=document.querySelector(".chance")
let error=document.querySelector(".error")
let inputChange=document.querySelector(".inputChange")
let guessBtn=document.querySelector(".guessBtn")
let guessBtnI=document.querySelector(".guessBtnI")


let pain2Winner=document.querySelector(".pain2Winner")

let storeItem;
let storeIndex;
let count=5




let arr=[]

inputName.oninput=function(e){
    if(inputName.value!=""){
        makeButton.classList.remove("disabled")
    }else{
        makeButton.classList.add("disabled")

    }

}

makeButton.addEventListener("click",function(){
    // console.log(inputName.value,inputPassword.value);
    if(!inputPassword.value){
        errow.innerHTML="Please Enter Something"

    }else if(!(inputPassword.value-12)){
        errow.innerHTML="Enter a Number"
    }else if(inputPassword.value<=10 && inputPassword.value>0){
        // console.log(inputPassword.value);
        arr.push({
            inputName:inputName.value,
            inputPassword:inputPassword.value,
        })
        two.innerHTML=""
        inputName.value=""
        inputPassword.value=""
        display()
        makeButton.classList.add("disabled")
        errow.innerHTML="Give a Number"
        one.style.paddingTop="50px"
        one.style.paddingBottom="20px"
        

    }
    else{
        errow.innerHTML="Please Enter a Number 1 To 10"

    }

})


function display(){
    arr.map((item)=>{
        two.innerHTML+=`<div class="pain2">
    <h2 class="pain2Player">Player Name: ${item.inputName}</h2>
    <h3 class="pain2Winner"></h3>
    <ul class="painUl">
        <li><button type="button" class="btn btn-warning playbtn">Play</button></li>
        <li><button type="button" class="btn btn-danger deletebtn">Delete</button></li>
    </ul>
    </div>`
        
    })
    let deletebtn=document.querySelectorAll(".deletebtn")
    let convertArrDeletebtn=Array.from(deletebtn)
    convertArrDeletebtn.map((item,index)=>{
        item.addEventListener("click",function(){
            arr.splice(index,1)
            two.innerHTML=""
            display()
            one.style.paddingTop="70px"
            one.style.paddingBottom="70px"
        })

    })
    
    let playbtn=document.querySelectorAll(".playbtn")
    let converArrPlaybtn=Array.from(playbtn)
    converArrPlaybtn.map((item,index)=>{
        item.addEventListener("click",function(){
            // console.log(index);
            // console.log(item);
            // console.log(arr[index]);
            storeItem=item
            storeIndex=index

            playerChange.innerHTML=`Player: ${arr[index].inputName}`

            // console.log(item);
            // console.log(index);
            // item.classList.add("disabled")
            // console.log(item);
            item.classList.add("disabled")
            item.classList.add("colorItem")
            
            three.style.display="inline-block"
            one.style.display="none"
            two.style.display="none"
            
            count=5
            chance.innerHTML=`Chance ${count}`

            guessBtn.style.display="block"
            guessBtnI.style.display="none"
            

          
            
        })
    })
     
}

guessBtn.addEventListener("click",function(){
    if(!inputChange.value){
        error.innerHTML="Please Enter Something"
    }else{
        if(!(inputChange.value-12)){
            error.innerHTML="Enter a number"
        }else{
            if(inputChange.value<=10&& inputChange.value){
                  // console.log(arr[storeIndex].inputPassword);
                // console.log(storeIndex);
                // console.log(arr[storeIndex].inputName);
                

                if(count>1){
                    count--
                    chance.innerHTML=`Chance ${count}`
                    if(arr[storeIndex].inputPassword==inputChange.value){
                        playerChange.innerHTML=`${arr[storeIndex].inputName} is Winner`
                        guessBtn.style.display="none"
                        guessBtnI.style.display="block"
                        
                        chance.innerHTML=`Chance ${count}`
                        inputChange.value=""
                        error.innerHTML=""
                    }
                }else{
                    count=0
                    chance.innerHTML=`Chance ${count}`
                    playerChange.innerHTML=`${arr[storeIndex].inputName} is Loser`
                    guessBtn.style.display="none"
                    guessBtnI.style.display="block"

                    chance.innerHTML=`Chance ${count}`
                    inputChange.value=""
                    error.innerHTML=""
                    
                }
                
            }else{
                error.innerHTML="Please enter a number 1 to 10"
            }
        }
    }
})

let pain2=document.querySelector("pain2")

guessBtnI.addEventListener("click",function(){
     
    one.style.display="inline-block"
    two.style.display="inline-block"
    three.style.display="none"
    
    two.style.display="flex"
    two.style.gap="30px"
    
  playerChange.innerHTML="Player One"
  pain.style.paddingBottom="1px"

  
            
   
})

