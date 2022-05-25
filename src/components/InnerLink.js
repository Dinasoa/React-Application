export function InnerLink (props){
    const{id , href1 , href2 , href3 , label1 , label2} = props ;
    return(
    <div class="collapse" id={id} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
        <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href={href1}>{label1}</a>
            <a class="nav-link" href={href2}>{label2}</a>
            <a class="nav-link" href={href3}>{label2}</a>
        </nav>
    </div>
    )
}