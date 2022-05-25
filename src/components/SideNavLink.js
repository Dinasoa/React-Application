export function SideNavLink (props){
    const {label , target , controls , children}  = props ;
    return (
    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={controls}>
        {children}
        {label}
        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
    </a>
    )
}