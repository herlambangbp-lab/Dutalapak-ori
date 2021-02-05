import React, { Component} from 'react';

import { connect } from 'react-redux';
import { getKategori, getProductsByKeyword } from '../../../store/productDL/action';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class MenuDL  extends Component{
    constructor(props){
        super(props);
        this.customFuntionCall = this.customFuntionCall.bind(this)
    }

    componentDidMount(){
        

        this.props.dispatch(getKategori());

    }
    customFuntionCall(data){
        location.href=`/search?keyword=${data.replace(' & ','_')}&source=category)`;
        // Router.push(`/search?keyword=${data.replace(' & ','_')}&source=category)`);
        console.log(data);
    }
    render(){
        const { allKategori  } = this.props;
        console.log(allKategori);


        return(

            <div className="menu--product-categories">
                <div className="menu__toggle">
                    <i className="icon-menu text-white" ></i>
                    {/* <span><h4 className="text-white " > Kategori</h4></span> */}
                    </div>
                    <div className="menu__content">
                   
                    {allKategori!=null? 
                     <Menu  style={{ width: 256 }} mode="vertical" className="">
                        {allKategori.map(list => (
                        
                        <SubMenu key={list.DisplayProductId} title={list.DisplayProductDescription}>
                            
                            {/* {list.SubDisplayProductList.map(sublist => (
                                // <Menu.Item key={sublist.SubDisplayProductId}>{sublist.SubDisplayProductDescription}</Menu.Item> 
                                // {}
                            
                                <SubMenu key={sublist.SubDisplayProductId} title={sublist.SubDisplayProductDescription}>
                                {sublist.SubDisplayProduct2List != null? 
                                
                                    <Menu>
                                        {sublist.SubDisplayProduct2List.map(sublistproduct => (
                                            <Menu.Item key={sublistproduct.SubDisplayProduct2Id}>{sublistproduct.SubDisplayProduct2Description}</Menu.Item>
                                        ))}
                                    </Menu>
                                    
                                : ''
                                
                                }
                                    

                                </SubMenu>
                           
                            ))} */}
                            
                          
                        </SubMenu>
                   
                        ))}
                         
                        </Menu>
                        : <img className="img-loading" src="/static/img/loading-dl.svg" /> 
                    
                    }
                        
                    
                    {/* <ul className="menu__content menu--dropdown">
                        
                        <li >No categories</li>
                    </ul> */}
                    {/* {allKategori && allKategori.length > 0 ? (
                    <ul className="menu__content menu--dropdown">

                        { allKategori.map(item =>{

                            return (
                                <li>
                                    {item.type === 'dynamic'? (

                                        <a onClick={this.customFuntionCall}>{item.DisplayProductDescription}
                                        </a>

                                    ) : (
                                     
                                            <a onClick={() =>this.customFuntionCall(item.DisplayProductDescription)}>{item.DisplayProductDescription}
                                            </a>

                                    ) }
                                </li>
                            );
                        })}
                    </ul>
                    ) : (
                       <ul className="menu__content menu--dropdown">
                        <li >No categories</li>
                        </ul>
                    )} */}
                    </div>
            </div>
        
        );

    }


}
const mapStateToProps = (state) => {
    return state.productDL;
};
export default connect(mapStateToProps)(MenuDL);

                                    // <Link href={`/search?keyword=${item.CommerceProductDisplayDescription.replace(' & ','_')}&source=category`} >
                                    // handleSubmit(e) {
                                    //     e.preventDefault();
                                    //     const keyword = this.state.keyword;
                                    //     Router.push(`/search?keyword=${keyword}`);
                                    // }