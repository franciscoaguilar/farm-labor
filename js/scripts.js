


class Employee{
  constructor(employeeId, name, date){
    this._employeeId = employeeId;
    this._name = name;
    this._date = date;
  }
  get employeeId (){
    return this._employeeId;
  }
  get name(){
    return this._name;
  }
  get date(){
    return this._date;
  }
}
class EmployeePieceWork extends Employee{
  constructor(employeeId, name, date, rate){
    super(employeeId, name, date)
    this._pieceWork = [];
    this._rate = rate;
    this._netPayArray = [];

  }
  get pieceWork(){
    return this._pieceWork;
  }
  get rate(){
    return this._rate;
  }
  get netPayArray(){
    return this._netPayArray;
  }
  // get total(){
  //   return this._total;
  // }
  addPieceWork(newPieceWork){
    this._pieceWork.push(newPieceWork);
  }
  get employeePieceWorkTotal(){
    return this._employeePieceWorkTotalotal;
  }
   employeePieceWorkTotal(){
     let total = this.pieceWork.reduce((a, b) => a + b, 0)
     return total;
  }

  netPay(){
    let net = this.employeePieceWorkTotal() * this._rate;
    this._netPayArray.push(net);
    return net;
  }
  // totalNetPay(){
  //   foreach()
  // }
}
// class Crew extends Employee{
//   constructor(){
//   super(netPayArray)
// }
// getNetPayTotal(){
//   let netTotal = this.netPayArray.reduce((a,b) => a + b) 0)
//   return netTotal;
// }
// }
let george = new EmployeePieceWork('23', 'George', '2456', 45)
george.addPieceWork(5);
george.addPieceWork(7);
console.log(george)
console.log(george.employeePieceWorkTotal(), 'piece work total');
console.log(george.netPay(), 'netpay');


let jaun = new EmployeePieceWork('45','jaun', '06/07', 2)
jaun.addPieceWork(10);
jaun.addPieceWork(10);
jaun.addPieceWork(10);
console.log(jaun);
console.log(jaun.netPay(), 'jauns net pay');
console.log(jaun.netPayArray, 'array');
let crew = new Employee();
console.log(jaun.pieceWork);
console.log(george.pieceWork);
console.log(jaun.pieceWork.concat(george.pieceWork).reduce((a,b) => a + b, 0), 'crew piece work total ');
console.log(jaun.netPayArray.concat(george.netPayArray).reduce((a,b) => a + b, 0), 'crew net pay');
  console.log(jaun.pieceWork.reduce((a,b) => a + b, 0))
let name = document.getElementById('nameInput');
let submit = document.getElementById('submitbutton');
let employeeId =document.getElementById('idInput');
let rate = document.getElementById('rateInput');
let piece = document.getElementById('pieceInput');
let submitPieceWork = document.getElementById('submitPieceWork');
let employee =  new employete();
let submitPieceWorkTotal = document.getElementById('submitPieceWorkTotal')
let crewPieceWork = [];
let employees = [];
let search =document.getElementById('search');
let searchButton = document.getElementById('searchButton');
let newEmployee = document.getElementById('newEmployee');
function employete(){
  return name.value;
}


let content = document.getElementById("content-box");


submit.addEventListener('click', function newEmployeesubmit(){
console.log( employee = new EmployeePieceWork(employeeId.value, name.value,'09', rate.value))
employees.push(employee);
console.log(employees, 'list of employees');
let id;

let button = document.createElement('button');
let divHead = document.createElement('div');
let h3 = document.createElement('h3');
let divs = document.createElement('div');
let divFoot = document.createElement('div');
let p = document.createElement('p');
button.classList = "Accordion";
button.setAttribute("role", "tab");
button.setAttribute("aria-selected", "false");
divHead.classList = "Rtable-cell Rtable-cell--head";
divs.classList = "Rtable-cell";
divFoot.classList = "Rtable-cell  Rtable-cell--foot";
let employeeIdNow = document.createTextNode(employee.employeeId);
let employeeNameButton = document.createTextNode(employee.name);
let employeeRate = document.createTextNode(employee.rate);
let employeeName = document.createTextNode(employee.name);

content.appendChild(button);
button.appendChild(p);
p.appendChild(employeeNameButton);
content.appendChild(divHead);
content.appendChild(divs);
content.appendChild(divFoot);
divs.appendChild(employeeIdNow);
divFoot.appendChild(employeeRate);
divHead.appendChild(h3);
h3.appendChild(employeeName);

// display.appendChild(li.appendChild(employeeText));
// console.log(li);
show_pieceWork(id);
hide_form(id);
})



submitPieceWork.addEventListener('click', function(){
  employee.addPieceWork(parseInt(piece.value));
  crewPieceWork.push(parseInt(piece.value));
  console.log(crewPieceWork, 'inside');
  piece.value = "";
  let div = document.createElement('div');
  // content.appendChild(div);

  document.getElementById("weekPieceWork").innerHTML = employee.employeePieceWorkTotal()
  // div.appendChild(employee.employeePieceWorkTotal);
  console.log(employee.employeePieceWorkTotal(), 'piece wwork total');
  console.log(employee.netPay(), 'netpay');

});



console.log(crewPieceWork, 'array of the crews piece work ');
submitPieceWorkTotal.addEventListener('click', function(){

  let summedPieceWork = crewPieceWork.reduce((a,b) => a + b, 0);
  console.log(summedPieceWork, 'crew total piece work ')

  document.getElementById("crewPieceWork").innerHTML = summedPieceWork;
})
searchButton.addEventListener('click', function(){
  if (search.value == employee.name){
    return console.log('found');
  }
  else{
    console.log('not found');
  }
})
let crewNetPay= document.getElementById("crewNetPay")
crewNetPay.addEventListener('click', function(){
  document.getElementById('crewNetPayDisplay').innerHTML= employee.netPay();
})
newEmployee.addEventListener('click', function(){
  let id;
hide_pieceWork(id);
show_form(id);
})
function show_pieceWork(id) {
      var e = document.getElementById('addpiece');
      if(e.style.display == 'none')
         e.style.display = 'block';
      else
         e.style.display = 'block';
   }
   function hide_pieceWork(id) {
         var e = document.getElementById('addpiece');
         if(e.style.display == 'block')
            e.style.display = 'none';
         else
            e.style.display = 'none';
      }
   function hide_form(id) {
         var e = document.getElementById('form');
         if(e.style.display == 'block')
            e.style.display = 'none';
         else
            e.style.display = 'none';
      }


      function show_form(id){
              var e = document.getElementById('form');
              if(e.style.display == 'none')
                 e.style.display = 'block';
              else
                 e.style.display = 'block';
           }




               $(document).ready(function ($) {
                  "use strict";
                  $.fn.responsiveTable = function() {

                    var toggleColumns = function($table) {
                      var selectedControls = [];
                      $table.find(".Accordion, .Tab").each( function() {
                        selectedControls.push( $(this).attr("aria-selected") );
                      });
                      var cellCount = 0, colCount = 0;
                      var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Tab").length, $table.find(".Accordion").length );
                      $table.find(".Rtable-cell").each( function() {
                        $(this).addClass("hiddenSmall");
                        if( selectedControls[colCount] === "true" ) $(this).removeClass("hiddenSmall");
                        cellCount++;
                        if( cellCount % setNum === 0 ) colCount++;
                      });
                    };
                    $(this).each(function(){ toggleColumns($(this)); });

                    $(this).find(".Tab").click( function() {
                      $(this).attr("aria-selected","true").siblings().attr("aria-selected","false");
                      toggleColumns( $(this).parents(".Rtable") );
                    });

                    $(this).find(".Accordion").click( function() {
                      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
                      toggleColumns( $(this).parents(".Rtable") );
                    });

                  };
                }(jQuery));


                $(".js-RtableTabs, .js-RtableAccordions").responsiveTable();
