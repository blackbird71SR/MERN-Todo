# MERN Todo

## Tools and Libraries

- JavaScript - The easiest programming language ⁉
- MongoDB - NoSQL and easy to scale database
- MongoDB Atlas - Cloud hosting of MongoDB
- Mongoose - For fast Object Data Modelling(ODM) of database
- Node - JavaScript runtime
- Express - Backend node framework for developing APIs
- React - Frontend framework for UI development
- GitHub - Version management
- VS Code - Entire project development
- Heroku - Project hosting and automatic deploys

## Database Description

For storing the todos, MongoDB is used. To keep it simple for this project, only actual todo text and completion status is tores. Mongodb automatically creates a unique id for each item which is used while deleting and updating completion status. The database schema using mongoose is as follows:

```js
const TodoSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required'],
    },
    isCompleted:{
        type: Boolean,
        default: false,
        required: [true, 'Completion status is required']
    }
})
``` 
## GitHub

[GitHub Repo](https://github.com/blackbird71SR/MERN-Todo)
