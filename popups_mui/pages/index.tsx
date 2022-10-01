import * as React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

class IndexPage extends React.Component{
  render(): React.ReactNode {
    return(
      <div>
        <h1>Hello Navigate to url/popups</h1>
      </div>
    )
  }
}

export default IndexPage;