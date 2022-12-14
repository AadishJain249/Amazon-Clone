import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./CountrySelector.css";
export default function CountrySelector() {
  const [select, setSelect] = useState("IN");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="App">
      

      <ReactFlagsSelect 
        selected={select}
        onSelect={onSelect}
        countries={["AD","FI", "GB", "IE", "IT", "NL", "SE","YE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","EU","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GG","GH","GI","GL","GM","GN","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PN","PR","PS","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SK","SL","SM","SN","SO","SR","SS","ST","SV","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","YE","ZA","ZM","ZW"]}
        
      />
      <br/>

      
    </div>
  );
}
