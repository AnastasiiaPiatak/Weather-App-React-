import React from "react";
import "./Weather.css";

export default function DateInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; 
  let day = days[props.date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

 
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear().toString().substring(2);
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
  <span> {hours}:{minutes} - {day}, {date} {month} `{year}</span>);
}
