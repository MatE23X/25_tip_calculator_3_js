const bill = [22, 295, 176, 
    440, 37, 105, 10, 1100, 86,52]
const total = [];

const calcTip = bill =>
bill >= 50  && bill<=300? bill*0.15:
bill*0.20;

const billIndex = bill.length - 1;
for (i = 0; i <= billIndex; i++){
    var totalBill = 
    bill[i] + calcTip(bill[i]);
    total.push(totalBill);
}
