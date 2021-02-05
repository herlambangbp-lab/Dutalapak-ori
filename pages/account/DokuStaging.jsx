import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClear } from '../../store/cart/action';


class DokuStaging extends Component {
    constructor(props) {
        super(props);
        this.RefDoku = React.createRef()
        
    }

    componentDidMount(){
        // console.log(this.props);
        this.props.dispatch(getClear());
        location.href='/account/paymentmetode';
    //     setTimeout(() => {
               
    //         console.log(this.RefDoku);
    //         this.RefDoku.current?.submit();
    //         // this.refs.RefDoku.dispatchEvent(new Event("submit"))
            
    // }, 4000);

    }

    render() {
        
        const data = this.props;
        console.log('start');
        if ( data.data==null) {
            return (
                <div>
                    <h5>null</h5>
                </div>
                
    
            );
        } else {
            // "https://staging.doku.com/Suite/Receive"
            // console.log(data.data.data.returnUrl);
            // <form action={data.data.data.returnUrl} ref={this.RefDoku} hidden={true} method="post" id="DokuForm">
            return (
                <div>
                    <h5>Waiting ...</h5>
                    <form action={data.data.data.returnUrl} ref={this.RefDoku} hidden={true} method="post" id="DokuForm">
                        {
                        data.data!==null?
                        data.data.data.Data.map((item,index)=>(
                            <input key={index} type="text" name={item.id} value={item.value}/>
                        )):('asdasdas')
                        }
                    </form> 

    
                </div>
                
    
            );
            
        }
        
    }
}
const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(DokuStaging);
// export default DokuStaging;
