class Playoff {
    Order: Number;
    Date: string;
    Teams: Array<Object>;
    

    constructor(
        Order: Number,
        Date: string,
        Teams: Array<Object>) 
        {
        this.Order = Order;
        this.Date = Date;
        this.Teams = Teams;
    }
}


export default Playoff