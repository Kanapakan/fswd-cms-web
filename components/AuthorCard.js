import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function ArthorCard({posts, users}) {
console.log(users)
  return (
      
    <Card sx={{ display: 'flex', p:"20px", pr:'10px', pl:'10px', minWidth:'30rem'}}>
         <CardMedia
        component="img"
        sx={{ width: 150, borderRadius: '100%' }}
        image={users.avatar_urls[96]}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', pl:"10px"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
           <h2>{users.name}</h2>
           <h4>{users.link}</h4>
            
        </CardContent>

      </Box>
     
    </Card>
  );
}