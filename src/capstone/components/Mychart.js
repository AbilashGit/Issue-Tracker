import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { setNestedObjectValues } from "formik";

export const Mychart = (title,count,n) => {
    let issuetitle=[]
    let issuecount=[]
    let color1=[]
    
    for(var i=0;i<n;i++)
    {
     issuetitle.push(title[i])
     issuecount.push(count[i])
     color1.push("#87CEEB")
    }
       const chart=({
          labels: issuetitle,
          datasets: [
            {
              label: "Number of Views",
              data: issuecount,
              backgroundColor:color1,
              borderWidth: 4
            }
          ]
        });

  return (
    <div className="App">
                <br></br><br></br>
      <h1>Top Viewed Issues</h1>
      <div>
      
    <Container>
      <Row>
        <Col sm={8}>
        <Bar
          data={chart}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
};
