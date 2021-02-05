import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import  Router  from 'next/router';
import Link from 'next/link';
import { updateTransaksiHistory } from '../../../../store/auth/action';
import { cSharpDateCovert, statusTransaksi } from '../../../../utilities/product-helper';

class TableInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredInfo: null,
            sortedInfo: null,
          };
    }

    componentDidMount() {
        // console.log(this.props);
        const { isLoggedIn, AccessToken, RequestVerificationToken } = this.props;
        const reqHistory = {
            acc: AccessToken,
            req: RequestVerificationToken,
        };

        if (isLoggedIn == false) {
            Router.push('/account/login');
        }
// console.log(reqHistory);
        this.props.dispatch(updateTransaksiHistory(reqHistory));


    }

  handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

    render() {
        const {dataHistory} = this.props;
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};

        
        const tableData = [];
        if (dataHistory == null) {
            const tableData = [
                {
                    id: '1',
                    invoiceId: '500884010',
                    title: 'Marshall Kilburn Portable Wireless Speaker',
                    dateCreate: '20-1-2020',
                    amount: '42.99',
                    status: 'Successful delivery',
                }
            ];

        } else {
            if (dataHistory.Data == undefined) {
                const tableData = [
                    {
                        id: '1',
                        invoiceId: '500884010',
                        title: 'Marshall Kilburn Portable Wireless Speaker',
                        dateCreate: '20-1-2020',
                        amount: '42.99',
                        status: 'Successful delivery',
                    }
                ];
            } else {
                for (let i = 0; i < dataHistory.Data.OrderList.length; i++) {
                    tableData[i] = {
                        id: dataHistory.Data.OrderList[i].CommerceSalesOrderID,
                        invoiceId: dataHistory.Data.OrderList[i].CommerceSalesOrderNumber,
                        title:  statusTransaksi(dataHistory.Data.OrderList[i].CommerceSalesOrderStatus),
                        
                        dateCreate: cSharpDateCovert(dataHistory.Data.OrderList[i].CommerceSalesOrderDate),
                        
                        amount: dataHistory.Data.OrderList[i].CommerceSalesOrderTotal,
                        status: statusTransaksi(dataHistory.Data.OrderList[i].CommerceSalesOrderStatus),
                    };
                    
                }
            }

        }

        
        const tableColumn = [
            {
                title: 'ID PESANAN',
                dataIndex: 'invoiceId',
                rowKey: 'invoiceId',
                key: 'invoiceId',
                width: '120px',

                render: (text, record) => (
                    // <Link href="/account/[list]" as={`/shop/ProductBestSeller`}></Link>
                    <Link href="/account/[completePay]"  as={`/account/${record.invoiceId}`}>
                        {record.invoiceId}
                    </Link>
                ),
            },
            {
                title: 'STATUS',
                dataIndex: 'title',
                rowKey: 'title',
                key: 'title',
                filters: [
                    { text: 'Pesanan diproses', value: 'Processed' },
                    
                    { text: 'Waktu Pembayaran Habis', value: 'Waktu Pembayaran Habis' },
                    { text: 'Pesanan belum dibayar', value: 'Pesanan belum dibayar' },
                    { text: 'Pembayaran terverifikasi', value:'Pembayaran terverifikasi' },
                    { text: 'Pesanan dikirim', value: 'Pesanan dikirim' },
                    { text: 'Pesanan selesai', value: 'Pesanan selesai' },
                    { text: 'Pembayaran ditolak', value: 'Pembayaran ditolak' },
                    { text: 'Nomor Resi diperbarui', value: 'Nomor Resi diperbarui' },
                    { text: 'Dibatalkan', value:'Dibatalkan'},
                  ],
                  filteredValue: filteredInfo.title || null,
                  onFilter: (value, record) => record.title.includes(value)
            },
            {
                title: 'TANGGAL',
                rowKey: 'dateCreate',
                dataIndex: 'dateCreate',
                key: 'dateCreate',
                width: '150px',
                // sorter: (a, b) => a.dateCreate - b.dateCreate,
                // sortOrder: sortedInfo.columnKey === 'dateCreate' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'HARGA',
                rowKey: 'amount',
                dataIndex: 'amount',
                key: 'amount',
                render: (text, record) => (
                    <span className="text-right">Rp. {record.amount}</span>
                ),
            },
            {
                title: 'ACTION',
                key: 'status',
                dataIndex: 'status',
                rowKey: 'status',
                width: '150px',
                render: (text, record) => (
                    <Link href="/account/[completePay]"  as={`/account/${record.invoiceId}`}>
                        DETAIL
                    </Link>
                ),
            },
        ];

        return (
            <div>
                    <a style={{ marginBottom: 16 }}>
                        {/* <Button onClick={this.setAgeSort}>Sort age</Button> */}
                        {/* <Button onClick={this.clearFilters}>Clear filters</Button> */}
                        <Button onClick={this.clearAll}>Bersihkan Filter</Button>
                    </a>
                    <p></p>
                    <Table columns={tableColumn} dataSource={tableData} onChange={this.handleChange}></Table>
        </div>
            // <Table
            //     columns={tableColumn}
            //     dataSource={tableData}
            //     rowKey={record => record.id}
            // />
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
// export default TableInvoices;
export default connect(mapStateToProps)(TableInvoices);
