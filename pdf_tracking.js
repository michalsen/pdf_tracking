

 jQuery(function(){
  var filename = getQuerystring("pdf");
  console.log(filename);
  var sn_host = location.protocol + '//' + location.host;
   //location ='https://www.straightnorth.com/pdf_download?dpdf='+filename;
   location = sn_host + '/pdf_download?dpdf='+filename;
  });

function getQuerystring(key, default_)
  {
    if (default_==null) default_="";
    key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
    var qs = regex.exec(window.location.href);
     if(qs == null)
       return default_;
     else
       return qs[1];
   }

