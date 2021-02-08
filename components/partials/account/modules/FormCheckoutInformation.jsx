import React, { Component } from 'react';
import Link from 'next/link';
// import Router from 'next/router';
// import { Switch } from 'antd';
// import ProsesPayment from '../component/ProsesPayment';
// ./component/ProsesPayment
import { connect } from 'react-redux';
import {
    getCart,
    getCartKurir,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    addAddressForm,
    increaseOngkirnb,
    decreaseOngkirnb,
    getCheckTarif,
} from '../../../../store/cart/action';


import ProductCart from '../../../elements/products/ProductCart';

import { Form, Input, Switch, Checkbox, notification,
Table, Radio, Popconfirm, Select,
} from 'antd';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
        this.state= {
            userFull: '',
            formDropship: true,
            formFillDropship:'',
            formUser:'',
            status: false,
            setCities: null,
            setSecondCity: null,

            pickup: 'SDA',
            destination: 'SUB10000',


        };
        this.onChange = this.onChange.bind(this)
    }



    componentDidMount() {
        const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
        .auth;
        let currentAuth = JSON.parse(localAuth);
        // console.log(currentAuth);
        const pay = {
            fee: 0,
    };
    const {pickup,destination} = this.state;

    this.props.dispatch(decreaseOngkirnb(pay));
        this.setState({
            userFull: currentAuth,
            formUser: {
                setData: {
                    memberAddress: currentAuth.profilEdit.memberAddress,
                    memberAddressCity: currentAuth.profilEdit.memberAddressCity,
                    memberAddressDistrict: currentAuth.profilEdit.memberAddressDistrict,
                    memberAddressPostalCode: currentAuth.profilEdit.memberAddressPostalCode,
                    memberAddressSubDistrict: currentAuth.profilEdit.memberAddressSubDistrict,
                    phone: currentAuth.profilEdit.phone,
                    memberFullName: currentAuth.profilEdit.memberFullName,
                },
                setDataDropship: {
                    memberAddress: '',
                    memberAddressCity: '',
                    memberAddressDistrict: '',
                    memberAddressPostalCode: '',
                    memberAddressSubDistrict: '',
                    phone: '',
                    memberFullName: '',
                },
                // isDropship: 'False',
                


            },

        })
        // increaseOngkirnb
        const cityData = {
            'Duta Cargo': ['Rp. 10.000','Rp. 12.000'],
            'SiCepat': ['Rp. 10.000', 'Rp. 15.000'],
            };
        const dataCektarif = {
            pickupBarang: pickup,
            destinationBarang: destination,
            // dataProduct[]: {
            //     grossWeight:1,
            //     height:10,
            //     length:10,
            //     width:10,
            // } 
        }
            // setCities(cityData[value]);
            // setSecondCity(cityData[value][0]);
            // console.log(value);
            this.setState({
                setCities: cityData['Duta Cargo'],
                setSecondCity: cityData['Duta Cargo'][0],
            })
        this.props.dispatch(increaseOngkirnb(10000));
        // const {userFull} = this.state;
        // console.log(userFull);
        this.props.dispatch(getCartKurir(currentAuth))
        this.props.dispatch(getCart());
        this.props.dispatch(getCheckTarif(dataCektarif));
    }

    onChange(checked) {

        if (checked == true) {

            this.setState({
                formDropship: false,
                status: true,
            })


           
  
            
        } else {
            this.setState({
                formDropship: true,
                status: false,
            
            })
        }
        // console.log(`switch to ${checked}`);
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    handleSubmitCheck = data => {
        const modalSuccess = type => {
            notification[type]({
                message: 'Oops ! ',
                description: 'Periksa Kembali data dan Simpan alamat Pengiriman',
                duration: 100,
            });
        };
        const modalDropData = type => {
            notification[type]({
                message: 'Oops ! ',
                description: 'Harap lengkapi Informasi Pengirim',
                duration: 100,
            });
        };
        // console.log(data);
        // console.log(this.props);
        // console.log(this.state);
        const { formDropship, formUser, formFillDropship, status } = this.state;
        if (formDropship == true) {
            console.log(`ini tanpa dropship`);
            if (formUser.setData.memberAddress == "") {
                modalSuccess('warning');
                this.handleFeatureWillUpdate;
            } else {

                const dataDropship = {
                    isDropship: status,
                    dataFix: formUser,
                }
                console.log(dataDropship);
                // console.log(status);
                // console.log(formDropship);
                this.props.dispatch(addAddressForm(dataDropship));
                location.href='/account/paymentmetode';
            }
            
        } else {
            console.log(`ini dengan dropship`);
            if (formUser.setDataDropship.memberAddress == '') {
                modalSuccess('warning');
                this.handleFeatureWillUpdate;
            } else {
            if (formUser.setData.memberAddress == '') {
                modalDropData('warning');
                this.handleFeatureWillUpdate;
            } else {
                const dataDropship = {
                    isDropship: status,
                    dataFix: formUser,
                }
                console.log(dataDropship);
                // console.log(status);
                // console.log(dataDropship);
                // console.log(formDropship);
                // console.log(dataDropship);
                this.props.dispatch(addAddressForm(dataDropship));
                location.href='/account/paymentmetode';
                }
            }
            
        }
        // this.props.dispatch(removeItem(product));
    };

    handleSubmitCheckDropship = values => {
        const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
        .auth;
        let currentAuth = JSON.parse(localAuth);
        

        // console.log(dataDropship);
        this.setState({
            userFull: currentAuth,
            formUser: {
                setData: {
                    memberAddress: currentAuth.profilEdit.memberAddress,
                    memberAddressCity: currentAuth.profilEdit.memberAddressCity,
                    memberAddressDistrict: currentAuth.profilEdit.memberAddressDistrict,
                    memberAddressPostalCode: currentAuth.profilEdit.memberAddressPostalCode,
                    memberAddressSubDistrict: currentAuth.profilEdit.memberAddressSubDistrict,
                    phone: currentAuth.profilEdit.phone,
                    memberFullName: currentAuth.profilEdit.memberFullName,
                },
                setDataDropship: {
                    memberAddress: values.memberAddress,
                    memberAddressCity: values.memberAddressCity,
                    memberAddressDistrict: values.memberAddressDistrict,
                    memberAddressPostalCode: values.memberAddressPostalCode,
                    memberAddressSubDistrict: values.memberAddressSubDistrict,
                    phone: values.phone,
                    memberFullName: values.memberFullName,
                },
                // isDropship: 'True',
                


            },

        })

        // console.log();
        // this.props.dispatch(removeItem(product));
    };
//noted
    handleProvinceChange = value => {
        const provinceData = ['Duta Cargo', 'SiCepat'];
        const cityData = {
        'Duta Cargo': ['Rp. 10.000'],
        'SiCepat': ['Rp. 10.000', '15.000'],
        };
        // setCities(cityData[value]);
        // setSecondCity(cityData[value][0]);
        console.log(value);
        this.setState({
            setCities: cityData[value],
            setSecondCity: cityData[value][0],
        })
      };
    
    onSecondCityChange = value => {
        const provinceData = ['Duta Cargo', 'SiCepat'];
        const cityData = {
        'Duta Cargo': ['Rp. 10.000'],
        'SiCepat': ['Rp. 10.000', '15.000'],
        };
        console.log(value);
        // setSecondCity(value);
        this.setState({
            setSecondCity: value,
        })
      };


    render() {
        // console.log();
        // const [cities, setCities] = React.useState(cityData[provinceData[0]]);
        // const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
      
        //noted
        const provinceData = ['Duta Cargo', 'SiCepat'];
        const cityData = {
        'Duta Cargo': ['Rp. 10.000'],
        'SiCepat': ['Rp. 10.000', '15.000'],
        };
        // const sementara: cityData['SiCepat'];
        // console.log(this.state.setSecondCity);
        // const dataTarif = [];
        const { amount, cartItems, cartTotal, totalTransaksi, dataCheckTarif } = this.props;
        // console.log(dataCheckTarif);
        // if (dataCheckTarif.data == undefined) {
        //     const dataTarif = [];
        // } else {
        //     //  const dataTarif = dataCheckTarif.data.Data;
        //     // console.log(dataTarif);
        //     // const datat = dataTarif['07012021175228'+'SiCepat'];
        //     // console.log(datat); 
        // }
        // // console.log(dataTarif['07012021175228'+'SiCepat']);
        // console.log(dataTarif);
        // console.log(dataCheckTarif);
       

        const tableData = [];
        const columns = [
        {
            title: "Product",
            dataIndex: "pilihanStoct",
            // render: (text) => <a>{text}</a>
        },
        {
            title: "Harga",
            dataIndex: "harga"
        },
        {
            title: "Banyak",
            dataIndex: "quantity"
        },
        {
            title: "Total",
            dataIndex: "Total"
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              cartItems.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleRemoveCartItem(record.Detail)}>
                  <a>DELETE</a>
                </Popconfirm>
              ) : null,
        }
        ];


        if (cartItems.length >0) {

            for (let i = 0; i < cartItems.length; i++) {
                tableData[i] = {
                    key:[i],
                    pilihanStoct: cartItems[i].pilihanStoct.ProductName+cartItems[i].pilihanStoct.ProductVarianName,
                    harga: cartItems[i].harga,
                    quantity: cartItems[i].quantity+ " item",
                    Total: cartItems[i].quantity*cartItems[i].harga,
                    Detail:  cartItems[i],
                };
                    
            }
        } else {
            tableData[0] = 
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              };

            
        }

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                
                console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
                );
        },
            getCheckboxProps: (record) => ({
                disabled: record.name === "Disabled User",
                // Column configuration not to be checked
                name: record.name
            })
        };
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        const { userFull, formDropship } = this.state;

        if (userFull == "") {
            return (
                <h5>loading ...</h5>
            );
            
        } else {
            
            // console.log(tableData);
            return (
                <Form 
                    
                    className="ps-form--checkout"
                    onFinish={this.handleSubmitCheck}>
                    

                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-form__billing-info">
                                    
                                    <div className="ps-section__user">
                                        <img src="/static/img/icon-person.svg" className="icon" alt=""/>
                                        {userFull.accountInfo.Email == "" ? (
                                            <strong>Masuk Sebagai {userFull.accountInfo.Name}</strong>
                                        ) : (
                                            <strong>Masuk Sebagai {userFull.accountInfo.Email}</strong>
                                        ) } 
                                        
                                    </div>
                                    <h3 className="ps-form__heading">
                                        Penerima
                                    </h3>
                                    <div className="card">
                                        {userFull.profilEdit.phone == null ? 
                                            (
                                                <div className="container-card">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h4><strong>Informasi Penerima belum lengkap</strong></h4>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <Link href="/account/user-information">
                                                                    <a ><h5 className="link">Ubah Informasi pengirim</h5> </a>
                                                                </Link>
                                                            </div> 
                                                            <div className="col-6 text-right pt-30">
                                                            <Switch onChange={this.onChange} />   
                                                            &nbsp; kirim sebagai dropship 
                                                        </div> 
                                                    </div>
                                                </div>
                                            ):(
                                            
                                                <div className="container-card">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h4><strong>{userFull.profilEdit.memberNickName}</strong></h4>
                                                            <h5>{userFull.profilEdit.phone}</h5>
                                                            <h5>{userFull.profilEdit.memberAddress},{userFull.profilEdit.memberAddressCity},{userFull.profilEdit.memberAddressPostalCode}</h5>
                                                            
                                                                
                                                        </div> 
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                           <Link href="/account/user-information">
                                                                <a ><h5 className="link">Ubah Informasi pengirim</h5> </a>
                                                            </Link>
                                                        </div> 
                                                        <div className="col-6 text-right pt-30">
                                                        <Switch onChange={this.onChange} />   
                                                        &nbsp; kirim sebagai dropship 
                                                        </div> 
                                                    </div>
                                                    
                                                    
                                                                                        
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="card">
                                        <div className="container-card">
                                                
                                        <Form
                                            labelCol={{
                                            span: 4,
                                            }}
                                            wrapperCol={{
                                            span: 14,
                                            }}
                                            hidden={formDropship}
                                            // onFinish={(values) =>this.}
                                            onFinish={(values) => this.handleSubmitCheckDropship(values)}
                                            // layout="horizontal"
                                            // initialValues={{
                                            //   size: componentSize,
                                            // }}
                                            // onValuesChange={onFormLayoutChange}
                                            // size={componentSize}
                                            >
                                            <h4><strong>Data Penerima</strong></h4>
                                                <Form.Item 
                                                    name="memberFullName"
                                                   
                                                    label="Nama Lengkap">
                                                    <Input 
                                                        className="form-control"
                                                        // name="fullName"
                                                        placeholder="Nama Lengkap"
                                                        // defaultValue="asdasdasd"
                                                    />
                                                </Form.Item>


                                                <Form.Item 
                                                    name="phone"
                                                   
                                                    label="Telepon">
                                                    <Input 
                                                        className="form-control"
                                                        // name="fullName"
                                                        placeholder="No.Telepon"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Provinsi"
                                                    name="addressProvinsi"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Provinsi"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Kota"
                                                    name="memberAddressCity"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Kabupaten"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Kecamatan"
                                                    
                                                    name="memberAddressDistrict"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Kecamatan"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Kelurahan"
                                                    name="memberAddressSubDistrict"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Kecamatan"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Kode Pos"
                                                    name="memberAddressPostalCode"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Kode Pos"
                                                    />
                                                </Form.Item>
                                                <Form.Item 
                                                    label="Alamat Lengkap"
                                                    
                                                    name="memberAddress"
                                                    >
                                                    <Input 
                                                            className="form-control"
                                                            // name="fullName"
                                                            placeholder="Alamat Lengkap"
                                                    />
                                                </Form.Item>
                                                <div className="form-group submit">
                                                    <button
                                                        type="submit"
                                                        className="ps-btn ps-btn--fullwidth">
                                                        Simpan
                                                    </button>
                                                </div>

                                        </Form>

                                                
                                        </div>
                                    
                                    </div>
                                    <h3 className="ps-checkout-cart">
                                        Keranjang Belanja
                                    </h3>
                                    <div className="table-responsive">

                                <Table
                                    rowSelection={{
                                        // ...onSelectAll
                                        // checked
                                    ...rowSelection
                                    }}
                                    columns={columns}
                                    dataSource={tableData}
                                />
                            </div>
    
                                </div>
                            </div>
    
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                <h3>Punya kode vocher ?</h3>
                                        <div className="form-group--nest">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Masukkan kode vocher"
                                            />
                                            <button className="ps-btn">Gunakan</button>
                                        </div>
                                        <p></p>
                                <div className="ps-form__orders">
                                    
                                    
                                    <div className="ps-block--checkout-order">
                                        <div className="ps-block__content">
                                            <figure>
                                                <figcaption>
                                                    <strong>RINGKASAN BELANJA</strong>
                                                    {/* <strong>total</strong> */}
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__items">
                                                <a>Total Belanja
                                                    <small>
                                                    Rp. {amount}
                                                    </small>
                                                </a>

                                                <a>
                                                    Voucher
                                                    <small>
                                                        Rp. 0
                                                    </small>
                                                </a>

                                                <a>
                                                    Kurir
                                                    <small>
                                                    <p>
                                                        {/* Duta Cargo Rp 10.000 */}
                                                        <Select defaultValue={provinceData[1]} style={{ width: 60 }} 
                                                        onChange={this.handleProvinceChange}
                                                        >
                                                            {provinceData.map(province => (
                                                            <Option key={province}>{province}</Option>
                                                            ))}
                                                        </Select>
                                                        {dataCheckTarif == undefined ? (
                                                            <Select style={{ width: 120 }} 
                                                        //  defaultValue={dataCheckTarif.data.Data.tariffs[0]}
                                                        >
                                                            {/* {dataCheckTarif.data.Data.tariffs.map(province =>
                                                                <Option key={province}>{province} </Option>
                                                                )} */}

                                                        </Select>     
                                                        ):(
                                                            <Select style={{ width: 180 }} 

                                                            placeholder="Pilih Trif Layanan"
                                                            >
                                                                {dataCheckTarif.tariffs.map(province =>
                                                                    <Option key={province}>{province.serviceID}&nbsp;Rp.{province.totalTariff} </Option>
                                                                    )}
    
                                                            </Select>     
                                                        )}
                                                    </p>

                                                    </small>
                                                </a>

                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Total Tagihan</strong>
                                                    <small>Rp. {amount+10000}</small>
                                                </figcaption>
                                            </figure>
                                            <div className="ps-block__footer">
                                                {/* <Link href="/account/paymentmetode"> */}
                                                <button type="submit" className="ps-btn text-white">
                                                    Lanjutkan
                                                </button>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            );
        }
    }
}
const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(FormCheckoutInformation);
