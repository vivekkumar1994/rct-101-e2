import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'

const Pagination = ({limit,setLimit,page,setPage,tcount}) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <ButtonGroup size='sm' isAttached variant='outline'>
      <Button data-cy="pagination-first-button" colorScheme='gray'onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" colorScheme='gray'>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" colorScheme='gray' onClick={()=>setPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button" colorScheme='gray' onClick={()=>setPage(tcount)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;