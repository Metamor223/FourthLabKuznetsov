import axios from "axios";

const nodeServerUrl = process.env.NODE_SERVER;

if (!nodeServerUrl) {
    console.error('Переменная окружения NODE_SERVER не определена');
    process.exit(1);
}

axios.get(nodeServerUrl).then(response => {
    console.log(response.data)
}).catch(error=>{
    console.log('Ошибка при получении данных', error)
});