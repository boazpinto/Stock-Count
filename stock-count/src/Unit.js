import React from 'react';
import ReactDom from 'react-dom';
import { Button,InputGroup,FormControl } from 'react-bootstrap';

export default class Unit extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            quantity:this.props.quantity
        }
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.quantity !== this.props.quantity) {
            let quantity=this.props.quantity;
            this.setState({quantity})
        }
      }
    changeQuantity =(add)=>{
       
        let {quantity}=this.state;
        quantity=parseInt(quantity,10)+parseInt(add);
        // if (add)  {quantity++ } else {quantity--};
        // alert(quantity);
        // if (!quantity) quantity=' ';
        this.setState({quantity});
    }
    changeQuantityManualy=(e)=>{
        let {quantity}=this.state;
        quantity=e.target.value;
         if (!quantity) quantity=' ';
        this.setState({quantity});
    }
    render() {
        let { color, pic, header, line1, line2, line3 } = this.props;
        let {quantity}=this.state;
        if (!line1) line1=' -';
        if (!line2) line2=' -';
        if (!line3) line3=' -';
        let chooseQty = '';
        if (quantity!=null) {
            chooseQty =
                <InputGroup className="mb-3"  style={{ width: "40%", marginLeft: "30%", borderRadius: "30%" }}>
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={()=>{this.changeQuantity(-1)}}>-</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" value={quantity} onChange={this.changeQuantityManualy}/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={()=>{this.changeQuantity(1)}}>+</Button>
                    </InputGroup.Append>
                </InputGroup>

        }
        else {
            chooseQty =  <Button style={{ width: "90%", marginLeft: "10px", borderRadius: "10px" }}>Select</Button>
        }
        return (


            <div style={{ backgroundColor: color, width: "300px", height: "450px", borderRadius: "10px", margin: "10px" }} >
                <img src={pic} style={{ margin: "10px", width: "280px", height: "220px", borderRadius: "10px" }}></img>
                <h3 style={{ marginLeft: "10px" }}>{header}</h3>
                <p style={{ marginLeft: "10px" }}>{line1}</p>
                <p style={{ marginLeft: "10px" }}>{line2}</p>
                <p style={{ marginLeft: "10px" }}>{line3}</p>
                {chooseQty}
            </div>
        )
    }
}