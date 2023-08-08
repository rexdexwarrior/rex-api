import { NextResponse } from 'next/server'
import axios from 'axios'

const query = `
query getDex{
  pairs
  {
    id,
    token0
    {
      id,
      name,
      symbol
    },
    token1
    {
      id,
      name,
      symbol
    }
    token0Price,
    token1Price
  }
}
`

export async function GET()
{
   // let retVal = 'N/A';
    let ret = await axios.post('https://thegraph.one/subgraphs/name/rexdex/rexdex-subgraph', {query: query});
    //console.log('ret',ret.data)
    return NextResponse.json(ret.data.data)
}