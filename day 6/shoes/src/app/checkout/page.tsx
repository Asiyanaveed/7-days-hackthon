"use client"
import * as React from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import { useEffect, useState } from "react"

interface ICart {
  name: string,
  price: number,
  image: string,
  quantity: number
}

export default function CheckoutForm() {
  
   const [cartItems, setCartItems] = useState<ICart[]>([])
   const [shipCost, setShipCost] = useState(0)


  useEffect(() => {
    const data = localStorage.getItem("cart")
    const cart = data ? JSON.parse(data) : []
    setCartItems(cart)

    const ShipmentData = localStorage.getItem("ShipmentData")
    const shipData = ShipmentData ? JSON.parse(ShipmentData) : []
    const shipCost = shipData.shipment_cost.amount.toFixed(2)
    setShipCost(shipCost)
  }, [])

  function handlePayment(){
    alert("payment successfull ✅")
    
    localStorage.setItem("cart", JSON.stringify([]))
    setCartItems([])
  }

 const totalAmount = Number(cartItems.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0)

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">How would you like to get your order?</h2>
            <p className="text-sm text-gray-500">
              Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the
              shipping address.
            </p>
            <Button variant="outline" className="w-full justify-start gap-4 rounded-xl border-2 py-6">
              <div className="h-6 w-6 rounded-full border-2" />
              Deliver It
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">Enter your name and address:</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="First Name" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Last Name" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 1" />
                <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 2" />
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Address Line 3" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input className="rounded-md py-6" placeholder="Postal Code" />
                <Input className="rounded-md py-6" placeholder="Locality" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="rounded-md py-6">
                    <SelectValue placeholder="State/Territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectContent>
                </Select>
                <Input className="rounded-md py-6" placeholder="India" disabled />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="save-address" />
                <Label htmlFor="save-address">Save this address to my profile</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="preferred-address" />
                <Label htmlFor="preferred-address">Make this my preferred address</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">What's your contact information?</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Email" type="email" />
                <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
              </div>
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="Phone Number" type="tel" />
                <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">What's your PAN?</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input className="rounded-md py-6" placeholder="PAN" />
                <p className="text-xs text-gray-500">
                  Enter your PAN to enable payment with UPI, Net Banking or local card methods
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="save-pan" />
                <Label htmlFor="save-pan" className="text-sm text-gray-500">
                  Save PAN details to Nike Profile
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm text-gray-500">
                I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and
                Cookie Policy. eShopWorld is a trusted Nike partner.
              </Label>
            </div>
            <Button className="w-full rounded-full py-6" disabled>
              Continue
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <Card className="h-fit p-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>₹ {cartItems.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>{shipCost ? "₹ " + shipCost : "Free"}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹ {totalAmount}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                (The total reflects the price of your order, including all duties and taxes)
              </p>
            </div>

            <div className="space-y-4 pt-6">
            {cartItems.map((item: ICart, index: number)=>{return (
                <div className="flex gap-4 relative" key={index}>
                <Image
                  src={item.image}
                  alt="nike  shoes"
                  width={80}
                  height={80}
                />
                <div className="w-full space-y-1">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                  <p className="text-sm text-gray-500">₹ {item.price * item.quantity}</p>
                </div>
              </div>
              )})}
              <h3 className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
              
              
                    <div >
                     <Button className="w-full" onClick={handlePayment}>Let's Pay</Button>
                     </div>
            </div>
          </div>
        </Card>
        
      </div>
    </div>
  )
}

