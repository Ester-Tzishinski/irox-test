// {/* <BootstrapTable keyField='id' data = {items} columns = {columns} /> */}
// import '../css/App.css';
// import { Table, Space } from 'antd';
// import { useDispatch, useSelector } from "react-redux";
// import EMail from '../components/EMail';
// import Phone from '../components/Phone';
// // import BootstrapTable from 'react-bootstrap/Table'
// import BootstrapTable from 'react-bootstrap-table-next';

// import { useState } from 'react';


// function JsonTable() {

//     const [selectedRow, setSelectedRow] = useState(null);
//     const jsonData = useSelector(state => state.reducer1.dataJson);
//     const titleskeys = jsonData.map(obj => Object.keys(obj));
//     const titles = new Set(titleskeys.flat());
//     const compArray = {
//         'E-Mail': EMail,
//         'Phone': Phone,
//         'SMS': ''
//     };
//     let InfoComponent = selectedRow ? compArray[selectedRow.EventType.replace(/ /g, '')] : '';

//     const columns = [];
//     titles.forEach(title => {
//         title !== '-ID' &&
       
//             columns.push({
//                 dataField: title.replace(/-/i, ''),
//                 text:title.replace(/ /g, ''),
//                 // title: title.replace(/-/i, ''),
//                 // key: title.replace(/ /g, ''),
//                 // dataIndex: title,
//                 render: (title === 'EventChecked') && (record => (
//                     // <Space size="middle">
//                         <input type="checkbox" checked={record === "True"} disabled />
//                     // </Space>
//                 ))
//             })
//     });
//     console.log(selectedRow);
//     console.log("col",columns);
//     console.log("data",jsonData);
//     const record={ onClick(e, row, rowIndex){
//                     setSelectedRow(row);
//                 }};
//     return (
//         <div className="tableContainer">
//             <BootstrapTable keyField='-ID' className="table" columns={columns} data={jsonData}
//             rowEvents={record}
//             />
//             {/* <Table rowKey="-ID" className="table" columns={columns} dataSource={jsonData} pagination={{ pageSize: 5 }} 
//                     onRow={(record) => ({
//                         onClick: () => {
//                             setSelectedRow(record);
//                         },
//                       })}
//             />    */}
//             <h1>Summery:</h1>
//             <div>count: {jsonData.length}</div>
//             {InfoComponent && <InfoComponent row={selectedRow} />}
//         </div>
//     );
// }

// export default JsonTable;
