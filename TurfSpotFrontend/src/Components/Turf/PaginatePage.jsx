
import React from 'react';
import { Pagination } from 'react-bootstrap';

function PaginatePage(){
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

 return(
  <div>
    <Pagination style={{marginLeft:500, marginTop:10}}>{items}</Pagination>
    </div>
);
 }
export default PaginatePage;