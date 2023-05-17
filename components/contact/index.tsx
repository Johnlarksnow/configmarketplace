import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Contact = () => {
   const collapseItems = [
      'Features',
      
   ];
   return (
      <>
      <script src="https://cdn.sellix.io/static/js/embed.js"></script>
    <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
         
         <Flex
            css={{py: '$20', gap: '1rem', px: '$6'}}
            justify={'center'}
            wrap={'wrap'}
            direction={'column'}
            align={'center'}
         >
            <Flex direction={'column'} align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  ConfigMarketplace
               </Text>
               <Text h2>Contact <a href='https://t.me/AngelWings777'>Angel</a> to purchase this product</Text>
            </Flex>

            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'wrap'}
               justify={'center'}
            >
              
               
               
               
               
               
            </Flex>
            
         </Flex>
         
         

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
      
   );
   
};
