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

export class AccessToken
{
    access_token= null;
    error = null;
    error_description = null;
}