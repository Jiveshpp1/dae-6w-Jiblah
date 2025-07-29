async function update(id,timezone){
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
    console.log(response);
    const data = await response.json()
    console.log(data);
    const time = data.datetime.slice(11, 19);
    document.getElementById(id).innerHTML = time;
    document.getElementById(id).style.color = "red";

}
function allclcok(){
    update('clock_inET', 'America/New_York');
    update("clock_inIST", 'Asia/Kolkata');
    update("clock_inPST", 'America/Los_Angeles');
}
allclcok()
setInterval(allclcok, 100000); 