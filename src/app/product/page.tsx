
import FooterComponent from "@/components/Footer/FooterComponent"
import NavbarComponent from "@/components/Navbar/NavbarComponent"
import ProductList from "./Product-List"
import AddToCartComponent from "@/components/Cart/AddToCartComponent"
import LiftingStateComponent from "@/components/State/LiftingStateComponent"



export default function page() {
  return (
    <div className="min-h-screen">

        <NavbarComponent />

         {/* <AddToCartComponent /> */}

         <LiftingStateComponent />

        <ProductList/>

        <FooterComponent />

       

    </div>
  )
}
