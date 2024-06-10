export function UserCard({ name, age, phoneNumber, address }) {
    return (
        <>
            <div className="card">
                <h2 className="name">{name}</h2>
                <div className="body">
                    <div className="label">age</div>
                    <div>{age}</div>
                    <div className="label">phone</div>
                    <div>{phoneNumber}</div>
                    <div className="label">adress</div>
                    <div>{address}</div>
                </div>
            </div>
        </>
    )
}
