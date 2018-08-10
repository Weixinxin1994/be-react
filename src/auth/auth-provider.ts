import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

class AuthAction {

    private type: any
    private params: any

    constructor(type, params) {
        this.type = type
        this.params = params
    }

    public action() {
        switch (this.type) {
            case AUTH_LOGIN: return this.authLogin(this.params)
            case AUTH_LOGOUT: return this.authLogout(this.params)
            case AUTH_ERROR: return this.authError(this.params)
            case AUTH_CHECK: return this.authCheck(this.params)
            default: throw new Error('异常操作！')
        }
    }

    private async authLogin(params) {
        const { username, password } = params;
        if (username !== 'root' || password !== 'password') {
            throw new Error('登陆失败，请检查！')
        }
        localStorage.setItem('username', username);
    }

    private async authLogout(params) {
        localStorage.removeItem('username');
    }

    private async authError(params) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            throw new Error('请登陆！')
        }
    }

    private async authCheck(params) {
        const username = localStorage.getItem('username')
        if (!username) {
            throw new Error('当前用户未登陆')
        }
        return username
    }
}

export default (type, params) => new AuthAction(type, params).action()
