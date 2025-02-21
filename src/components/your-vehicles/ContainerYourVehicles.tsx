import Image from "next/image"
import { ContentCard } from "../content-cards"
import { SelectYourVehicles } from "./SelectYourVehicles"
import { InfoContainerYourVehicles } from "./InfoContainerYourVehicles"

export const ContainerYourVehicles = () => {
  return (
    <ContentCard className="col-span-9 row-span-6">
        <div className="grid grid-cols-12">
            <SelectYourVehicles/>
            <div className="col-span-8">
            <Image src={'/spark.png'} width={1000} height={24} alt="car" className="w-full"/>
            </div>
            <InfoContainerYourVehicles/>
        </div>
    </ContentCard>
  )
}