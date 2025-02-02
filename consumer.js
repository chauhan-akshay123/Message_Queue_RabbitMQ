const amqp = require("amqplib")

async function receiveMail(){
    try{
      const connection = await amqp.connect("amqp://localhost");
      const channel = await connection.createChannel()
      
      await channel.assertQueue("mail_queue", {durable: false});

      channel.consume("mail_queue", (message) => {
        if(message !== null){
           console.log("Received messages: ", JSON.parse(message.content));
           channel.ack(message); 
        }
      });
    } catch(error){
        console.error(error)
    }
}

receiveMail();