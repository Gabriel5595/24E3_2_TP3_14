import styles from "./profileCard.module.css"

export default function ProfileCard(props) {
    return (
        <div className={styles.profileCardContainer}>
            <h1>Profile</h1>
            <img src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" alt="Img placeholder" />
            <h3>{props.name}</h3>
            <p>{props.age ? `Idade: ${props.age}` : "Idade não disponível"}</p>
        </div>
    )
}