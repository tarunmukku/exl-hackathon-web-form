import { useState } from "react";

const SetQuestionChatbot = (query) => {
 
    const SetQuestion = (query) => {

        const chatTextArea = document.getElementsByClassName('rw-new-message')[0];
       
     
        chatTextArea.value = query;
        const ke = new KeyboardEvent('keydown', {
            bubbles: true, cancelable: true, keyCode: 13
        });
        chatTextArea.dispatchEvent(ke);
        
    };
    return { SetQuestion };
};

      
export default SetQuestionChatbot;    