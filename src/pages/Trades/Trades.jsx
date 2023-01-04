import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/Applayout";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Title from "../../components/Title";
import moment from "moment";
import { DataStore } from "@aws-amplify/datastore";
import { Trades } from "../../models";
// import { UserTrades } from "../../models";
import { Modal, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import useTrade from "../../hooks/trades";

import { DataGrid } from "@material-ui/data-grid";
import { number } from "prop-types";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
});
const Trade = (props) => {
  const [open, setOpen] = useState(false);
  const [todayTrades, updateTodayTrades] = useState([]);
  const navigate = useNavigate();
  const [showDayTrade, updateDayTrade] = useState(false);
  const [trades, updateTrades] = useState([]);
  // const userTrades = useTrade();
  const [trade, settrade] = useState([]);
  const tradeDate = props.location?.state?.date;

  useEffect(() => {
    // if (userTrades.length === 0) return;
    if (tradeDate) {
      updateDayTrade(true);
      updateTodayTrades();
      // userTrades.filter((f) => {
      //   return f.createdDate === tradeDate;
      // })
    }
    // updateTrades([...userTrades.filter((f) => !f.tradeDate)]);
  }, [tradeDate]);
  const fetch = async () => {
    const models = await DataStore.query(Trades);
    settrade(models);
    console.log(models, "hiiii");
  };

  useEffect(() => {
    fetch();
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const updateField = (value) => {
    updateDayTrade(true);
    updateTodayTrades(trades.filter((f) => f.createdDate === value));
  };
  const classes = useStyles();
  const getRows = () => {
    if (showDayTrade) {
      if (todayTrades.length > 0) {
        return (
          todayTrades.length > 0 &&
          todayTrades.map((row, index) => {
            return {
              id: index + 1,
              key: row.id,
              date: moment(row.createdDate).format("DD MMM, yyyy"),
              scrip: row.Scrips?.name,
              action: row.action,
              quantity: row.quantity,
              buyPrice: row.price,
              target: row.target,
              totalAmount: row.totalAmount,
              expectedProft: row.expectedProft,
            };
          })
        );
      } else {
        return [];
      }
    }
    return trade.map((row, index) => {
      return {
        id: index + 1,
        key: row.id,
        date: moment(row.createdDate).format("DD MMM, yyyy"),
        scrip: row.scriptName,
        action: row.action,
        quantity: row.quantity,
        buyPrice: row.price,
        totalAmount: row.amount,
      };
    });
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      type: "id",
      width: 100,
    },

    {
      field: "date",
      headerName: "Date",
      type: "date",
      width: 130,
      editable: true,
    },
    {
      field: "scrip",
      headerName: "Scrip",
      width: 130,
      editable: true,
    },

    {
      field: "quantity",
      headerName: "Quantity",
      type: number,
      width: 130,
      editable: true,
    },
    {
      field: "buyPrice",
      headerName: "Buy price",
      type: number,
      width: 130,
      editable: true,
    },

    {
      field: "totalAmount",
      headerName: "Total Amount",
      type: number,
      width: 150,
      editable: true,
    },
  ];

  const showTodayTrades = (loadedTrades) => {
    updateDayTrade(true);
    if (loadedTrades) {
      updateTodayTrades(
        loadedTrades.filter(
          (f) =>
            moment(f.createdDate).format("DD MMM, yyyy") ===
            moment().format("DD MMM, yyyy")
        )
      );
      return;
    }
    updateTodayTrades(
      trades.filter(
        (f) =>
          moment(f.createdDate).format("DD MMM, yyyy") ===
          moment().format("DD MMM, yyyy")
      )
    );
  };

  const editTrade = (row) => {
    navigate({
      pathname: `/trade/edit/${row.id}`,
      state: {
        item: row,
        quantity: row.quantity,
        price: row.price,
      },
    });
  };

  const renderTradeModal = () => (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    </Modal>
  );

  return (
    <AppLayout pageName="Trades">
      <Container className={classes.container}>
        {renderTradeModal()}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={12}>
            <Paper>
              {/* <Title>Recent Trades</Title> */}
              <Button
                style={{
                  marginRight: 20,
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                onClick={() => navigate("/trade/add")}
                variant="contained"
                color="primary"
              >
                Add Trade
              </Button>
              {/* <TextField
                label="Created Date"
                type="date"
                name="createdDate"
                defaultValue={tradeDate}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => updateField(e.target.value)}
              /> */}

              <div style={{ height: 700, width: "100%" }}>
                <DataGrid
                  rows={getRows()}
                  columns={columns}
                  pageSize={12}
                  disableSelectionOnClick
                  onRowClick={({ row }) => navigate(`/trades/${row?.key}`)}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid>
          <Paper>
            {/* <Title>Stats</Title> */}
            <div>
              <h3>Total Buy Amount</h3>
              <span>{trade.reduce((a, b) => a + b.amount, 0)}</span>
            </div>
          </Paper>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default Trade;
