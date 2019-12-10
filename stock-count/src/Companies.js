import React from 'react';
import ReactDom from 'react-dom';
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import Hubdb from 'hubdb';

export default class Companies extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         quantity:this.props.quantity
    //     }
        // Don't call this.setState() here!
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    // }
    
    componentDidMount() {
        var companies = Hubdb({
            token: '017ab523ac4f22e603d4277332be56bfe33adb07',
            username: 'boazpinto',
            repo: 'Stock-Count',
            branch: 'db'
           });
           companies.add({ name: 'CityTime',
                           pic:'https://media.licdn.com/dms/image/C4D0BAQHNR7cDRCKldQ/company-logo_200_200/0?e=2159024400&v=beta&t=d0c-E24gHdgClmB7d1wjzoQtiiW8gbZjAjzd5uHTZE0' 
                         }, function() {
                            companies.list(function(err, res) {
                    console.log(res);
           });
      
      })
    }

    render() {

        return (


            <div >
            </div>
        )
    }
}