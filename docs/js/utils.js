function isWx(){
    var ua = navigator.userAgent.toLowerCase();
　　var isWeixin = ua.indexOf('micromessenger') != -1;
　　if (isWeixin) {
   　　 return true;
　　}else{
   　　 return false;      
　　}
}

// https://sbcproxyer.github.io/dl/

function drawQrcode(cb){
    var text = njconfig && njconfig.qrdltext ? njconfig.qrdltext : 'https://sbcproxyer.github.io/dl/';
    if(!QrCodeWithLogo){
       console.error('no QrCodeWithLogo.')
       return;
    }


     new QrCodeWithLogo({
       canvas:document.querySelector('#qrCode'),
       content:text,
       width:220,
       logo:{
          src:'./assets/images/logo.png',
          logoSize:0.25,
          borderSize:'2px',
          borderRadius:30
       }
    }).toCanvas().then(()=>{
       if(typeof cb === 'function'){
          cb('success')
       }
    })
    
}