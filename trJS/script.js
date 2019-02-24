b1.onclick = function() {
   var v1 = $("#i1").val();
   var v2 = $("#i2").val();
   var v3 = $("#i3").val();
   var usd_rub = v1*65;
    usd_rub=Math.round(usd_rub)
   var usd_euro = v1*0.9;
   usd_euro=Math.round(usd_euro)
   var euro_usd = v2*1.1;
   euro_usd=Math.round(euro_usd)
   var euro_rub = v2*74;
   euro_rub=Math.round(euro_rub)
   var rub_usd = v3*0.015;
   rub_usd=Math.round(rub_usd)
   var rub_euro = v3*0.013;
   rub_euro=Math.round(rub_euro)

   
   $("#t1_1").text(usd_euro);
   $("#t1_2").text(usd_rub);
   $("#t2_1").text(euro_usd);
   $("#t2_2").text(euro_rub);
   $("#t3_1").text(rub_usd);
   $("#t3_2").text(rub_euro);
}