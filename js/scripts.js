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
  }
  get pieceWork(){
    return this._pieceWork;
  }
  get rate(){
    return this._rate;
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
    return net;
  }

}
let george = new EmployeePieceWork('23', 'George', '2456', 45)
george.addPieceWork(5);
george.addPieceWork(7);
console.log(george)
console.log(george.getPieceWorkTotal(), 'piece work total');
console.log(george.netPay(), 'netpay');

console.log('duh');
