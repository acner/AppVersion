var html = context.getVariable("response.content");
var current_version = context.getVariable("output.current_version");
//const regex = / itemprop\=\"softwareVersion\"\>(.*)<\/div>/g;
var regex = / itemprop\=\"softwareVersion\"\>(.*?)<\/div>/g;

var m;

m = regex.exec(html);
print(JSON.stringify(m));

context.setVariable("version_number",m[1].trim())


if(m[1].trim() == current_version){
   context.setVariable("actualizar",false);
}else{
    context.setVariable("actualizar",true);
}
