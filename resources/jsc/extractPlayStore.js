var html = context.getVariable("response.content");
var current_version = context.getVariable("output.current_version");
var _package = context.getVariable("output.package");
//const regex = / itemprop\=\"softwareVersion\"\>(.*)<\/div>/g;
var regex = / itemprop\=\"softwareVersion\"\>(.*?)<\/div>/g;

var m;

m = regex.exec(html);
print(JSON.stringify(m));

context.setVariable("version_number",m[1].trim());

if(versionCompare(m[1].trim(),current_version)>0){
   context.setVariable("actualizar",true);
}else{
    context.setVariable("actualizar",false);
}
 context.setVariable("url_detalle","https://play.google.com/store/apps/details?id="+_package+"&hl=es");