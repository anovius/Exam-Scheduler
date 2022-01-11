

const emitEvent = (event,sentTo,data= {}) => {
    smartupSocket.emit(event+sentTo, data);
};

module.exports = { 
    emitEvent
};
