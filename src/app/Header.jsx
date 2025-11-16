import Link from "next/link"


const Header = () => {
  return(
    <div style={{display:"flex",gap:'20px',height:'100px', marginTop:'50px',marginLeft:'20px'}}>
        <Link href="../">
            <div>Home</div>
        </Link>
        <Link href="/products/mobiles">
            <div>Mobiles</div>
        </Link>
        <Link href="/products/laptops">
            <div>Laptops</div>
        </Link>
    </div>

  )
}
export default Header