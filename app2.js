let yeniSatir= "\r,\n";
let bakiye =1000;
let metin="1-bakiye görünüleme"+yeniSatir
+"2-para çekme"+yeniSatir
+"3-para yatırma"+yeniSatir
+"4-çıkış";
let secim=prompt(metin);
switch(secim){
    case "1":
        alert("bakiyeniz:"+bakiye)
        break
    case "2":
        let çek =Number(prompt("çekmek istediğim tutar:"));
        if(bakiye>çek){
            bakiye=bakiye-çek;
            alert("kalan:"+bakiye);
        }else{
            console.log("bakiye yetersiz");
        }
        

        
        break;
    case "3":
        let yatırma =Number(prompt("yatırmak istediğin tutar:"));
        alert("yeni bakiye:"+(1000+yatırma));
        break;
    case "4":
        console.log("çıkış yaptınız");
        break;
    default:
        console.log("geçersiz sayı")    

}