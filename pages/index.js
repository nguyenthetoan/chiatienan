import React, { useState, useCallback, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import green from '@material-ui/core/colors/green';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MoneyInput from 'components/MoneyInput';
import Typography from '@material-ui/core/Typography';
import Footer from 'components/Footer';
import Box from '@material-ui/core/Box';
import { uniqueId } from 'lodash-es';
import MoneyResult from 'components/MoneyResult';
import Icon from '@material-ui/core/Icon';
import ReactGA from 'react-ga';
import { NextSeo } from 'next-seo';
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
  },
  button: {
    margin: theme.spacing(1),
  },
  itemActions: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      flexGrow: 1
    }
  },
  iconButton: {
    cursor: 'pointer'
  }
}));

const Home = () => {

  useEffect(() => {
    ReactGA.initialize('UA-158843009-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const classes = useStyles();
  const [total, setTotal] = useState('');
  const [menuItems, setMenuItems] = useState([
    { id: uniqueId(), amount: 0, result: 0 },
    { id: uniqueId(), amount: 0, result: 0 },
    { id: uniqueId(), amount: 0, result: 0 },
  ]);

  const resultItems = usePromoCalculator(total, menuItems);

  const onChangeTotal = useCallback(v => setTotal(Number(v)), []);
  const onChangeItem = useCallback((v, itemId) => {
    const m = menuItems.map(i => i.id === itemId ? ({ ...i, amount: Number(v) }) : i);
    setMenuItems(m);
  }, [menuItems]);
  const onAddItem = useCallback(() => {
    setMenuItems([...menuItems, { id: uniqueId(), amount: 0, result: 0 }]);
  }, [menuItems]);

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" className={classes.center}>
          chia tiền ăn
          {' '}
          <Typography variant="caption" color="secondary">.</Typography>
          {' '}
          cơm
        </Typography>
        <Box my={2} component="h2" className={classes.center}>
          Nhập tổng hoá đơn
          - Thêm món ăn/uống
          - Xong
        </Box>
        <Paper elevation={3} className={classes.paper}>
          <Box mb={3}>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12} xl={12}>
                <Typography>Tổng Bill (đã trừ khuyến mãi)</Typography>
              </Grid>
              <Grid item md={6} xs={12} xl={12}>
                <MoneyInput
                  elementId="total-bill-amount"
                  onChange={onChangeTotal}
                  fullWidth
                  inputLabel="Tổng bill"
                />
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12} xl={12}>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12} xl={12} className={classes.itemActions}>
                  <Typography>Giá Gốc Từng Món</Typography>
                  <Icon
                    className={classes.iconButton}
                    onClick={onAddItem}
                    color="action"
                    style={{ color: green[500] }}
                  >
                    playlist_add
                  </Icon>
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
                  <Typography>Giá Sau Khuyến Mãi</Typography>
                </Grid>
                {resultItems.map((r, idx) => (
                  <Grid item md={12} xs={12} xl={12} key={r.id}>
                    <MoneyResult
                      value={formatVnd(r.result)}
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
