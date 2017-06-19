function taskThree(inputLines) {
    var senderPattern = /from="([A-Z][a-zA-Z\s*\.]*)"/g;
    var senderToFind = senderPattern.exec(inputLines);
    if (senderToFind == null) {
        console.log("Missing attributes");
    } else {
        var sender = senderToFind[1];
    }

    var recipientPattern = /to="([A-Z][a-zA-Z\s*\.*]*)"/g;
    var recipientToFind = recipientPattern.exec(inputLines);
    if (recipientToFind == null) {
        console.log("Missing attributes");
    } else {
        var recipient = recipientToFind[1];
    }

    var messagePattern = /">([A-Za-z0-9\s!,.?"'@~#\^d]*)<\/message>/g;
    var messageToFind = messagePattern.exec(inputLines);
    if (messageToFind == null) {
        console.log("Invalid message format");
    } else {
        var message = messageToFind[1];
    }

    if (senderToFind != null && recipientToFind != null && messageToFind != null) {
        let html = "<article>\n";
        html += `  <div>From: <span class="sender">${sender}</span></div>\n  <div>To: <span class="recipient">${recipient}</span></div>\n`;
        html += `  <div>\n`;
        message = message.split("\\n");
        html += `    ${"<p>" + message + "</p>"}\n`;
        html += `  </div>\n`;
        html += "</article>\n";
        console.log(html);
        //console.log(messageDa(message));
    }
}

//} else if (sender == undefined && recipient == undefined && message == undefined) {
//    console.log("Invalid message format");
//}

//else if (sender == undefined || recipient == undefined) {
//    console.log("Missing attributes");
//}


//function replacer(match, gr1, gr2) {
//    return gr1;
//}


//console.log(sender);
//let sender = inputLines.replace(senderPattern, replacer);
//let recipient = /to="([A-Z][a-zA-Z\s*\.*]*)"/g;
//    let message = "";
//    let pattern = "";
//
//
//    for (let line of inputLines) {
//        let matchOne = sender.exec(line);
//        if (matchOne) {
//            sender = matchOne
//        }
//    }
//
//    if (sender != undefined && recipient != undefined && message != undefined) {
//        let html = "<article>\n";
//        html += `  <div>From: <span class="sender">${sender}</span></div>\n  <div>To: <span class="recipient">${recipient}</span></div>\n`;
//        html += `  <div>\n`;
//        html += `    <p>${message}</p>\n`;
//        html += `  </div>\n`;
//        html += "</article>\n";
//        console.log(html);
//    } else if (sender == undefined && recipient == undefined && message == undefined) {
//        console.log("Invalid message format");
//    }
//
//    else if (sender == undefined || recipient == undefined) {
//        console.log("Missing attributes");
//    }

//taskThree('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');
//taskThree('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');
taskThree('<message to="MasterBlaster" from="TheAnimal" timestamp="1497254114">Same old, same old\nLet\'s go out for a beer\nLet\'s go out for a beer</message>');
//taskThree('<message from="Alice" timestamp="1497254112">Same old, same old</message>');//Missing attributes
//taskThree('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>');//Invalid message format
//taskThree('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>');//Invalid message format


