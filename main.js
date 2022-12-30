function myfunction(){
    let rate1=parseInt(document.getElementById("rate").value);
    let tips1=document.getElementById("tips").value;
    let rateamount=parseInt((rate1*tips1)/100);
    document.getElementById("tipsamount").value=rateamount;
    let rate2=rate1+rateamount;
    document.getElementById("total").value=rate2;
    console.log("Your Amount is=" +rate2);
}

