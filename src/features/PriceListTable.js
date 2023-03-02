import React from "react";
import styled from "styled-components";
import shortid from "shortid";

const Table = styled.div`
  margin: 30px;
  min-height: 300px;
  display: grid;
  grid-gap: 1px;
  grid-row-gap: 1px;
  background: linear-gradient(140deg, white 0%, #4169e1 40%);
  grid-template-areas:
    'header header header header header header header header'
    'weekdays1 weekdays1 weekdays1 hours1 hours1 hours1 price1 price1'
    'weekdays1 weekdays1 weekdays1 hours2 hours2 hours2 price2 price2'
    'weekdays2 weekdays2 weekdays2 hours3 hours3 hours3 price3 price3';
    box-shadow: 8px 8px 24px -14px rgba(66, 68, 90, 1);
    border-color: ${({ theme }) => theme.colors.darkGrey};
    p{
      color: black;
    }
    @media screen and (max-width: 505px){
      display: none;
    }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.9;
  &.header {
    grid-area: header;
    color: ${({ theme }) => theme.colors.lightBlue};
  }
  &.weekdays1 {
  grid-area: weekdays1;
  }
  &.weekdays2 {
  grid-area: weekdays2;
  }
  &.hours1 {
    grid-area: hours1;
  }
  &.hours2 {
    grid-area: hours2;
  }
  &.hours3 {
    grid-area: hours3;
  }
  &.price1 {
    grid-area: price1;
  }
  &.price2 {
    grid-area: price2;
  }
  &.price3 {
    grid-area: price3;
  }
`;

const PriceListTable = (priceList) => {
  const courtPriceList = priceList.priceList;
  const weekdaysPrices = courtPriceList.weekdays;
  const weekendPrices = courtPriceList.weekend;
  return (
    <Table>
      <GridItem className="header">
        <h4>{courtPriceList.header}</h4>
        <p>{courtPriceList.headerDescription}</p>
      </GridItem>
      <GridItem className="grid-item weekdays1">
        <h5>Weekdays</h5>
      </GridItem>
      {weekdaysPrices.map(item =>
        <>
          <GridItem key={shortid()} className={`grid-item hours${item.id}`}>
            <p>{item.hours}</p>
          </GridItem>
          <GridItem key={shortid()} className={`grid-item price${item.id}`}>
            <p>{item.price} PLN</p>
          </GridItem>
        </>
      )}
      <GridItem className="grid-item weekdays2">
        <h5>Saturday-Sunday</h5>
      </GridItem>
      {weekendPrices.map(item =>
        <>
          <GridItem key={shortid()} className={`grid-item hours${item.id}`}>
            <p>{item.hours}</p>
          </GridItem>
          <GridItem key={shortid()} className={`grid-item price${item.id}`}>
            <p key={shortid()}>{item.price} PLN</p>
          </GridItem>
        </>
      )}
    </Table>
  );
};

export default PriceListTable;