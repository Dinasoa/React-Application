export function SecondLink (props){
    const {label} = props ;
    return (
        <a className="nav-link" href="charts.html">
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            {label}
        </a>
    )
}