


function GetXmlHttpObject()
{
    //creating xmlhttprequestobject.common method for any ajax application
    var xmlHttp = null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e)
    {
        //Internet Explorer
        try
        {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}
//to get states
function goToNotificationLocationFCreminder(notificationID)
{

    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null)
    {
        alert("Browser does not support HTTP Request")
        return
    }
    else
    {

        //sending selected country to servlet
        var url = "Controller?newproperties=GOTONOTIFICATIONLOCATION&notificationID=" + notificationID;
        //creating callback method.here countrychanged is callback method
        xmlHttp.onreadystatechange = goToNotificationLocationFCreminderChanged

        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)
    }

}
function goToNotificationLocationFCreminderChanged()
{

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete")
    {

        var showstates = xmlHttp.responseText;


        //displaying response in select box by using that id
        //document.getElementById("pageNew").innerHTML=showstates;

        
        //displaying response in select box by using that id
        document.getElementById("pageNew").innerHTML = showstates;
        
        
        
        myEventsFamily();
        
        getNotifNumber();

    }
}
