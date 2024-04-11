import data from "./Friends";

export default function Card() {
    return data.map((item, index) => (
        <div key={index} className="card">
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
            <h3>
                Pets: {item.pets.map((pet, index) => (
                    <div key={index}>
                        <li>{pet.name}</li>
                        <li>{pet.breed}</li>
                    </div>
                ))}
            </h3>
        </div>
    ));
}
