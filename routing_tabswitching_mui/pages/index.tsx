import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';


//index or route component should always be a Class component to prevent hot reload errors
class indexpage extends React.Component{
  render(): React.ReactNode {
    return(
      <div>
        <h1>File System based Routing</h1>
        
        <Link href="/dashboard/">
        <Button variant='contained'> Go to Dashboard</Button>
        </Link>
      </div>
    )
  }
}

export default indexpage;