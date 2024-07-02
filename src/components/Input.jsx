/* eslint-disable react/prop-types */
const Input = ({ tipo, nombre, refVali, cambio, valor, clase, signo}) => {
    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    {signo}
                </span>
                <input
                    type={tipo} placeholder={nombre} ref={refVali} onChange={cambio} value={valor} className={clase}
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                />
            </div>
        </>
    )
}
export default Input


