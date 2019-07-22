## DoN OSBP Small Business Dashboards

Updated MEAN stack version of former LAMP based dashboards.  Now includes splash page with links for dashboards (tested), year-to-date data (in development), United States spending maps (in development), and FPDS-NG E-Z Search (in development).  

#### Prerequisites

You <i><b>must</b></i> use the latest @swimlane build in order for the custom CSS changes of the ngx-charts to load properly.  In order for the @swimlane library to function properly make sure you have the latest @angular build installed as well.  Unless you specify otherwise in <i>server.js</i> you need to have Port 9876 open for the database backend to run.  

#### Installation 

```
npm install // installs all dependencies
``` 

```
ng serve // starts application on dev server Port 4200
nodemon server.js // starts local MongoDB database backend using Port 9876 
``` 

If Port 4200 is already in use specify the Port you would like to use in the following command: 

```
ng serve --port XXXX
```
#### Backend Database Notes

Development application is using MongoDB-Mongoose backend but OMB Max based application will use IBM Db2 OData service.  During development MySQL was used initially but was replaced with MongoDB to ensure ngx-charts visualizations would render correctly without needing additional libraries.  

#### Development Server Details
```
Visual Studio Code: 1.35.x
Chrome: 66.0.x
V8: 6.6.x
Firefox: 67.0.x
Node.js: 10.2.x
MongoDB 3.6.x 
OS: Ubuntu 18.04.x LTS
```