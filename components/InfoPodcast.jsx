export default class InfoPodcast extends React.Component{
    render(){
        const {podcast} = this.props
        return(
            <React.Fragment>
                <img src={podcast.urls.image} alt=""/>
                <h1>{podcast.title}</h1>
                <h3>{podcast.channel.title}</h3>
                
                <style jsx>{`
                    img{
                        max-width: 300px;
                    }
                    .contenedor h1{
                        font-size: 32px;
                        margin: 0;
                        padding: 20px 0 10px 0;
                        font-weight: 600;
                    }
                    h3{
                        font-size: 18;
                        font-weight: 300;
                        margin: 0;
                        padding-bottom: 20px;
                    }
                `} </style>
            </React.Fragment>
        )
    }
}