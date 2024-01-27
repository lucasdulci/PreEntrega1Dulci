
export const ReturnTemprano = ({ datos }) => {

    if (datos.length === 0) {
        return (
            <div>
                <h2>no hay datos que mostrar</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>practicando return temprano </h2>
            {
                datos.map((item) => (
                    <p key={item.nombre}>{item.nombre}</p>
                ))
            }
        </div>
    )
}
