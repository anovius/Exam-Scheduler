let mongoose = require("mongoose");
let Notification = mongoose.model('Notification');

const sendNotification = ({title, subTitle,type,sentTo,user = null,data= {}}) => {
    smartupSocket.emit('notification'+sentTo);
    
    new Notification({
        title,
        subTitle,
        type,
        user,
        sentTo,
        data}).save().then(doc => {
            // TODO check here if user is online
        });
    
    
};

module.exports = { 
    sendNotification
};
