export default class Reproductor extends React.Component{
    render(){

        const {podcast} = this.props

        return(
            <React.Fragment>
                <audio controls >
                    <source src={podcast.urls.high_mp3} type="audio/mpeg"/>    
                </audio>
            </React.Fragment>
        )
    }
}