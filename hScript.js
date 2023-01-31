var h_varList;

window.onload = () => {
    //Humphreys Reservations
    h_populateTable();
 };

 //Humphreys
 function h_Reserve(){
    //var to keep track of whether or not that time/machine is taken
    var conflict=false;
    
    if (localStorage.getItem("hVars")==null){
        h_varList=[];
    } else{
        h_varList=JSON.parse(localStorage.getItem("hVars"));
    }
    
    var h_vars=[];

    //setting h_vars from form output
    //h_vars[0]=    //time
    var hListVal=document.getElementById("hTime");
    h_vars[0]=hListVal.options[hListVal.selectedIndex].value;

    //h_vars[1]=    //machine
    var form=document.forms[0];
    for(var i in form.elements.machine){
        if (form.elements.machine[i].checked){
            h_vars[1]=form.elements.machine[i].value;
            break;
        }
    }

    //checking if h_vars appears in h_varList, aka is x machine reserved at y time already
    for(var i in h_varList){
        if(h_vars[0]==h_varList[i][0] && h_vars[1]==h_varList[i][1]){
            conflict=true;
            window.alert("That machine is already reserved then.  Please select a different time/machine.");
            break;
        }
    }

    //if h_vars is new, add it to the list
    if (conflict==false){
        h_varList.push(h_vars);
        console.log(h_vars);
        localStorage.setItem("hVars",JSON.stringify(h_varList));
        console.log(h_varList);
        window.alert("Reservation made successfully!");
    }
}


function h_populateTable(){
    //Make loop to cycle through h_varList (see h_Reserve)
    //Inside that loop, set the class of each reservation location to isReserved and their inner HTML to "Reserved"
    var selector="";
    var h_varList=JSON.parse(localStorage.getItem("hVars"));
    for (var i in h_varList){
        selector="."+h_varList[i][0]+" ."+h_varList[i][1];
        console.log(selector);
        document.querySelector(selector).classList.add("isReserved");
        document.querySelector(selector).innerHTML="Reserved";
    }
}