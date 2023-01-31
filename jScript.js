var j_varList;

window.onload = () => {
    //Jonas Reservations
    j_populateTable();
 };

 //Jonas
 function j_Reserve(){
    //var to keep track of whether or not that time/machine is taken
    var conflict=false;
    
    if (localStorage.getItem("jVars")==null){
        j_varList=[];
    } else{
        j_varList=JSON.parse(localStorage.getItem("jVars"));
    }
    
    var j_vars=[];

    //setting j_vars from form output
    //j_vars[0]=    //time
    var jListVal=document.getElementById("jTime");
    j_vars[0]=jListVal.options[jListVal.selectedIndex].value;

    //j_vars[1]=    //machine
    var form=document.forms[0];
    for(var i in form.elements.machine){
        if (form.elements.machine[i].checked){
            j_vars[1]=form.elements.machine[i].value;
            break;
        }
    }

    //checking if h_vars appears in h_varList, aka is x machine reserved at y time already
    for(var i in j_varList){
        if(j_vars[0]==j_varList[i][0] && j_vars[1]==j_varList[i][1]){
            conflict=true;
            window.alert("That machine is already reserved then.  Please select a different time/machine.");
            break;
        }
    }

    //if j_vars is new, add it to the list
    if (conflict==false){
        j_varList.push(j_vars);
        console.log(j_vars);
        localStorage.setItem("jVars",JSON.stringify(j_varList));
        console.log(j_varList);
        window.alert("Reservation made successfully!");
    }
}


function j_populateTable(){
    //Make loop to cycle through h_varList (see h_Reserve)
    //Inside that loop, set the class of each reservation location to isReserved and their inner HTML to "Reserved"
    var selector="";
    var j_varList=JSON.parse(localStorage.getItem("jVars"));
    for (var i in j_varList){
        selector="."+j_varList[i][0]+" ."+j_varList[i][1];
        console.log(selector);
        document.querySelector(selector).classList.add("isReserved");
        document.querySelector(selector).innerHTML="Reserved";
    }
}