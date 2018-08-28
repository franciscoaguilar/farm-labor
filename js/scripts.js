


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
let submitEmployee = document.getElementById('submitbutton');
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


submitEmployee.addEventListener('click', function newEmployeesubmit(){

console.log( employee = new EmployeePieceWork(employeeId.value, name.value,'09', rate.value))
employees.push(employee);
console.log(employees, 'list of employees');
let id;
let tableRow = document.createElement('tr');
let tableCell = document.createElement('td');
let button = document.createElement('button');

let h3 = document.createElement('h3');

let p = document.createElement('p');
let divFname = document.createElement('div');
let divLname = document.createElement('div');
let divSun = document.createElement('div');
let divMon = document.createElement('div');
let divTues = document.createElement('div');
let divWed = document.createElement('div');
let divThur = document.createElement('div');
let divFri = document.createElement('div');
let divSat = document.createElement('div');
let divTotalPieces = document.createElement('div');
let divRate = document.createElement('div');
let divNetTotal = document.createElement('div');

let employeeIdNow = document.createTextNode(employee.employeeId);
let employeeNameButton = document.createTextNode(employee.name);
let employeeRate = document.createTextNode(employee.rate);
let employeeName = document.createTextNode(employee.name);

// divSun.setAttribute()
content.appendChild(tableRow);

tableRow.appendChild(divFname);
divFname.classList = "Rtable-cell Rtable-cell--head row_data";
divFname.appendChild(h3);
h3.appendChild(employeeName);

tableRow.appendChild(button);
button.classList = "Accordion";
button.setAttribute("role", "tab");
button.setAttribute("aria-selected", "false");
button.setAttribute("id", "buttons");
button.appendChild(p);
p.appendChild(employeeNameButton);


tableRow.appendChild(divNetTotal);
divNetTotal.classList = "Rtable-cell  Rtable-cell--foot";


tableRow.appendChild(divSun);
divSun.setAttribute("edit_type", "click");
divSun.setAttribute("col_name", 'fname');
divSun.setAttribute('contenteditable', 'true');
divSun.classList="Rtable-cell row_data"
divSun.appendChild(employeeRate);

tableRow.appendChild(divMon);
divMon.setAttribute("edit_type", "click");
divMon.setAttribute("col_name", 'fname');
divMon.setAttribute('contenteditable', 'true');
divMon.classList="Rtable-cell row_data"

tableRow.appendChild(divTues);
divTues.setAttribute("edit_type", "click");
divTues.setAttribute("col_name", 'fname');
divTues.setAttribute('contenteditable', 'true');
divTues.classList="Rtable-cell row_data"

tableRow.appendChild(divWed);
divWed.setAttribute("edit_type", "click");
divWed.setAttribute("col_name", 'fname');
divWed.setAttribute('contenteditable', 'true');
divWed.classList="Rtable-cell row_data"

tableRow.appendChild(divThur);
divThur.setAttribute("edit_type", "click");
divThur.setAttribute("col_name", 'date');
divThur.setAttribute('contenteditable', 'true');
divThur.classList="Rtable-cell row_data";

tableRow.appendChild(divFri);
divFri.setAttribute("edit_type", "click");
divFri.setAttribute("col_name", 'date');
divFri.setAttribute('contenteditable', 'true');
divFri.classList="Rtable-cell row_data";

tableRow.appendChild(divSat);
divSat.setAttribute("edit_type", "click");
divSat.setAttribute("col_name", 'date');
divSat.setAttribute('contenteditable', 'true');
divSat.classList="Rtable-cell row_data";

tableRow.appendChild(divTotalPieces);
divTotalPieces.setAttribute("edit_type", "click");
divTotalPieces.setAttribute("col_name", 'date');
divTotalPieces.setAttribute('contenteditable', 'true');
divTotalPieces.classList="Rtable-cell row_data";

tableRow.appendChild(divRate);
divRate.setAttribute("edit_type", "click");
divRate.setAttribute("col_name", 'date');
divRate.setAttribute('contenteditable', 'true');
divRate.classList="Rtable-cell row_data";
divRate.appendChild(employeeRate);


tableRow.appendChild(divNetTotal);
divNetTotal.setAttribute("edit_type", "click");
divNetTotal.setAttribute("col_name", 'date');
divNetTotal.setAttribute('contenteditable', 'true');
divNetTotal.classList="Rtable-cell row_data";


// $div.append(employeeName);
console.log(document.getElementById('content-box'));
// display.appendChild(li.appendChild(employeeText));
// console.log(li);
// show_pieceWork(id);
hide_form(id);
hide_pieceWork(id);
})

let buttons = document.getElementById('buttons');
//
// buttons.addEventListener('click', function(){
//
// })
$(document).on('click', '#buttons', function(){
  let id;
  $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
  show_pieceWork(id);
  // $(this).on("click", "#.Accordion", function() {
  //   $(this).attr("aria-selected", $(this).attr("aria-selected") == "true" );
  //   show_pieceWork(id);
  // });

});

submitPieceWork.addEventListener('click', function(){
  employee.addPieceWork(parseInt(piece.value));
  crewPieceWork.push(parseInt(piece.value));
  console.log(crewPieceWork, 'inside');
  let div = document.createElement('div');
  div.classList = "Rtable-cell";

  document.createElement('div');
  // div.innerHTML = employee.pieceWork;
    div.innerHTML = piece.value;
   content.appendChild(div);
   console.log('div');

  // div.appendChild(employee.employeePieceWorkTotal);
  console.log(employee.employeePieceWorkTotal(), 'piece wwork total');
  console.log(employee.netPay(), 'netpay');
piece.value = "";
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
                      $(this).attr("aria-selected","false").siblings().attr("aria-selected","false");
                      toggleColumns( $(this).parents(".Rtable") );
                    });

                    $(this).on("click", "#.Accordion", function() {
                      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
                      toggleColumns( $(this).parents(".Rtable") );
                    });

                  };
                }(jQuery));


                $(".js-RtableTabs, .js-RtableAccordions").responsiveTable();

console.log(document.getElementById('content-box'));
