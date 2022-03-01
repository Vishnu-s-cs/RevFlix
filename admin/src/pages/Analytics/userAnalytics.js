import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { login } from "../../context/authContext/apiCalls";
import React, { Component }  from 'react';
export default function UserStats(){
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );
      
      const [userStats, setUserStats] = useState([]);
    
      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await axios.get("/users/stats", {
              headers: {
                token:
                  `Bearer ${login.accessToken}`,
              },
            });
            const statsList = res.data.sort(function (a, b) {
              return a._id - b._id;
            });
            statsList.map((item) =>
              setUserStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "New User": item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [MONTHS]);
    
      return (
        <div className="home">
          <FeaturedInfo />
          <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
          {/* <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div> */}
        </div>
      );
    }
