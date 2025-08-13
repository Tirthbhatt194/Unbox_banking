import axios from "axios";

export const sendOTP = async (phone: any, code: any) => {
  //   const API_KEY = "YOUR_API_KEY";
  //   const SENDER_ID = "YOUR_SENDER_ID";
  const MESSAGE = `Your OTP for UnboxBanking is ${code}. Never share this code with anyone!`;
  const URL = `https://portal.vasudevsms.in/api/mt/SendSMS?user=patedr02&password=tQV5hGPZug&senderid=LIMERR&channel=Trans&DCS=0&flashsms=0&number=${phone}&text=Your+one+time+verification+code+for+Limerr-POS+app+is+%3A+${code}.+Powered+By+Limerr.&route=2&dlttemplateid=1307161950775170847`;

  try {
    const response = await axios.get(URL);
    console.log("OTP sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
