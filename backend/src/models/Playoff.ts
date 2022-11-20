class Playoff {
    Order: Number;
    Teams: Array<Object>;
    

    constructor(
        Order: Number,
        Date: string,
        Teams: Array<Object>) 
        {
        this.Order = Order;
        this.Teams = Teams;
    }
}


export default Playoff