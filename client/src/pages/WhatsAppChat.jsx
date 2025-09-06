
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsAppChat = () => {
  return (
    <WhatsAppWidget
      phoneNo="917906923266"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt=""
      iconSize="40"
      iconColor="white"
      iconBgColor="#01a514"
      headerIcon="logocod.png"
      headerBgColor="#000a2d"
      headerTitle="codegptech"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br /> <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      placeholder="Type a message.."
      btnBgColor="#000a2d"
      btnTextColor="#ffffff"
    />
  );
};

export default WhatsAppChat;
