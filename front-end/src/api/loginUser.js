import * as httpRequest from './index';

export const login = async (q) => {
    try {
        const res = await httpRequest.post('login', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};
