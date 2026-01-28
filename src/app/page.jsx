"use client"

import BarangCard from "@/components/barang"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import axios from "axios"
import { ShoppingCart } from "lucide-react"
import React from "react"

const PageHome =()=>{
    const [data,setData] = React.useState([])
    const DaftarHero =[
        'https://www.wrapstation.id/wp-content/uploads/2025/01/modifikasi-mobil-bmw-1080x675.jpg',
        "https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/2025/asia-harley-days-clist.jpg?impolicy=myresize&rw=1100"
    ]
    const ListHero =[
        {
            url:"https://www.harga-hondamakassar.com/wp-content/uploads/2022/10/Banner-Mobil-Baru-Honda-768x346.jphttps://www.wrapstation.id/wp-content/uploads/2025/01/modifikasi-mobil-bmw-1080x675.jpg ",
            text:"beli mobil",
            cta:'',
            link:''
        },
         {
            url:"https://www.harley-davidson.com/content/dam/h-d/images/content-images/calendar-listing/2025/asia-harley-days-clist.jpg?impolicy=myresize&rw=1100",
            text:"beli motor",
            cta:'',
            link:''
        }
    ]

    const [Keranjang,setKeranjang] = React.useState([])
    const [diskon,setDiskon] =React.useState(30)
    const [potonganHarga,setPotonganHarga] =React.useState([])
    const [totalHarga,setTotalHarga] =React.useState([])
    const [cekoutPrice,setCekoutPrice] =React.useState([])
    // state program diskon
        React.useEffect(()=>{
            setTotalHarga(Keranjang.reduce((acc,data)=>(acc+=data.price),0))
            setPotonganHarga(totalHarga*diskon/100)
            setCekoutPrice(totalHarga-potonganHarga)
        },
    [diskon,potonganHarga,totalHarga,Keranjang])

    const [program,setProgram] = React.useState({
        'diskon' : diskon,
        'potongHarga' :0,
        'totalHarga':0,
        'cekoutPrice':0
    })
    // efek yang akan terjadi jika keranjang berubah
    // use effect untuk program
 
    React.useEffect(()=>{
    
        const fetchingData = async (path)=>{
            const response = await axios.get(`https://fakestoreapi.com/${path}`)
            console.log(response.data)
            setData(response.data)
        } 
        fetchingData('products')
    },[] )  

    const handleKeranjang =(item)=>{
        setKeranjang([...Keranjang,item])    
    }
    
    return(
        <div>
           <section className="fixed bottom-10 right-10">
            <Sheet>
                <SheetTrigger asChild>
                 <Button>
                      <ShoppingCart/>
                   </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className={"gap-2 flex text-2xl"}>
                            <ShoppingCart className="w-8 h-8"/>
                            Keranjang
                        </SheetTitle>
                    </SheetHeader>
                    <div>
                    <ScrollArea className='h-[75vh] w-full'>
                        
                      {Keranjang?.map((item ,i)=>{
                          return(
                              <div key={i} className="flex justify-between px-4 py-1">   
                            <div className="font-bold text xl text-black/80">
                                {item?.title}
                            </div>
                            <span className="font-bold text-xl text-black"> 
                                {item?.price}
                            </span>           
                        </div>
                    )
                    
                })}
                </ScrollArea>
                    </div>
         
                <SheetFooter>
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold text-black/90">totalHarga</span>
                        <span className="text-xl font-semibold text-black/60">{totalHarga}$</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-xl font-semibold text-black/90">Diskon</span>
                        <span className="text-xl font-semibold text-black/60">{diskon}$</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold text-black/90">${potonganHarga}</span>
                        <span className="text-xl font-semibold text-black/60">${cekoutPrice}</span>
                    </div>
                </SheetFooter>
                </SheetContent>
                     </Sheet>
                            <Badge className={'bg-amber-600 absolute -top-2 -right-4'}>{Keranjang?.length}               
                            </Badge>
                        </section> 
                        <section id="div-header">
                            <Header/>
                        </section>
                        <section id="div-hero">
            <Carousel>
                 <CarouselContent>
                    {DaftarHero.map((item)=>{
                        return(
                            <CarouselItem>
                                <img src={item} alt="" className="w-full  object-cover" />
                            </CarouselItem>

                   )
                        
                    })}
                </CarouselContent>
            </Carousel>
            </section>
            <section id="div-content" className="container mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">          
            {
                data?.map((item,i)=>{
                    return(
                        <div key={i} >
                       <BarangCard  barang={item}onClick={()=>handleKeranjang(item)} />
                
                        </div>
                    )
                })
            }
            </section>
         <div id="div-header">
            
         </div>
               
           <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
           </div>



       
      
        </div>
         
  
        
    )
}

export default PageHome