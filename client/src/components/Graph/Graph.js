import React from "react";
import "./stlyes.css";
import { getPosts } from "../../actions/posts";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const Home = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  var arrayDate = [];
  var arrayMoneyOwe = [];
  var arrayMoneyTotal = [];
  var arrayMoneyKeep = [];
  var date = '';
  var owe,total = 0;

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);



    const posts = useSelector((state) => state.posts);
    console.log(posts);

    posts.map((post) => (

      date = new Date(post.createdAt),
      owe = post.checkOutTotal,
      total = (parseInt(post.bill1) + parseInt(post.bill5) * 5 
        + parseInt(post.bill10) * 10 + parseInt(post.bill20) * 20 
        + parseInt(post.bill50) * 50 + parseInt(post.bill100) * 100),

        arrayDate.push((date.getMonth() + 1 )  + '/' + date.getDate()),
        arrayMoneyTotal.push(total),
        arrayMoneyOwe.push(owe),
        arrayMoneyKeep.push(total - owe)
      
      
      ));

    const data = {
        labels: arrayDate,
        datasets: [
          {
            label: 'End of day total',
            data: arrayMoneyTotal,
            fill: true,
            backgroundColor: "rgba(33,150,243,0.2)",
            borderColor: "rgba(33,150,243,1)"
          },
          {
            label: 'Money Kept',
            data: arrayMoneyKeep,
            fill: false,
            borderColor: "#0ab101"
          },
          {
            label: "Owed to Store",
            data: arrayMoneyOwe,
            fill: true,
            borderColor: "rgba(244,67,54,1)",
            backgroundColor: "rgba(244,67,54,0.2)"

          }
        ]
      };

      return (
        <div className="App">
          <Line data={data} />
        </div>
      );    
}

export default Home