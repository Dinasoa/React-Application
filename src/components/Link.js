export function Link (props){
    const{className , label , href} = props ;
    return (
        <li><a className={className} href={href}>{label}</a></li>
    )
}