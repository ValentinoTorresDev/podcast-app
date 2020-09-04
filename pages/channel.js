import Layout from '../components/Layout'
import Series from '../components/Series'
import PodcastListWithClick from '../components/PodcastListWithClick'
import Error from 'next/error'
import PodcastPlayer from '../components/PodcastPlayer'

export default class extends React.Component{

    state = {
        openPodcast: null,
    }

    static async getInitialProps({query , res}){

        let idChannel = query.id

        try {

            let[reqChannel,reqAudios,reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
            ])

            if(reqChannel.status  >= 400){
                res.statusCode = reqChannel.status
                return {channel: null,audios: null, series: null, statusCode: reqChannel.status}
            }
    
            let dataChannel = await reqChannel.json()
            let channel = dataChannel.body.channel
    
            let dataAudios = await reqAudios.json()
            let audios = dataAudios.body.audio_clips
    
            let dataSeries = await reqSeries.json()
            let series = dataSeries.body.channels
    
            return{channel,audios,series, statusCode: 200}

        } catch (e) {
            return{channel: null,audios: null, series: null, statusCode: 503}
        }  
    }

    openPodcast = (event,podcast) => {
        event.preventDefault()
        this.setState({ 
            openPodcast: podcast,
        })
    }

    closePodcast = (event) => {
        event.preventDefault()
        this.setState({ 
            openPodcast: null,
        })
    }

    render(){
        const {channel, audios, series,statusCode} = this.props
        const {openPodcast} = this.state
        if(statusCode !== 200){
            return <Error statusCode={statusCode}/>
        }

        return(
            <Layout title={channel.title}>
                <h1>{channel.title}</h1>
                {openPodcast && <div className="modal"><PodcastPlayer clip={openPodcast} onClose = {this.closePodcast} /></div>}
                <Series series = {series} />
                <PodcastListWithClick podcasts = {audios} onClickPodcast={this.openPodcast} />

                <style jsx>{`
                    .modal{
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 99999;
                    }
                `}</style>
            </Layout>
        )       
    }
}