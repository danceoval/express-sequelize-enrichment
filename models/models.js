// ## Specs

// ```
// - only a user with 2 or more awards can be a mentor
// - a user cannot mentor themselves
// - HINT: a key part of this is removing a users mentees if their award count falls below 2.
// ```

// ### Models

// ```
// - User
// - Award
// ```


var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/juniorEnrichment');
var Award = require('./award')


var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        validate : {
            notEmpty : true
        }
    },
    mentorStatus : {
        defaultValue: false
    },
    canBeMentor : {
        defaultValue: false
    },
    mentors : {
        defaultValue : []
    }
})

var Award = db.define('award', {
    name: {
        type: Sequelize.STRING,
        allowNull : true
    },
    rewards: {
        defaultValue : []
    }
})


User.prototype.becomeMentor = function(mentorToAdd){
    if(mentorToAdd.rewards.length >= 2){
        User.mentorStatus = true
    }
}

User.prototype.loseMentorStatus = function(mentor){
    if(User.mentorStatus === true && Award.rewards.length <2){
        User.mentorStatus = false;
    }

}

User.prototype.potentialMentor = function(){
    if(Award.rewards.length >= 2){
        this.canBeMentor = true;
    }
}


User.prototype.addMentor = function( mentor){
//if this.canBeMentor === true
if(mentor.canBeMentor === true && this.name !== mentor){
    user.mentors.push(mentor)
}
}

User.prototype.removeMentor = function(mentor){
    users.mentor.filter((mentors) =>{
        mentors !== mentor
    })    
}

User.prototype.generateReward = function(reward){
    Award.rewards.push(reward)
}

User.prototype.removeReward = function(user, rewardToRemove){
    Award.rewards.filter((reward) =>{
        reward !== rewardToRemove
    })   
}





User.belongsToMany(User, {as : 'Mentor'})
Award.belongsTo(User)


module.exports = {
    User,
    Award
}