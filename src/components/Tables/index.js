import React from "react";
import { Table } from "reactstrap";

const Tables = ({ list }) => {
  return (
    <div>
      <Table borderless hover responsive>
        <thead>
          <tr style={{ backgroundColor: "#086868" }}>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAD</td>
            <td>{Number(list.CAD) + Number((list.CAD * 5) / 100)}</td>
            <td>{list.CAD}</td>
            <td>{Number(list.CAD) - Number((list.CAD * 5) / 100)}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{Number(list.IDR) + Number((list.IDR * 5) / 100)}</td>
            <td>{list.IDR}</td>
            <td>{Number(list.IDR) - Number((list.IDR * 5) / 100)}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{Number(list.JPY) + Number((list.JPY * 5) / 100)}</td>
            <td>{list.JPY}</td>
            <td>{Number(list.JPY) - Number((list.JPY * 5) / 100)}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{Number(list.CHF) + Number((list.CHF * 5) / 100)}</td>
            <td>{list.CHF}</td>
            <td>{Number(list.CHF) - Number((list.CHF * 5) / 100)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{Number(list.EUR) + Number((list.EUR * 5) / 100)}</td>
            <td>{list.EUR}</td>
            <td>{Number(list.EUR) - Number((list.EUR * 5) / 100)}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{Number(list.GBP) + Number((list.GBP * 5) / 100)}</td>
            <td>{list.GBP}</td>
            <td>{Number(list.GBP) - Number((list.GBP * 5) / 100)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
