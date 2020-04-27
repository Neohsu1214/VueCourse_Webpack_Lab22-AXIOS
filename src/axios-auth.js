/**
 * 獨立宣告一個axios instance 來使用
 * 通常會在 baseURL有多個的時候，個別依照不同的 baseURL 獨立宣告 axios 物件來使用
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-course-lab22-axios.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;