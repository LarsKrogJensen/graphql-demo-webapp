export class AppModel {
    _token = null;

    get token()
    {
        return this._token;
    }
    set token(newToken)
    {
        this._token = newToken
    }

}