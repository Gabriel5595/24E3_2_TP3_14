import ProfileCard from "../../components/ProfileCard"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div>
            <ProfileCard name="Gabriel" age={30}/>
            <ProfileCard name="Maria"/>

        </div>
    )
}