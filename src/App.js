import './App.css';
import Form from './components/Form'
import React from 'react';
import CustomWidget from './components/CustomWidget'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "Auto Insurance"
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const t = document.head || document.getElementsByTagName("head")[0];
    script.src = 'https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js';
    script.async = true;
    script.onload = () => {
      window.WebChat.default(
        {
          customData: { language: "en" },
          storage: "local",
          tooltip: true,
          tooltipDelay: 500,
          socketUrl: "http://localhost:5005",
          title: "Auto Bot",
          mainColor: "#406ab3",
          userBackgroundColor: "#406ab3",
          userTextColor: "#cde9ce",
          showMessageDate: false,
          inputTextFieldHint: "Hi.Type your message here...",
          badge: " ",
          displayUnreadCount: true,
          isChatOpen: false,
          embedded: false,
          showCloseButton: true,
          fullScreenMode: true,
          showFullScreenButton: true,
          docViewer: false,
          // add other props here
        },
        null
      );
    }
    t.insertBefore(script, t.firstChild);
  }

  render() {
   
    return (
    <div className="App">     
     {/* <CustomWidget/>  */}
     <Form></Form>
    </div>
  );
}
}

export default App;
