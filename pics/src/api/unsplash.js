import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID a01936c25eb974a58c78ac2cb804b2667b638c29f3800bcb1ae6b6eb0460a10f'
    }
});
