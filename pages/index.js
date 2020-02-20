import React, { useState, useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MoneyInput from 'components/MoneyInput';
import Typography from '@material-ui/core/Typography';
import Footer from 'components/Footer';
import Box from '@material-ui/core/Box';
import { uniqueId } from 'lodash-es';
import MoneyResult from 'components/MoneyResult';
import usePromoCalculator from '../src/usePromoCalculator';
import formatVnd from '../src/format';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(3)
  },
  center: {
    textAlign: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();
  const [total, setTotal] = useState('');
  const [menuItems, setMenuItems] = useState([
    { id: uniqueId(), amount: 0, result: 0 },
    { id: uniqueId(), amount: 0, result: 0 },
    { id: uniqueId(), amount: 0, result: 0 },
  ]);

  const onChangeTotal = useCallback(v => setTotal(Number(v)), []);
  const onChangeItem = useCallback((v, itemId) => {
    const m = menuItems.map(i => i.id === itemId ? ({ ...i, amount: Number(v) }) : i);
    setMenuItems(m);
  }, [menuItems]);

  const resultItems = usePromoCalculator(total, menuItems);

  console.log({ resultItems });

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" className={classes.center}>
          chia tiền ăn . cơm
        </Typography>
        <Box my={2} component="p" className={classes.center}>
          Nhập tổng bill
          - Thêm món ăn/uống
          - Bấm nút tính
        </Box>
        <Paper elevation={3} className={classes.paper}>
          <Box mb={3}>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12} xl={12}>
                <Typography>Tổng hoá đơn (đã trừ khuyến mãi):</Typography>
              </Grid>
              <Grid item md={12} xs={12} xl={12}>
                <MoneyInput elementId="total-bill-amount" onChange={onChangeTotal} fullWidth inputLabel="Tổng Bill" />
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12} xl={12}>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12} xl={12}>
                  <Typography>Giá Từng Món:</Typography>
                </Grid>
                {menuItems.map((item, idx) => (
                  <Grid item md={12} xs={12} xl={12} key={item.id}>
                    <MoneyInput
                      fullWidth
                      elementId={`item-amount-${idx}`}
                      inputLabel={`Món ${idx + 1}`}
                      onChange={v => onChangeItem(v, item.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item md={6} xs={12} xl={12}>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12} xl={12}>
                  <Typography>Giá sau khuyến mãi:</Typography>
                </Grid>
                {resultItems.map((result, idx) => (
                  <Grid item md={12} xs={12} xl={12} key={result.id}>
                    <MoneyResult
                      value={formatVnd(result.result)}
                      elementId={`item-result-amount-${idx}`}
                      inputLabel={`Món ${idx + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  )
}

export default Home
