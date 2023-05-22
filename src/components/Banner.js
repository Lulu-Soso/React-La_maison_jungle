import '../styles/Banner.css'

function Banner({ children }) {
    return <div className='lmj-banner'>{children}</div>
}

export default Banner

// Vous remarquez la notation  export default   ?
//     Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser
// les accolades au moment de l'import.
