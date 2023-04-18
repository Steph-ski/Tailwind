import menu from '../images/menu.png'
import google2 from '../images/google2.png'
import NavItem from "../NavItem";

const Nav = () => {
    return (
        <div class="pt-4 border-b-2 border-current xl:border-none h-20 flex flex wrap items-center justify-between">
            <div class="flex flex-wrap items-center">
                <img class="p-4 xl:hidden" src={menu}/>
                <img class="xl:pl-10" src={google2}/>
                <NavItem text="Program"/>
                <NavItem text="Products"/>
                <NavItem text="Community"/>
                <NavItem text="Learning Lab"/>
                <NavItem text="About"/>
            </div>
            <div class="invisible lg:visible pr-20">
                <p>English</p>
            </div>
        </div>
    )
}


export default Nav