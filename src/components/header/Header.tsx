import logo from "../../images/logo.png"
import Image from "next/image"

const header = () => {
  return (
    <div className="w-full h-20 ">
        <div>
            <Image className="" src={logo} alt="logoImg"/>
        </div>
    </div>
  )
}

export default header