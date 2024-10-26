# Node.js Architecture

1. A client makes a request to a node.js server , all the request then go in a event queue (FIFO)

2. Event loop keeps a watch on a event queue regarding requests 

3. Then Event loop ek ek karke in requests ko pick karke unhe proces karke response send karta he

4. Ager wo code non blocking or async hua toh seedha process krke response send kardeta he 

5. Ager wo code blocking hua or sync hua toh ye request ko resolve karne ke lia thread pool (or we can say pool consists of workers) ke pass jate he

6. yani ki ek worker ya ek thread assign hota he har ek request ko resolve karne ke lie , & again req resolve hone ke baad response send kr dia jata he user ko

7. since threads limited hote he so ager saare threads busy he toh bhot time lag sakta he request ko resolve karne ke lie

8. means in blocking operation jab tak resolve nahi hote tab tak age ka code operate nahi hoga , ie..,so much of waiting