import React, { useState, useEffect,useMemo } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import FileDownload from 'js-file-download';
import swal from '@sweetalert/with-react';
//import Pagination from './Pagination';

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const auth = localStorage.getItem('new');
  const idproduct = JSON.parse(localStorage.getItem('new')).id;
  
  const params = useParams();

  useEffect(() => {
    getProducts();
  }, [])
  
  const getProducts = async () => {
    const result = await fetch('http://localhost:3001/userdashboard',{ //user table 
      method:'post',
      body:JSON.stringify({idproduct}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await result.json();
    setProducts(data);
  }

  
  const doDelete = async (uploadfile) => {
    swal({
      text: "Deleting File...",
      buttons: {
        cancel: "Close",
      },
      content: (
        <div>
          <svg class="circle-svg" height="200" width="200">
            <circle cx="100" cy="100" r="50"></circle>
          </svg>
        </div>
      )
    });
    // const newresult = await fetch(`https://dss-tau.vercel.app/userdashboard/${uploadfile}`, {
    //   method: "Delete"
    // });
    // const newdata = await newresult.json();
    // if (newdata) {
    //   getProducts();
    // }
  }

    


  const dodownload = async (uploadfile) => {
    swal({
      text: "View to your Pc ",
      buttons: {
        cancel: "Close",
      },
      content: (
        <div>
          <svg class="circle-svg" height="200" width="200">
            <circle cx="100" cy="100" r="50"></circle>
          </svg>
        </div>
      )
    });
    // const result = await axios.get(`https://dss-tau.vercel.app/download/${uploadfile}`, {
    //     method: "get",
    //     responseType: 'blob'
    //   })
    } 
  //   let PageSize = 10;

  // const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return products.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  
  
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <script src="sweetalert.min.js"></script>

      <section style={{backgroundColor:"#c5aa6a"}}className="text-center m-2 mt-2 p-2 d-flex aligns-items-center justify-content-md-center ">
        <h4 style={{color:"#741b47"}}className="p-2 mt-5">WELCOME TO USER DASHBOARD PAGE</h4>
      </section>

      <div className='product-list'>
        <ul >
          <li>S.No.</li>
          <li>Upload file</li>
          <li>Message</li>
          <li>Operation</li>
        </ul>
        {
          products.length > 0 ? products.map((items, index) =>
            <ul>
              <li>{index + 1}</li>
              <li>{items.uploadfile}</li>
              <li>{items.message}</li>
              <li className='m-1 p-0'>
                <button onClick={dodownload} className='m-1 p-0'>View</button>
                <button onClick={doDelete} className='m-1 p-0'>Delete</button>
              </li>
            </ul>
            
          )
            : <h1>No Result Found</h1>
            
        }
        {/* <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={products.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          /> */}
       

      </div>
    </div >
  )
}


export default UserDashboard;

 {/* <li><a href="#/"onClick={() =>
    downloadFile(_id, file_path, file_mimetype)
      }Download</a></li> */}
