$(document).ready(function(){
    $.getJSON("/apip/1"+"/location/",function(data){
        console.log(data);
        $.each(data, function(key, value){
            for (var i=0; i<10; i++){
                $.getJSON("/apid/"+value[i],function(data){
                    var insert = '<div class="container"><div class="row"><div class="col-md-3"><div class="col-md-6 col-xs-12 list-group-item" id="' + data["_id"] + '"><div class="container"><div class="row"><div class="col-xs-3"><h2>'+ data["callnumber"] + '</h2><div hidden id="etc1' + data["_id"] +'"</div></div></div><div class="col-xs-9"><h2>' + data["properties"]["location"] + '</h2><div hidden id="etc2' + data["_id"] +'"<p>' + data["properties"]["details"] + '</p></div></div></div></div></div></div>';
                    $(insert).appendTo(".documentview");
                    var documentaddress = data["_id"]
                    document.getElementById(documentaddress).addEventListener("click",function(event){
                        (function(event){
                            //$("<p>"+data["_id"]+"</p>").appendTo("#" + documentaddress);
                            $("#etc2" + documentaddress).toggle();
                        }).call(document.getElementById(documentaddress), event);
                    });
                });
            }
        }); 
    });
});