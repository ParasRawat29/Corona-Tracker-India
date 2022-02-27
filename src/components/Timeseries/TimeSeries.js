import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getApi, TransformToDatesArrayFromObject } from "../../helper";
import "./timeSeries.css";
import Loading from "../Loading/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LABELS = [
  {
    title: "confirmed",
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  {
    title: "recovered",
    borderColor: "rgb(107, 182, 58)",
    backgroundColor: "rgba(107, 182, 58, 0.5)",
  },
  {
    title: "deceased",
    borderColor: "#a6a8ab",
    backgroundColor: "#a6a8ab",
  },
  {
    title: "vaccinated1",
    borderColor: "rgb(130, 57, 170)",
    backgroundColor: "rgba(130, 57, 170, 0.5)",
  },
  {
    title: "vaccinated2",
    borderColor: "rgb(218, 77, 179)",
    backgroundColor: "rgba(218, 77, 179,0.5)",
  },
];

function TimeSeries({ seletedState }) {
  const [apiData, setApiData] = useState([]);
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const [startDate, setStartDate] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        ticks: {
          color: "#b0b6bd",
        },
      },
      y: {
        ticks: {
          color: "#b0b6bd",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 40,
          boxHeight: 15,
          color: "#b0b6bd",
          font: { size: 15 },
        },
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  const labels =
    timeSeriesData.length > 0 ? timeSeriesData.map((item) => item.date) : [];
  const data = {
    labels,
    datasets: LABELS.map((lab) => {
      return {
        label: lab.title,
        data:
          timeSeriesData.length > 0
            ? timeSeriesData.map((date) => {
                return date.total[lab.title] ? date.total[lab.title] : 0;
              })
            : [],
        borderColor: lab.borderColor,
        backgroundColor: lab.backgroundColor,
      };
    }),
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  useEffect(() => {
    if (startDate) {
      const newData = apiData.filter((item) => {
        return new Date(item.date) >= new Date(startDate);
      });
      setTimeSeriesData(newData);
    } else {
      setTimeSeriesData(apiData);
    }
  }, [startDate]);

  useEffect(() => {
    setisLoading(true);
    getApi("https://data.covid19india.org/v4/min/timeseries.min.json").then(
      (data) => {
        setTimeSeriesData(
          TransformToDatesArrayFromObject(data[seletedState.stateCode].dates)
        );
        setApiData(
          TransformToDatesArrayFromObject(data[seletedState.stateCode].dates)
        );
        setisLoading(false);
      }
    );

    return () => {
      setApiData([]);
    };
  }, [seletedState]);

  useEffect(() => {
    setStartDate(apiData.length > 0 ? apiData[0].date : undefined);
  }, [apiData]);

  return isLoading ? (
    <Loading message="Creating Chart ..." />
  ) : (
    <div className="timeSeriesWrapper">
      <div className="filterDate">
        <label htmlFor="startDate">Start Date : </label>
        <input
          type="date"
          name=""
          id="startDate"
          value={new Date(startDate).toLocaleDateString("en-ca")}
          max={
            apiData.length > 0 ? apiData[apiData.length - 1].date : undefined
          }
          min={apiData.length > 0 ? apiData[0].date : undefined}
          onChange={handleDateChange}
        />
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default TimeSeries;
