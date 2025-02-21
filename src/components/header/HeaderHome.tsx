import { IoNotifications, IoSettingsSharp } from "react-icons/io5"
import Image from "next/image"
import { Button } from "../ui"
import { NavbarHome } from "./NavbarHome"

export const HeaderHome = () => {
  return (
    <header className="w-full flex justify-center h-24">
        <div className="flex justify-between w-full md:w-4/5">
            <Image src={'/logo.svg'} width={160} height={25} alt="logo"/>
            <div className="flex items-center">
                <NavbarHome/>
                <Button className="ml-4">
                    <IoSettingsSharp size={20}/>
                </Button>
                <Button className="ml-4">
                    <IoNotifications size={20}/>
                </Button>
                <Image src={'/avatar.jpg'} width={50} height={50} className="rounded-full ml-4" alt="avatar"/>
            </div>
        </div>
    </header>
  )
}