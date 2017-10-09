
// ### Routes

// ```
// - GET /
// - GET /users
// - POST /users
// - PUT /users/:id
// - DELETE /users/:id
// - POST /users/:userId/awards
// - DELETE /users/:userId/awards/:id
// ```

const router = require('express').Router();
const User = require('../models/user.js')





//READ
router.get('/', (req, res, next) =>{
    User.findAll()
    .then(user =>{
        res.json(user)
    })
    .catch(next)
})

//Create
router.post('/', (req, res, next) =>{
    User.create(req.body)
    .then(res.json({message: 'User Created'}))
    .catch(next)
})

//update
router.put('/:id', (req, res, next) =>{
    User.findById(req.params.id)
    .then(user=>{
        return user.update(req.body)
    })
    .then(updatedUser =>{
        res.json({
            message: "Updated successfully",
            User: updatedUser
        })
        .catch(nexdt)
    })
})

//create award
router.post('/:id/awards', (req, res, next) =>{   
    User.generateReward(req.params.id)
    .then(redirect(res))
    .catch(next)

})

//delete award
router.delete('/:id/awards/:id', (req, res, next) =>{
    User.removeReward(req.params.userId, req.params.id)
    .then(redirect(res))
    .catch(next)
})


module.exports = router




// const redirect = (res) =>{
//     return () =>{
//         res.redirect('/users')
//     }
// }
//saw this function in the video
//not sure what it does so i've 
//commented it out