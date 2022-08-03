import * as httpRequest from './index';

export const getHistory = async (q) => {
    try {
        const res = await httpRequest.get('user/history', q);
        return res;
    } catch (e) {
        console.log(e);
        return e?.response.data;
    }
};