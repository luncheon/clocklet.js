var template = "<div class=\"clocklet\"><div class=\"clocklet-plate\"><div class=\"clocklet-dial clocklet-dial--minute\"><div class=\"clocklet-hand clocklet-hand--minute\"></div><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"0\" style=\"left:50%;top:11%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"1\" style=\"left:54.8%;top:4.3%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"2\" style=\"left:59.6%;top:5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"3\" style=\"left:64.2%;top:6.3%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"4\" style=\"left:68.7%;top:8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"5\" style=\"left:69.5%;top:16.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"6\" style=\"left:77%;top:12.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"7\" style=\"left:80.8%;top:15.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"8\" style=\"left:84.2%;top:19.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"9\" style=\"left:87.2%;top:23%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"10\" style=\"left:83.8%;top:30.5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"11\" style=\"left:92%;top:31.3%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"12\" style=\"left:93.7%;top:35.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"13\" style=\"left:95%;top:40.4%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"14\" style=\"left:95.7%;top:45.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"15\" style=\"left:89%;top:50%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"16\" style=\"left:95.7%;top:54.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"17\" style=\"left:95%;top:59.6%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"18\" style=\"left:93.7%;top:64.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"19\" style=\"left:92%;top:68.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"20\" style=\"left:83.8%;top:69.5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"21\" style=\"left:87.2%;top:77%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"22\" style=\"left:84.2%;top:80.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"23\" style=\"left:80.8%;top:84.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"24\" style=\"left:77%;top:87.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"25\" style=\"left:69.5%;top:83.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"26\" style=\"left:68.7%;top:92%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"27\" style=\"left:64.2%;top:93.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"28\" style=\"left:59.6%;top:95%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"29\" style=\"left:54.8%;top:95.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"30\" style=\"left:50%;top:89%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"31\" style=\"left:45.2%;top:95.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"32\" style=\"left:40.4%;top:95%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"33\" style=\"left:35.8%;top:93.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"34\" style=\"left:31.3%;top:92%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"35\" style=\"left:30.5%;top:83.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"36\" style=\"left:23%;top:87.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"37\" style=\"left:19.2%;top:84.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"38\" style=\"left:15.8%;top:80.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"39\" style=\"left:12.8%;top:77%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"40\" style=\"left:16.2%;top:69.5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"41\" style=\"left:8%;top:68.7%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"42\" style=\"left:6.3%;top:64.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"43\" style=\"left:5%;top:59.6%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"44\" style=\"left:4.3%;top:54.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"45\" style=\"left:11%;top:50%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"46\" style=\"left:4.3%;top:45.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"47\" style=\"left:5%;top:40.4%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"48\" style=\"left:6.3%;top:35.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"49\" style=\"left:8%;top:31.3%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"50\" style=\"left:16.2%;top:30.5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"51\" style=\"left:12.8%;top:23%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"52\" style=\"left:15.8%;top:19.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"53\" style=\"left:19.2%;top:15.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"54\" style=\"left:23%;top:12.8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"55\" style=\"left:30.5%;top:16.2%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"56\" style=\"left:31.3%;top:8%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"57\" style=\"left:35.8%;top:6.3%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"58\" style=\"left:40.4%;top:5%\"></button><button class=\"clocklet-tick clocklet-tick--minute\" data-clocklet-tick-value=\"59\" style=\"left:45.2%;top:4.3%\"></button></div><div class=\"clocklet-dial clocklet-dial--hour\"><div class=\"clocklet-hand clocklet-hand--hour\"></div><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"0\" style=\"left:50%;top:11%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"1\" style=\"left:69.5%;top:16.2%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"2\" style=\"left:83.8%;top:30.5%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"3\" style=\"left:89%;top:50%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"4\" style=\"left:83.8%;top:69.5%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"5\" style=\"left:69.5%;top:83.8%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"6\" style=\"left:50%;top:89%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"7\" style=\"left:30.5%;top:83.8%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"8\" style=\"left:16.2%;top:69.5%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"9\" style=\"left:11%;top:50%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"10\" style=\"left:16.2%;top:30.5%\"></button><button class=\"clocklet-tick clocklet-tick--hour\" data-clocklet-tick-value=\"11\" style=\"left:30.5%;top:16.2%\"></button></div><div class=\"clocklet-ampm\"></div><div class=\"clocklet-hand-origin\"></div></div></div>";

export default template;
