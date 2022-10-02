import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


function SearchbarAutocomplete() {
  const [open, setOpen] = useState<boolean>(false);
  const [reditresponse,setreditresponse]=useState<string[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      setreditresponse([]);
    }
  }, [open]);

  const handlechange=(e: React.ChangeEvent, value: string)=>{
    setLoading(true);
    axios.get(`https://www.reddit.com/search.json?q=${value}`)
        .then((result) => {
           const responsearr=result.data.data.children;
           const temparr:string[]=[];
           responsearr.map((item:any)=>(
            temparr.push(item.data.subreddit)
            ));
            setreditresponse(temparr);      
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          setLoading(false);
        })
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {setOpen(true);}}
      onClose={() => {setOpen(false);}}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(reditresponse) => reditresponse}
      options={reditresponse}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter Text"
          variant='outlined'
          onChange={(event)=>handlechange(event,event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default SearchbarAutocomplete;
