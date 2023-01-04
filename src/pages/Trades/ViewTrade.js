import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Table,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { DataStore } from "aws-amplify";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../../components/layout/Applayout";

import { Trades } from "../../models";

const ViewTrade = () => {
  const [trade, setTrade] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
  //   console.log(id);
  //   const fetch = async () => {
  //     const models = await DataStore.query(Trades);
  //     setTrade(trade);
  //     console.log(models, "fff");
  //   };

  //   useEffect(() => {
  //     fetch();
  //   }, []);
  useEffect(() => {
    async function getTradeDetails(id) {
      const models = await DataStore.query(Trades, id);
      //   console.log(models);
      setTrade(models);
    }
    if (id) {
      getTradeDetails(id);
    }
    // getTradeDetails();
  }, []);

  const editTrade = () => {
    navigate(`/trade/edit/${trade.id}`, {
      state: {
        item: trade,
        quantity: trade.quantity,
        price: trade.price,
        profit: trade.profit,
      },
    });
  };

  const deleteTrade = async () => {
    const modelToDelete = await DataStore.query(Trades, trade.id);
    DataStore.delete(modelToDelete);
    navigate("/trade");
  };
  function navigateToTrade() {
    // navigate("/trade");

    navigate({
      pathname: "/trade",
      //   state: {
      //     date: trade.createdDate,
      //   },
    });
  }
  //   navigate(`/trades/${row?.key}`)
  return (
    <AppLayout>
      <Container>
        <Card>
          <CardHeader title="View Trade" />
          <CardContent>
            <Table type="striped">
              <TableRow>
                <TableCell>Created Date:</TableCell>
                <TableCell>{trade.createdDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock Name: </TableCell>
                <TableCell>{trade.scriptName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity: </TableCell>
                <TableCell>{trade.quantity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price: </TableCell>
                <TableCell>{trade.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Trade Date: </TableCell>
                <TableCell>
                  {moment(trade.profit).format("d MMM yyyy")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sell Price: </TableCell>
                <TableCell>{trade.target}</TableCell>
              </TableRow>
            </Table>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={editTrade}>
              Edit
            </Button>
            {/* <Button size="small" onClick={completeTrade}>
              Complete
            </Button> */}
            <Button size="small" onClick={deleteTrade}>
              Delete
            </Button>
            <Button size="small" onClick={navigateToTrade}>
              OK
            </Button>
          </CardActions>
        </Card>
      </Container>
    </AppLayout>
  );
};

export default ViewTrade;
