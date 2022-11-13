import React from 'react';
import {Button} from "@mui/material";
import Link from 'next/link';
class IndexPage extends React.Component{
  render(): React.ReactNode {
    return(
    <>
      <h1>Go to grid_list</h1>
      <Link href="/grid_list/">
        <Button variant='contained'> Click to go</Button>
      </Link>
      
    </>
    )
  }
};

export default IndexPage;
