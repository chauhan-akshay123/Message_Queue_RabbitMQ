# 📨 RabbitMQ Producer-Consumer (Node.js + Docker)

This project demonstrates how to implement a **message queue system** using **RabbitMQ** with Node.js.  
We use **Docker** to run RabbitMQ without installing it on the local machine.

---

## 🚀 Features
- **Producer (`producer.js`)**: Sends email messages to a queue.
- **Consumer (`consumer.js`)**: Listens and processes messages from the queue.
- **Docker Support**: Runs RabbitMQ inside a container.

---

## 📌 Prerequisites
- [Docker](https://www.docker.com/get-started) installed
- Node.js installed (v14+ recommended)

---

## 🔧 Setup and Installation

### 1️⃣ Clone the Repository
```
git clone https://github.com/chauhan-akshay123/Message_Queue_RabbitMQ.git
```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Start RabbitMQ with Docker
```
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
```
- RabbitMQ will be accessible at ```amqp://localhost:5672```
- The management UI will be available at ```http://localhost:15672``` (Username: guest, Password: guest).

### 📤 Running the Producer (Send Messages)
- To send a message to RabbitMQ:
  ```node producer.js```

### Check output outout images in Demonstration folder  



### 📥 Running the Consumer (Receive Messages)  
- To listen for messages: ```node consumer.js```



