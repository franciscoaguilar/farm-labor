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
  get getPieceWorkTotal(){
    return this._getPieceWorkTotal;
  }
   getPieceWorkTotal(){
     let total = this.pieceWork.reduce((a, b) => a + b, 0)
     return total;
  }

  netPay(){
    let net = this.getPieceWorkTotal() * this._rate;
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
console.log(george.getPieceWorkTotal(), 'piece work total');
console.log(george.netPay(), 'netpay');

console.log('duh');
let jaun = new EmployeePieceWork('45','jaun', '06/07', 2)
jaun.addPieceWork(10);
jaun.addPieceWork(10);
jaun.addPieceWork(10);
console.log(jaun.netPay(), 'jauns net pay');
console.log(jaun.netPayArray, 'array');
let crew = new Employee();
console.log(jaun.pieceWork);
console.log(george.pieceWork);
console.log(jaun.pieceWork.concat(george.pieceWork).reduce((a,b) => a + b, 0), 'crew piece work total ');
console.log(jaun.netPayArray.concat(george.netPayArray).reduce((a,b) => a + b, 0), 'crew net pay');
