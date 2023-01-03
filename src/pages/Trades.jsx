/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Title } from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Trades } from "../models";
import AppLayout from "../components/layout/Applayout";
import { useState } from "react";

const Trade = () => {
  const [data, setdata] = useState([]);

  const fetch = async () => {
    const models = await DataStore.query(Trades);
    setdata(models);
    console.log(models, "hiiii");
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      {/* <Navigation /> */}
      <AppLayout pageName="Trade">
        <React.Fragment>
          <Title>Recent Trades</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>scriptName</TableCell>
                <TableCell>quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {moment(row.profit).format("d MMM yyyy")}
                  </TableCell>
                  <TableCell>{row.scriptName}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      </AppLayout>
    </div>
  );
};

export default Trade;
