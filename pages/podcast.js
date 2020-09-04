import Back from '../components/Back'
import InfoPodcast from '../components/InfoPodcast.jsx'
import Reproductor from '../components/Reproductor'
export default class extends React.Component{

    static async getInitialProps({query}){
        let idPodcast = query.id

        let reqPodcast = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)
        let dataPodcast = await reqPodcast.json()
        let podcast = dataPodcast.body.audio_clip

        return {podcast}
    }
    render(){
        const {podcast} =this.props

        return(
            <div className="contenedor">
                <Back podcast={podcast} />
                <InfoPodcast podcast= {podcast} />
                <Reproductor podcast= {podcast} />

                <style jsx>{`
                    :global(body){
                        margin: 0px;
                    }
                    .contenedor{
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        background: linear-gradient(90deg, #1c3643 0, #273b47 25%, #1e5372);
                        font-family: system-ui;
                        color: #fff;
                    }
                `} 
                </style>
            </div>
        )
    }
}