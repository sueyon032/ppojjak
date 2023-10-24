var now= new Date();
var year= now.getFullYear();
var month= now.getMonth()+1;

const dateContainerDiv= document.getElementsByClassName("dates container")[0];

const setCalendar=(year, month)=>{
    var titleMonthDiv= document.getElementsByClassName("month")[0];   
    titleMonthDiv.innerHTML= `${month}월`;
    dateContainerDiv.replaceChildren(); 

    var thisMonthLastDate= new Date(year, month+1-1, 0).getDate();
    for(let date=1; date<=thisMonthLastDate; date++){
        let dateItemDiv=document.createElement("div");  
        dateItemDiv.classList.add("date");  
        dateItemDiv.classList.add("item");  
        dateItemDiv.innerHTML=date;  
        dateContainerDiv.appendChild(dateItemDiv);
    }
}

setCalendar(year, month);

const leftDiv=document.getElementsByClassName("left")[0];
leftDiv.onclick=()=> {
    month--;
    let prevMonth= new Date(year, month-1);
    year= prevMonth.getFullYear();
    month= prevMonth.getMonth()+1;
    setCalendar(year, month);
}

let rightDiv=document.getElementsByClassName("right")[0];
rightDiv.onclick=()=>{
    month++;
    if(month==13){
        year++;
        month=1;
    }
    setCalendar(year,month);
};