import React, { useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material';

import { useOutletContext, useHref } from 'react-router'
import './MusicPortfolio.scss'
type PropTypes = {
  musicProp: string,
  devProp: string,
}
function MusicPortfolio() {
const [page, setPage] = useState(1);
const totalPages = 10; // This would typically come from your API or data source

const handleChange = (event, value) => {
setPage(value);
};

return (
<Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<Typography variant="body1" sx={{ mb: 2 }}>
Page {page} of {totalPages}
</Typography>
<Pagination 
        count={totalPages} 
        page={page} 
        onChange={handleChange} 
        color="primary" 
      />
</Box>
);
}

export default MusicPortfolio
