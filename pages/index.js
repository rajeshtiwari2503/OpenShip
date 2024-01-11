import Image from 'next/image'
import { Inter } from 'next/font/google'
import OpenShipCal from '@/components/OpenShipCal'
import OpenShipFooter from '@/components/OpenShipFooter'
import WareHouseOnsite from '@/components/WareHouseOnsite'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <main
      className=" "
    >
      <OpenShipCal />
      <WareHouseOnsite />
      <OpenShipFooter />
    </main>
  )
}
