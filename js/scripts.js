
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

}(jQuery));


$(" .js-RtableAccordions").responsiveTable();

class Employee {
  constructor(employeeId, name, startDate) {
    this._employeeId = employeeId;
    this._name = name;
    this._startDate = startDate;
  }
  get employeeId() {
    return this._employeeId;
  }
  get name() {
    return this._name;
  }
  get startDate() {
    return this._startDate;
  }
}
// class EmployeePieceWork extends Employee {
//   constructor(employeeId, name, date, rate) {
//     super(employeeId, name, date)
//     this._pieceWork = [];
//     this._rate = rate;
//     this._netPayArray = [];
//     this._date = date;
//
//   }
//   get pieceWork() {
//     return this._pieceWork;
//   }
//   get rate() {
//     return this._rate;
//   }
//   get netPayArray() {
//     return this._netPayArray;
//   }
//   get date() {
//     return this._date;
//   }
//   // get total(){
//   //   return this._total;
//   // }
//   addPieceWork(newPieceWork) {
//     this._pieceWork.push(newPieceWork);
//   }
//   get employeePieceWorkTotal() {
//     return this._employeePieceWorkTotalotal;
//   }
//   employeePieceWorkTotal() {
//     let total = this.pieceWork.reduce((a, b) => a + b, 0)
//     return total;
//   }
//
//   netPay() {
//     let net = this.employeePieceWorkTotal() * this._rate;
//     this._netPayArray.push(net);
//     return net;
//   }
//   // totalNetPay(){
//   //   foreach()
//   // }
// }
class EmployeePieceWork extends Employee {
  constructor(employeeId, name, startDate, rate) {
    super(employeeId, name, startDate)

    this._startDate = startDate;
    this._arrayDateAndPiece = []
    this._pieceWork;
    this._pieceDate;
    this._rate = rate;
    this._netPayArray = [];



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
  get pieceDate() {
    return this._pieceDatedate;
  }
  get arrayDateAndPiece(){
    return this._arrayDateAndPiece;
  }

  objDateAndPiece(pieceWork, pieceDate){
    let a = {
      pieceWork : pieceWork,
      date :  pieceDate,
    }

    this._arrayDateAndPiece.push(a)
  }
 // addPieceWork(newPieceWork) {
 //    a.pieceWork = newPieceWork;
 //  }
  get total(){
    return this._total;
  }

  get employeePieceWorkTotal() {
    return this._employeePieceWorkTotalotal;
  }
  employeePieceWorkTotal() {
    let total = this.objDateAndPiece.reduce((a, b) => a + b, 0)
    return total;
  }


  netPay() {
    let net = this.employeePieceWorkTotal() * this._rate;
    this._netPayArray.push(net);
    return net;
  }
  totalNetPay(){
    foreach()
  }
}
// col_name Crew extends Employee{
//   constructor(){
//   super(netPayArray)
// }
// getNetPayTotal(){
//   let netTotal = this.netPayArray.reduce((a,b) => a + b) 0)
//   return netTotal;
// }
// }
// let george = new EmployeePieceWork('23', 'Geo', '2456', 45)
// george.addPieceWork(5);
// george.addPieceWork(7);
// console.log(george)
// console.log(george.employeePieceWorkTotal(), 'piece work total');
// console.log(george.netPay(), 'netpay');
//
// function hey (){
// let jaun = new EmployeePieceWork('45', 'jaun', '06/07', 2);
// return jaun;
// }
// let holl = hey();
// holl.addPieceWork(10);
// holl.addPieceWork(10);
// holl.addPieceWork(10);
// console.log(holl);
// console.log(holl.netPay(), 'jauns net pay');
// console.log(holl.netPayArray, 'array');
// // let crew = new Employee();
// console.log(holl.pieceWork);
// console.log(george.pieceWork);
// console.log(holl.pieceWork.concat(george.pieceWork).reduce((a, b) => a + b, 0), 'crew piece work total ');
// console.log(holl.netPayArray.concat(george.netPayArray).reduce((a, b) => a + b, 0), 'crew net pay');
// console.log(holl.pieceWork.reduce((a, b) => a + b, 0))
let name = document.getElementById('nameInput');
let submitEmployee = document.getElementById('submitbutton');
let employeeId = document.getElementById('idInput');
let rate = document.getElementById('rateInput');
let piece = document.getElementById('pieceInput');
let pieceDate = document.getElementById('dateInput');
let addPieceWorkButton = document.getElementById('submitPieceWork');
// let employee = name.value;
let submitPieceWorkTotal = document.getElementById('submitPieceWorkTotal')
let crewPieceWork = [];
let employees = [];
let search = document.getElementById('search');
let searchButton = document.getElementById('searchButton');
let newEmployee = document.getElementById('newEmployee');
let tableRows = [];
Array.prototype.sum = function (prop) {
  var total = 0
  for ( var i = 0, _len = this.length; i < _len; i++ ) {
      total += this[i][prop]
  }
  return total
}
function employete() {
  return name.value;
}


let table = document.getElementById("table");

function getEmployeeDetails(){
 this.employee = new EmployeePieceWork(employeeId.value, name.value, '09', rate.value);
return this.employee;
}
var random_id = function  ()
{
var id_num = Math.random().toString(9).substr(2,3);
var id_str = Math.random().toString(36).substr(2);

return id_num + id_str;
}

submitEmployee.addEventListener('click', function () {


	var row_id = random_id();

  // console.log(let geo, 'just the name ');

 let employee = getEmployeeDetails();
    console.log(employee.employeeId, 'employeeId ');
  employees.push(employee);
  console.log(employees, 'list of employees');
  let id;
  let tableRow = document.createElement('tr');
  let button = document.createElement('button');
  let p = document.createElement('p');
  let employeeIdNow = document.createTextNode(employee.employeeId);
  let employeeNameButton = document.createTextNode(employee.name);
  let employeeRate = document.createTextNode(employee.rate);
  let employeeName = document.createTextNode(employee.name);
  button.classList = "Accordion buttons";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", "false");
  button.setAttribute("name", "buttons");

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

tableRow.classList= "Rtable Rtable--12cols  js-RtableAccordions Rtable--collapse"
tableRow.style.width = "100%";
tableRow.setAttribute("row_id",row_id);

let idd = document.createElement('td');
let fName = document.createElement('td');
let tdSun = document.createElement('td');
let tdMon = document.createElement('td');
let tdTues = document.createElement('td');
let tdWed = document.createElement('td');
let tdThur = document.createElement('td');
let tdFri = document.createElement('td');
let tdSat = document.createElement('td');
let tdTotalPieces = document.createElement('td');
let tdRate = document.createElement('td');
let tdNetTotal = document.createElement('td');
table.appendChild(button);
table.appendChild(tableRow);



tableRow.appendChild(idd);
 idd.setAttribute("edit_type", "click");
 idd.setAttribute("col_name", 'Sun');
 idd.setAttribute('contenteditable', 'true');
 idd.classList="Rtable-cell row_data"
 tableRow.appendChild(fName);
 fName.setAttribute("edit_type", "click");
 fName.setAttribute("col_name", 'fName');
 fName.setAttribute('contenteditable', 'true');
 fName.classList="Rtable-cell row_data"
  tableRow.appendChild(tdSun);
tdSun.setAttribute("edit_type", "click");
tdSun.setAttribute("col_name", 'sun');
tdSun.setAttribute('contenteditable', 'true');
tdSun.classList="Rtable-cell row_data"
tdSun.appendChild(employeeRate);
 tableRow.appendChild(tdMon);
tdMon.setAttribute("edit_type", "click");
tdMon.setAttribute("col_name", 'mon');
tdMon.setAttribute('contenteditable', 'true');
tdMon.classList="Rtable-cell row_data"
 tableRow.appendChild(tdTues);
tdTues.setAttribute("edit_type", "click");
tdTues.setAttribute("col_name", 'tues');
tdTues.setAttribute('contenteditable', 'true');
tdTues.classList="Rtable-cell row_data"
 tableRow.appendChild(tdWed);
tdWed.setAttribute("edit_type", "click");
tdWed.setAttribute("col_name", 'wed');
tdWed.setAttribute('contenteditable', 'true')
tdWed.classList="Rtable-cell row_data wed"
 tableRow.appendChild(tdThur);
tdThur.setAttribute("edit_type", "click");
tdThur.setAttribute("col_name", 'thurs');
tdThur.setAttribute('contenteditable', 'true');
tdThur.classList="Rtable-cell row_data";
 tableRow.appendChild(tdFri);
tdFri.setAttribute("edit_type", "click");
tdFri.setAttribute("col_name", 'fri');
tdFri.setAttribute('contenteditable', 'true');
tdFri.classList="Rtable-cell row_data";
 tableRow.appendChild(tdSat);
tdSat.setAttribute("edit_type", "click");
tdSat.setAttribute("col_name", 'sat');
tdSat.setAttribute('contenteditable', 'true');
tdSat.classList="Rtable-cell row_data";
 tableRow.appendChild(tdTotalPieces);
tdTotalPieces.setAttribute("edit_type", "click");
tdTotalPieces.setAttribute("col_name", 'piece-total');
tdTotalPieces.setAttribute('contenteditable', 'true');
tdTotalPieces.classList="Rtable-cell row_data";
 tableRow.appendChild(tdRate);
tdRate.setAttribute("edit_type", "click");
tdRate.setAttribute("col_name", 'rate');
tdRate.setAttribute('contenteditable', 'true');
tdRate.classList="Rtable-cell row_data";
tdRate.appendChild(employeeRate);
 tableRow.appendChild(tdNetTotal);
tdNetTotal.setAttribute("edit_type", "click");
tdNetTotal.setAttribute("col_name", 'netTotal');
tdNetTotal.setAttribute('contenteditable', 'true');
tdNetTotal.classList="Rtable-cell row_data";

idd.appendChild(employeeIdNow);
fName.appendChild(employeeName);
tdRate.appendChild(employeeRate);
//   let idd = document.getElementsByName('employeeId')[0];
//
//   idd.appendChild(employeeIdNow);
//   let names = document.getElementsByName('name')[0];
//     names.append(employeeName);
// document.getElementsByName('rate')[0].appendChild(employeeRate);

    // $('rate')[0].appendChild(employeeRate);
// setTableData();
// console.log(tableData);

  hide_form(id);
  hide_pieceWork(id);
  $('.buttons').on('click', function(){
    event.preventDefault();
    let id;
      show_pieceWork(id);
    // if($(this).name == '.buttons'){
      console.log('event handler');
      let r_id = $(this).next().attr('row_id');
      console.log(r_id);


  })

});






// $(document).on('click', '.buttons', function(event) {
// event.preventDefault();
//   let id;
//   show_pieceWork(id);
//
//
//
// let row_id = $(this).find('tr').attr('row_id');
// console.log($(this));
// console.log(row_id);
// });

// table.addEventListener('click', event =>{
//   if(event.target.className == 'buttons'){
//     console.log('event handler');
//     let row_id = $(this).find('tr').attr('row_id');
//   }
// })
// let $table = $('#table')[0];
//
// $table.addEventListener('click', event =>{
//   event.preventDefault();
//   let id;
//     show_pieceWork(id);
//   if(event.target.name == 'buttons'){
//     console.log('event handler');
//     let row_id = $(event.currentTarget).find('tr').attr('row_id');
//       console.log( $(event.currentTarget));
//       console.log(row_id);
//     let id;
//       show_pieceWork(id);
//
//   }
//   else{
//     console.log($table);
//     console.log('not');
//   }
// })


// function currentDate(month, day, year) {
//   var todayTime = new Date();
//   // var month = todayTime.getMonth() + 1;
//   // var day = todayTime.getDate();
//   // var year = todayTime.getFullYear();
//   // return month + "/" + day + "/" + year;
//   return todayTime;
// }
// document.getElementById('dateInput').value = currentDate();




addPieceWorkButton.addEventListener('click', function() {
  // employee.addPieceWork(parseInt(piece.value));
  // employee.addPieceDate(parseInt(pieceDate.value));


  employee.objDateAndPiece(parseInt(piece.value), pieceDate.value);
  console.log(pieceDate.value);
console.log(employee.arrayDateAndPiece);

  crewPieceWork.push(parseInt(piece.value));
  console.log(crewPieceWork, 'crew pieceWork');

  // let div = document.createElement('div');
  // div.classList = "Rtable-cell";

let employeePiece = document.createTextNode(piece.value);
let employeePieceDate = document.createTextNode(pieceDate.value);
// let employeePiece = piece.value;
console.log(employeePiece);

  getDayNum();
  placeDateOnAppropiateCell(employeePiece);

  // console.log(employee.employeePieceWorkTotal(), 'piece wwork total');
  let employeWeekTotal = employee.arrayDateAndPiece
  console.log(employeWeekTotal.sum("pieceWork"), 'totalofcurrentemployee');
  // console.log(employee.netPay(), 'netpay');
  //     console.log(employee.pieceWorkAndDate);


  piece.value = "";
  // let date = document.getElementById('dateInput');


});

function getDayNum(){
  let dateValue = new Date(pieceDate.value);
  let dayNum = dateValue.getDay()+1;

  if(dayNum == 7)
   {
     dayNum = 0;
     console.log(dayNum);
   }


  // var weekDays = ["Sun","Mon","Tue","Wen","Thu","Fri","Sat"];
  // alert(dayNum);
  // alert(weekDays[dayNum]);
  return dayNum;
}


function placeDateOnAppropiateCell(employeePiece) {


  let row_id = $(this).find('tr').attr('row_id');
  let row_div = $(this);

  let sunday = row_div.attr('col_name');
  let monday = row_div.attr('col_name');
  let tuesday = row_div.attr('col_name');
  let wednesday = document.getElementsByClassName('wed')[0];
  console.log(wednesday);
  // let thursday = document.getElementsByName('thurs');

  let friday ;
  // let saturday = document.getElementById()
  // let currentD = document.getElementById('dateInput').value;
  // console.log(currentD.UTC().FORMAT());

  // let currentDay =   document.getElementById('dateInput').value
  // // let currentD = parseInt(currentDay)
  // console.log(currentDay);
  // let d = currentDate();
  // let day = d.getDay();
  console.log(tuesday);
  console.log(employeePiece);
  let dayNum = getDayNum();
  console.log(dayNum);
  switch (dayNum) {
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
      wednesday.appendChild(employeePiece);
      break;
    case 4:
      thursday.appendChild(employeePiece);
      break;
    case 5:
      friday
      break;
    case 6:
      saturday.appendChild(this.employeePiece);
      break;
    default:
      console.log('cant find');
  }
};


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
$(document).on('focusout', '.row_data', function(event) {
  {
		event.preventDefault();

		if($(this).attr('edit_type') == 'button')
		{
			return false;
		}

		var row_id = $(this).closest('tr').attr('row_id');
    var row_div = $(this)

var col_name = row_div.attr('col_name');
var col_val = row_div.html();
console.log(col_name);
var arr = {};
arr[col_name] = col_val;
console.log(arr);
employee.objDateAndPiece(parseInt(col_val));
console.log(employee.objDateAndPiece((col_val)));
//use the "arr"	object for your ajax call
$.extend(arr, {row_id:row_id});
}
console.log(row_id);
	$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
});



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
console.log(table);
