export function BreadCrumb(props){
    const{label1  , label2 } = props ;
    return(
    <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><a href="index.html" ></a>{label1}</li>
        <li className="breadcrumb-item active">{label2}</li>
    </ol>
    )
}