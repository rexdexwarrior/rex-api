import { NextResponse } from 'next/server'
import axios from 'axios'

const query = `
query getDex{
        swaps(first: 5, orderBy: timestamp) 
        {
          id,
          from,
          amount0In,
          amount1In,
          to,
          amount0Out,,
          amount1Out,
          
          pair{
            token0 {
              id,
              decimals,
              symbol,
              tradeVolume
            },
            token1 {
              id,
              decimals,
              symbol
              tradeVolume
            }
          }
          
        }
}
`

export async function GET()
{
    let retVal = 'N/A';
    let ret = await axios.post('https://thegraph.one/subgraphs/name/rexdex/rexdex-subgraph', {query: query});
    console.log('ret',ret.data)
    return NextResponse.json(ret.data.data)
}