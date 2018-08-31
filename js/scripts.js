$(document).ready(function($) {
  "use strict";
  $.fn.responsiveTable = function() {

    var toggleColumns = function($table) {
      var selectedControls = [];
      $table.find(".Accordion, ").each(function() {
        selectedControls.push($(this).attr("aria-selected"));
      });
      var cellCount = 0,
        colCount = 0;
      var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Accordion").length);
      $table.find(".Rtable-cell").each(function() {
        $(this).addClass("hiddenSmall");
        if (selectedControls[colCount] === "true") $(this).removeClass("hiddenSmall");
        cellCount++;
        if (cellCount % setNum === 0) colCount++;
      });
    };
    $(this).each(function() {
      toggleColumns($(this));
    });


    $(this).on("click", ".Accordion", function() {
      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true");
      toggleColumns($(this).closest(".Rtable"));
    });

  };

class Employee {
  constructor(employeeId, name, date) {
    this._employeeId = employeeId;
    this._name = name;
    this._date = date;
  }
  get employeeId() {
    return this._employeeId;
  }
  get name() {
    return this._name;
  }
  get date() {
    return this._date;
  }
}
class EmployeePieceWork extends Employee {
  constructor(employeeId, name, date, rate) {
    super(employeeId, name, date)
    this._pieceWork = [];
    this._rate = rate;
    this._netPayArray = [];
    this._date = date;

  }
  get pieceWork() {
    return this._pieceWork;
  }
  get rate() {
    return this._rate;
  }
  get netPayArray() {
    return this._netPayArray;
  }
  get date() {
    return this._date;
  }
  // get total(){
  //   return this._total;
  // }
  addPieceWork(newPieceWork) {
    this._pieceWork.push(newPieceWork);
  }
  get employeePieceWorkTotal() {
    return this._employeePieceWorkTotalotal;
  }
  employeePieceWorkTotal() {
    let total = this.pieceWork.reduce((a, b) => a + b, 0)
    return total;
  }

  netPay() {
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


let jaun = new EmployeePieceWork('45', 'jaun', '06/07', 2)
jaun.addPieceWork(10);
jaun.addPieceWork(10);
jaun.addPieceWork(10);
console.log(jaun);
console.log(jaun.netPay(), 'jauns net pay');
console.log(jaun.netPayArray, 'array');
let crew = new Employee();
console.log(jaun.pieceWork);
console.log(george.pieceWork);
console.log(jaun.pieceWork.concat(george.pieceWork).reduce((a, b) => a + b, 0), 'crew piece work total ');
console.log(jaun.netPayArray.concat(george.netPayArray).reduce((a, b) => a + b, 0), 'crew net pay');
console.log(jaun.pieceWork.reduce((a, b) => a + b, 0))
let name = document.getElementById('nameInput');
let submitEmployee = document.getElementById('submitbutton');
let employeeId = document.getElementById('idInput');
let rate = document.getElementById('rateInput');
let piece = document.getElementById('pieceInput');
let addPieceWorkButton = document.getElementById('submitPieceWork');
let employee = new employete();
let submitPieceWorkTotal = document.getElementById('submitPieceWorkTotal')
let crewPieceWork = [];
let employees = [];
let search = document.getElementById('search');
let searchButton = document.getElementById('searchButton');
let newEmployee = document.getElementById('newEmployee');

function employete() {
  return name.value;
}


let content = document.getElementById("content-box");


submitEmployee.addEventListener('click', function newEmployeesubmit() {

  var random_id = function  ()
{
  var id_num = Math.random().toString(9).substr(2,3);
  var id_str = Math.random().toString(36).substr(2);

  return id_num + id_str;
}
	var row_id = random_id();
  console.log(employee = new EmployeePieceWork(employeeId.value, name.value, '09', rate.value))
  employees.push(employee);
  console.log(employees, 'list of employees');
  let id;
  let button = document.createElement('button');
  let p = document.createElement('p');
  let employeeIdNow = document.createTextNode(employee.employeeId);
  let employeeNameButton = document.createTextNode(employee.name);
  let employeeRate = document.createTextNode(employee.rate);
  let employeeName = document.createTextNode(employee.name);
  button.classList = "Accordion";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", "false");
  button.setAttribute("id", "buttons");
  button.appendChild(p);
  p.appendChild(employeeNameButton);


// IMPORTANT DO NOT DELETE
//   for (let i=0; i<1; i++){
//
//     row = document.createElement('div');
//     row.setAttribute("id", row_id);
//     row.classList = "Rtable js-RtableAccordions Rtable--collapse  Rtable--12cols ";
//     content.appendChild(row);
//         row.appendChild(button);
//
//   for (let j = 0; j < 12; j++) {
//
//     let div = document.createElement('div');
//     let colName = ['employeeId', 'name', 'sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'piece-total', 'rate', 'nettotal'];
//     div.setAttribute("edit_type", "click");
//     div.setAttribute('contenteditable', 'false');
//     div.setAttribute("name", colName[j]);
//     div.classList = "Rtable-cell row_data hiddenSmall"
//     row.append(div);
//   }
//
// }
let tableRow = document.createElement('tr');
tableRow.classList= "Rtable Rtable--12cols  js-RtableAccordions Rtable--collapse"
tableRow.style.width = "100%";
tableRow.setAttribute("id",row_id);

let idd = document.createElement('td');
let fName = document.createElement('td');
let divSun = document.createElement('td');
let divMon = document.createElement('td');
let divTues = document.createElement('td');
let divWed = document.createElement('td');
let divThur = document.createElement('td');
let divFri = document.createElement('td');
let divSat = document.createElement('td');
let divTotalPieces = document.createElement('td');
let divRate = document.createElement('td');
let divNetTotal = document.createElement('td');
content.appendChild(button);
content.appendChild(tableRow)

tableRow.appendChild(idd);
 idd.setAttribute("edit_type", "click");
 idd.setAttribute("class", 'Sun');
 idd.setAttribute('contenteditable', 'true');
 idd.classList="Rtable-cell row_data"
 tableRow.appendChild(fName);
 fName.setAttribute("edit_type", "click");
 fName.setAttribute("class", 'Sun');
 fName.setAttribute('contenteditable', 'true');
 fName.classList="Rtable-cell row_data"
  tableRow.appendChild(divSun);
divSun.setAttribute("edit_type", "click");
divSun.setAttribute("class", 'Sun');
divSun.setAttribute('contenteditable', 'true');
divSun.classList="Rtable-cell row_data"
divSun.appendChild(employeeRate);
 tableRow.appendChild(divMon);
divMon.setAttribute("edit_type", "click");
divMon.setAttribute("class", 'Mon');
divMon.setAttribute('contenteditable', 'true');
divMon.classList="Rtable-cell row_data"
 tableRow.appendChild(divTues);
divTues.setAttribute("edit_type", "click");
divTues.setAttribute("class", 'tues');
divTues.setAttribute('contenteditable', 'true');
divTues.classList="Rtable-cell row_data"
 tableRow.appendChild(divWed);
divWed.setAttribute("edit_type", "click");
divWed.setAttribute("class", 'Wed');
divWed.setAttribute('contenteditable', 'true');
divWed.classList="Rtable-cell row_data"
 tableRow.appendChild(divThur);
divThur.setAttribute("edit_type", "click");
divThur.setAttribute("name", 'thurs');
divThur.setAttribute('contenteditable', 'true');
divThur.classList="Rtable-cell row_data";
 tableRow.appendChild(divFri);
divFri.setAttribute("edit_type", "click");
divFri.setAttribute("class", 'fri');
divFri.setAttribute('contenteditable', 'true');
divFri.classList="Rtable-cell row_data";
 tableRow.appendChild(divSat);
divSat.setAttribute("edit_type", "click");
divSat.setAttribute("class", 'sat');
divSat.setAttribute('contenteditable', 'true');
divSat.classList="Rtable-cell row_data";
 tableRow.appendChild(divTotalPieces);
divTotalPieces.setAttribute("edit_type", "click");
divTotalPieces.setAttribute("class", 'piece-total');
divTotalPieces.setAttribute('contenteditable', 'true');
divTotalPieces.classList="Rtable-cell row_data";
 tableRow.appendChild(divRate);
divRate.setAttribute("edit_type", "click");
divRate.setAttribute("class", 'rate');
divRate.setAttribute('contenteditable', 'true');
divRate.classList="Rtable-cell row_data";
divRate.appendChild(employeeRate);
 tableRow.appendChild(divNetTotal);
divNetTotal.setAttribute("edit_type", "click");
divNetTotal.setAttribute("class", 'netTotal');
divNetTotal.setAttribute('contenteditable', 'true');
divNetTotal.classList="Rtable-cell row_data";

idd.appendChild(employeeIdNow);
fName.appendChild(employeeName);
divRate.appendChild(employeeRate);
//   let idd = document.getElementsByName('employeeId')[0];
//
//   idd.appendChild(employeeIdNow);
//   let names = document.getElementsByName('name')[0];
//     names.append(employeeName);
// document.getElementsByName('rate')[0].appendChild(employeeRate);

    // $('rate')[0].appendChild(employeeRate);




  hide_form(id);
  hide_pieceWork(id);
  console.log(content, "inside");

});

function createEmployeeDivs(){

}



$(document).on('click', '#buttons', function() {
  let id;
  // $(this).attr("aria-selected", $(this).attr("aria-selected") !== "false");
  show_pieceWork(id);


console.log('WORKING');

  // $(this).on("click", "#.Accordion", function() {
  //   $(this).attr("aria-selected", $(this).attr("aria-selected") == "true" );
  //   show_pieceWork(id);
  // });

});
  console.log($(" .js-RtableAccordions"));
function currentDate(month, day, year) {
  var todayTime = new Date();
  var month = todayTime.getMonth() + 1;
  var day = todayTime.getDate();
  var year = todayTime.getYear();
  return month + "/" + day + "/" + year;
}
document.getElementById('dateInput').value = currentDate();



addPieceWorkButton.addEventListener('click', function() {
  employee.addPieceWork(parseInt(piece.value));
  crewPieceWork.push(parseInt(piece.value));
  console.log(crewPieceWork, 'inside');
  // let div = document.createElement('div');
  // div.classList = "Rtable-cell";

let employeePiece = document.createTextNode(piece.value);
// let employeePiece = piece.value;
console.log(employeePiece);
  placeDateOnAppropiateCell(employeePiece);

  console.log(employee.employeePieceWorkTotal(), 'piece wwork total');
  console.log(employee.netPay(), 'netpay');
  piece.value = "";
});
// let thursday = $('.thurs')[0];


function placeDateOnAppropiateCell(employeePiece) {
  let sunday = $('div[name=sun]');
  let monday = $('#mon')[0];
  let tuesday = $('#tues')[0];
  let wednesday = $('#wed')[0];
  let thursday = document.getElementsByName('thurs');
 console.log(thursday);
  let friday = $('#fri')[0];
  let currentDay = new Date();
  let day = currentDay.getDay();
  switch (day) {
    case 0:
      sunday.appendChild(employeePiece);
      break;
    case 1:
      break;
      monday.appendChild(employeePiece);
    case 2:
      tuesday.appendChild(employeePiece);
      break;
    case 3:
      wednesday.innerHTM = employeePiece;
      break;
    case 4:
      thursday.appendChild(employeePiece);
      break;
    case 5:
      friday.appendChild(employeePiece);
      break;
    case 6:
      saturday.appendChild(employeePiece);
      break;
    default:
      console.log('cant find');
  }
}


console.log(crewPieceWork, 'array of the crews piece work ');
submitPieceWorkTotal.addEventListener('click', function() {

  let summedPieceWork = crewPieceWork.reduce((a, b) => a + b, 0);
  console.log(summedPieceWork, 'crew total piece work ')
  document.getElementById("crewPieceWork").innerHTML = summedPieceWork;

})
searchButton.addEventListener('click', function() {
  if (search.value == employee.name) {
    return console.log('found');
  } else {
    console.log('not found');
  }
})
let crewNetPay = document.getElementById("crewNetPay")
crewNetPay.addEventListener('click', function() {
  document.getElementById('crewNetPayDisplay').innerHTML = employee.netPay();
})
newEmployee.addEventListener('click', function() {
  let id;
  hide_pieceWork(id);
  show_form(id);
})

function show_pieceWork(id) {
  var e = document.getElementById('addpiece');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'block';
}

function hide_pieceWork(id) {
  var e = document.getElementById('addpiece');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}

function hide_form(id) {
  var e = document.getElementById('form');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}


function show_form(id) {
  var e = document.getElementById('form');
  if (e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'block';
}




// $(document).ready(function($) {
//   "use strict";
//   $.fn.responsiveTable = function() {
//
//     var toggleColumns = function($table) {
//       var selectedControls = [];
//       $table.find(".Accordion, ").each(function() {
//         selectedControls.push($(this).attr("aria-selected"));
//       });
//       var cellCount = 0,
//         colCount = 0;
//       var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Accordion").length);
//       $table.find(".Rtable-cell").each(function() {
//         $(this).addClass("hiddenSmall");
//         if (selectedControls[colCount] === "true") $(this).removeClass("hiddenSmall");
//         cellCount++;
//         if (cellCount % setNum === 0) colCount++;
//       });
//     };
//     $(this).each(function() {
//       toggleColumns($(this));
//     });
//
//
//     $(this).on("click", "#.Accordion", function() {
//       $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true");
//       toggleColumns($(this).parents(".Rtable"));
//     });
//
//   };
// }(jQuery));
//
// $(" .js-RtableAccordions").responsiveTable();



let row = document.querySelectorAll('tr');
console.log(row);
}(jQuery));

$(" .js-RtableAccordions").responsiveTable();
