import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import Badge from '../components/badge/Badge'
import TopNav from'../components/topnav/TopNav'
const customerTableHead = [
    'STT',
    'Booking code',
    'Số vé',
    'Tình trạng sự dụng ',
    'Ngày sự dụng',
    'Ngày xuất vé',
    'Cổng check-in'
    
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                Danh sách vé                              
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='12'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Customers
