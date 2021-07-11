// import '../css/App.css';
// import 'antd/dist/antd.css';

// import { Form, Input, Button, message, Upload } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { SaveJsonData } from '../Redux/actions';
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom';


// const UploadFile = () => {
//     const dispatch = useDispatch();

//     return (
//         <div className="homeContainer">
//               <input
//                     type="file"
//                     className="file"
//                     id="inputGroupFile01"
//                     onChange={event => {
//                         const file = event.target.files[0];
//                         const reader = new FileReader();
//                         reader.onload = e => {
//                             const jsonFileContent = e.target.result;
//                             console.log(jsonFileContent);
//                             const JsonObj = JSON.parse(jsonFileContent);
//                             dispatch(SaveJsonData(JsonObj.Events.Event));
//                         };
//                         reader.readAsText(file);
//                     }}
//                 />
//             {/* <Upload beforeUpload={file => {
//                 const reader = new FileReader();

//                     reader.onload = e => {
//                         const jsonFileContent = e.target.result;
//                         console.log(jsonFileContent);
//                         const JsonObj = JSON.parse(jsonFileContent);
//                         dispatch(SaveJsonData(JsonObj.Events.Event));
//                     };
//                     reader.readAsText(file);

//                     // Prevent upload
//                     return false;
//                 }}
//                 listType="text">
//                 <Button icon={<UploadOutlined />}>Click to upload</Button>
//             </Upload> */}
//             <Button><Link to="/Table">{'>>'}</Link></Button>                                                                       
//       </div>
//     );
// }

// export default UploadFile;
