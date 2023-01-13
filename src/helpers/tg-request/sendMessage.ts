import axios from 'axios';

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

const sendMessage = async (message: string) => {
    const query = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage?`;
    const params = `chat_id=${TG_CHAT_ID}&text=${message}&parse_mode=html`;
    const url = query + params;

    const data = await axios.get(url);
}

export default sendMessage;