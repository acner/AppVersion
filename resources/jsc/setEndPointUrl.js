
var dispositivo = context.getVariable("output.dispositivo");
var _package = context.getVariable("output.package");

if(dispositivo =='android'){
    context.setVariable("target.url",'https://play.google.com/store/apps/details?id='+_package);
}else if(dispositivo =='ios'){
   context.setVariable("target.url",'https://itunes.apple.com/lookup?bundleId='+_package);
}