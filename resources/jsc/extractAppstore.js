 var _json = context.getVariable("response.content");
var current_version = context.getVariable("output.current_version");

var newJson = JSON.parse(_json);
//print(JSON.stringify(newJson));

//print(newJson.results.length);
if(newJson.results && newJson.results.length>0){
    context.setVariable("version_number",newJson.results[0].version);
    if(versionCompare(newJson.results[0].version,current_version)>0){
        context.setVariable("actualizar",true);
    }else{
        context.setVariable("actualizar",false);
    }
     context.setVariable("url_detalle",newJson.results[0].trackViewUrl);
}

