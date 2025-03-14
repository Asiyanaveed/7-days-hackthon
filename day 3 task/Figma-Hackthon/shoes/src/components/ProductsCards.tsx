
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { client } from "@/sanity/lib/client"


interface Product {
  productName: any
  name: string
  category: string
  price: number
  inventory: number
  colors: string[]
  status: string
  description: string
  image: string
 
}

export default async function ProductsCards() {

  const res : Product[] = await client.fetch(`*[_type == "product"]{
         productName,
         category,
         price,
         inventory,
         colors,
         status,
        description,
        'image': image.asset->url
} `) 
  
  if(!res || res.length === 0) {
    await importData()
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {res.map((item : Product, index : number) => {
        return (
          <Card className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]" key={index}>
            <Link href={`/products/ProductDetail?productName=${item.productName}&category=${item.category}&description=${item.description}
              &price=${item.price}&image=${item.image}&inventory=${item.inventory}&colors=${item.colors}&status=${item.status}`}>
            <div className="relative h-[348px] w-full bg-[#F5F5F5]">
              <Image
                src={item.image}
                alt="card Image"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            </Link>
            <div className="p-4 space-y-2">
              {true && (
                <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
                  Just In
                </span>
              )}
              <div className="space-y-1">
                <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                  {item.productName}
                </h3>
                <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                  {item.description}
                </p>
              </div>
              <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                {1} Colour
              </p>
              <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
                MRP : ₹ {(item.price).toLocaleString()}
              </p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}




function importData() {
  throw new Error("Function not implemented.")
}

