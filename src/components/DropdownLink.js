export function DropdownLink (props){
    const{label1 , label2} = props ;
    return(
    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
        <nav className="sb-sidenav-menu-nested nav">
            <a className="nav-link" href="layout-static.html">{label1}</a>
            <a className="nav-link" href="layout-sidenav-light.html">{label2}</a>
        </nav>
    </div>
        
    )
}