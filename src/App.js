import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const x = axios({
    method: 'post',
    url: 'http://internal-a49872e2b408d43d28ce6000e575e84b-437549400.ap-south-1.elb.amazonaws.com/api/app-users',
    data: {
      "appRoles": [
      {
        "id": 2,
        "isDefault": true,
        "name": "RETAILER"
      }
    ],
    "altEmail": "string",
    "altMobile": "string",
    "countryId": 0,
    "createdBy": "System",
    "createdDate": "2021-02-09T10:12:53.219Z",
    "depo": "string",
    "email": "owxnoxqxevyxgrjqrg@efghijklmn.com",
    "enterpriseId": 4,
    "firstName": "Mr.Badal",
    "lastModifiedBy": "System",
    "lastModifiedDate": "2021-01-18T10:11:38.219Z",
    "lastName": "Sharma",
    "latitude": 0,
    "loginType": "EMAIL",
    "longitude": 0,
    "mobile": "9667359067",
    "password": "nurture",
    "referrerMobileNumber": "string",
    "referrerName": "string",
    "userType":"RETAILER"
  },
  headers : {
    "accept": "*/*"
  }  
  })
  .then((res) => {
    console.log("res", res)
  })
  .catch((res) => {
    console.log(res)
  })

  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
