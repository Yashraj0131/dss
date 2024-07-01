import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function FetchNews() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6781d93bcd474bb6bdf45c2e204d80e3")
      .then((response) => {
        setNews(response.data.articles)
      })
  }



  return (

    <div>
      <section style={{backgroundColor:"#c5aa6a"}}className="text-center m-2 mt-2 p-2 d-flex aligns-items-center justify-content-md-center ">

        <h4 style={{color:"#741b47"}}className="p-2 mt-5">WELCOME TO NEWS PAGE</h4>

      </section>
      <div class="container">
        <div class="col-md-12 text-center">
          <button className='btn btn-warning m-2 mt-5 p-2' onClick={fetchNews}>FetchNews</button>
        </div>
      </div>


      <div className='container mt-4'>
        <div className='row'>
          {
            news.map((value) => {
              return (

                <div className='col-sm-4 text-center justify-content'>
                  <div className="card mb-2">
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-warning text-center justify-content">Read full news</a>
                    </div>
                  </div>


                </div>
              );
            })
          }


        </div>

      </div>
    </div>
  )
}

export default FetchNews