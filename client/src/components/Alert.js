import { notification } from "antd";

const openAlert  = (type, message) => {
    notification[type]({
        message: message,  
        placement:"bottomRight",        
        duration: 6
    });
};

export default openAlert
