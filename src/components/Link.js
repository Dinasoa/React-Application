export function Link (props){
    const {label} = props ;
    return(
        <li>
          <a class="dropdown-item" href="#!">
            {label}
          </a>
        </li>
    )
}