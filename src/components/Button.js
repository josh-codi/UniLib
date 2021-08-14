import {React, Component} from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline',

]
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`btn ${checkbuttonStyle} ${checkButtonSize}`} onclick={onClick} type={type}>
            {children}
        </button>
        

    )
}








































// class Button extends Component {
    
//     // state={
//     //     click: false
//     // }
//     render(){
//     return (
//         <div>
//             {/* <button onClick={()=>this.setState({click: !this.state.click})}>{this.state.click ? "Man" : "Woman"}</button> */}
//         </div>
//     )
// }
// }

// export default Button
