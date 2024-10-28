import React from "react";
import style from "./Table.module.scss";
import CommonGridBox from "../WrapperComponents/CommonGridBox/CommonGridBox";
function Table() {
  return (
    <table className={style.table}>
      <tr>
        <th>Title </th>
        <th>Genre</th>
        <th>Release Year</th>
      </tr>
      <tbody>
        <tr>
          <td>The Legend of Maula Jatt</td>
          <td>Action</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Moh</td>
          <td>Romance</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>While We Watched</td>
          <td>Documentary</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Love Today</td>
          <td>Comedy</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Kantara (ಕಾಂತಾರ)</td>
          <td>Action</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Varayan</td>
          <td>Action</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>The Kashmir Files</td>
          <td>Drama</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>K.G.F: Chapter 2</td>
          <td>Action</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>777 Charlie</td>
          <td>Comedy</td>
          <td>2024</td>
        </tr>
        <tr>
          <td>Rocketry: The Nambi Effect</td>
          <td>Action</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Kolkata Chalantika</td>
          <td>Historical</td>
          <td>2022</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
