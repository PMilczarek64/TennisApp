import React from "react";
import shortid from "shortid";
import { Table, GridItem } from "./PriceListTable.styled";

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
      {weekdaysPrices.map((item) => (
        <React.Fragment key={shortid()}>
          <GridItem key={shortid()} className={`grid-item hours${item.id}`}>
            <p>{item.hours}</p>
          </GridItem>
          <GridItem key={shortid()} className={`grid-item price${item.id}`}>
            <p>{item.price}PLN</p>
          </GridItem>
          </React.Fragment>
      ))}
      <GridItem className="grid-item weekdays2">
        <h5>Saturday-Sunday</h5>
      </GridItem>
      {weekendPrices.map((item) => (
        <React.Fragment key={shortid()}>
          <GridItem key={shortid()} className={`grid-item hours${item.id}`}>
            <p>{item.hours}</p>
          </GridItem>
          <GridItem key={shortid()} className={`grid-item price${item.id}`}>
            <p key={shortid()}>{item.price}PLN</p>
          </GridItem>
        </React.Fragment>
      ))}
    </Table>
  );
};

export default PriceListTable;
