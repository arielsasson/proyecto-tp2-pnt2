import Prediction from "./Prediction.js";

class User {
    Username : string
    Password: string
    Predictions: Prediction[]
    
    constructor(Username: string, Password : string, Predictions: Prediction[]) {
        this.Username = Username;
        this.Password = Password;
        this.Predictions = Predictions
    }
}

export default User