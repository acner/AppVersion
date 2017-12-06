# AppVersion for PlayStore and appstore
Get the app version from playstore and appstore using the package name. The project extracts the version of the app by scraping the html code from the playstore page by means of apigee
### explanation
```
https://{urlapigee}.apigee.net/appversion/{typeSystem}?id={packageName}&version={calculateVersion}
```
* **urlapigee**:your apigee account
* **typeSystem**:android or ios
* **packageName**:your app package
* **calculateVersion**: version of your app

#### Ex: 
```
https://elyon-test.apigee.net/appversion/android?id=com.pilsenexafutbol&version=0.0.2
```
or
```
https://elyon-test.apigee.net/appversion/ios?id=com.pilsenexafutbol&version=0.0.2
```

This causes that it brings the last version of the app, and calculates if it is necessary to update the app.


import to apigee project zip.




