class UserLoginDTO {
    DataToken: string
    Username: string;
    Error: string;

    constructor(
        DataToken: string,
        Username: string,
        Error: string) 
        {
        this.DataToken = DataToken;
        this.Username = Username;
        this.Error = Error;
    }
}

export default UserLoginDTO