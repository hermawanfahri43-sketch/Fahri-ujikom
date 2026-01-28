import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

const BarangCard = (props) => {

  return (
   <Card className={'h-full'}>
       <CardHeader>

         <img />

            <img className="w-full rounded-xl bg-black min-h-80  max-h-80 object-contain" src={props.barang.image} alt={`gambar$({props.barang.image})`}/>
    
        </CardHeader>

        <CardContent>
          <h1 className='text-3-xl font-bold'>
              {props.barang?.title}
          </h1>

          <p className='text-black/100'>
              {props.barang.description}
          </p>

        </CardContent>

        <CardFooter className='flex justify-between'>
          <span className='bg-slate-600 px-2 py-1 w-fit shadow-mb rounded-sm 
          ' >
                {props.barang.category}
          </span>

              
          <span className='flex-gap justify-between mb-4 bg-slate-600 text text-white py-3 w-fit text-2xl'>
                {props.barang.price}
          </span>

        </CardFooter>


                          <Button variant={'ghost'} onClick={props.onClick} className="bg-slate-500">
                            BUY
                          </Button>
            

          {/* <pre>
            <code>
                {JSON.stringify(props.barang,0,2)}
            </code>

          </pre> */}

    </Card>
  )
}

export default BarangCard

// diplay
//1.blok
//2.inline
//3inline-blok
//4.flexbo => flex
//5.