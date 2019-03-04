window.onload = function myfunction(){
   //buttons
    var quadd = document.getElementById("Fadd");
    var addbtn = document.getElementById("Sadd");
    var quaddform = document.querySelector("addform");
    
    //formfields
    
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    
    //phonebookdisplay
     var phBookDiv = document.querySelector("phbook");
    //create storage array
     var phnbook = [];
    //eventlisteners
    quadd.addEventListener("click", function(){
        quaddform.style.display = "block";
        
    });
     
     addbtn.addEventListener("click", addtoBook);
     addform.addEventListener("click",removeEntry);
     
    function jsonStructure(name,number){
        this.name = name;
        this.number = number;
    }
    
    function addtoBook(){
         
        var isNull = name.value!= '' && number.value!= '';
        if(isNull){
            var obj = new jsonStructure(name.value,number.value);
             phnbook.push(obj);
            localStorage["addbook"] = JSON.stringify(phnbook);
            quaddform.style.display = 'none';
            clearform();
            showPhnbook();
             
        }
        
    }
    
    function removeEntry(e){
        if(e.target.classList.contains("delbutton")) {
            var remID = e.target.getAttribute("data-id");
            //remove the entry from the array
            phnbook.splice(remID ,1);
            localStorage[ 'phnbook'] = JSON.stringify(phnbook);
        }
    }
    
    function clearform(){
        var frm = document.querySelectorAll("formfield");
        for( var i in frm){
            frm[i].value = '';
        }
    }
    
    
 function showPhnbook(){
     //check if key phnbook exists 
     
     if(localStorage["addbook"] === undefined){
         localStorage["addbook"] = "[]"
     }
     else{
         phnbook = JSON.parser(localStorage["addbook"]);
         phBookDiv.innerHTML = '';
         for (var n in phnbook){
             var str = '<div class="entry">;
             str += '<div class="fullname"><p>' + phnbook[n].name + '</p></div>';
             str += '<div class="phone"><p>' + phnbook[n].number + '</p></div>';
             str += '<div class="del><a href="#" class="delbutton" data-id="' + n + '">DELETE</a></div>';
             str +='</div>';
             phBookDiv.innerHTML += str;
             
         }
     }
 }   
 showPhnbook();   
    
}