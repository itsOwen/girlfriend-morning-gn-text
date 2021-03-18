const venom = require("venom-bot");

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  }); 

const compareTime = (hour, minute, second) => 
  new Date(Date.now()).getHours() === Number(hour) && 
  new Date(Date.now()).getMinutes() === Number(minute) &&
  new Date(Date.now()).getSeconds() === Number(second);


function start(client) {
  const prompt = require("prompt-sync")({ sigint: true });
  const newpnumber = prompt("Enter your girlfriend/boyfriend phone number with code (91) : ");
  const newhour = prompt("Enter Morning Hour do you want to send Message? : ");
  const newmin = prompt("Enter Morning Minutes do you want to send Message? : ");
  const newhour1 = prompt("Enter Night Hour do you want to send Message? : ");
  const newmin1 = prompt("Enter Night Minutes do you want to send Message? : ");

  console.log("Successfully Started")

  function startLooking() {
    if(compareTime(newhour, newmin, 1)) { 
      sendMessage();
    }
    else if (compareTime(newhour1, newmin1, 1)) {
      sendMessage1();
  }
}

  setInterval(startLooking, 1000);

  const sendMessage = () => {
    client
      .sendText(`${newpnumber}@c.us`, "Good Morning ❤️")
      .then((result) => {
        console.log("Result: ", result);
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro);
      });
  };

  const sendMessage1 = () => {
    client
      .sendText(`${newpnumber}@c.us`, "Good Night ❤️")
      .then((result) => {
        console.log("Result: ", result);
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro);
      });
  };

}
