import {Link} from '../routes'
import slug from '../helpers/slug'

export default class ChannelGrid extends React.Component{
    render(){
        const {channels} = this.props
        return(
            <div className="channels">
                {
                    channels.map((channel)=>(
                        <Link route= "channel" params={{
                            slug: slug(channel.title),
                            id: channel.id,
                        }}>
                            <a className="channel">
                                <img src={channel.urls.logo_image.original} alt=""/>
                                <h2>{channel.title}</h2>
                            </a>
                        </Link>
                    ))
                }
                <style jsx>{`
                    header{
                        color:#fff;
                        background: #8576ca;
                        padding: 15px;
                        text-align:center;
                    }
                    .channels{
                        display: grid;
                        grid-gap: 20px;
                        padding: 20px;
                        grid-template-columns: repeat(auto-fill, minmax(160px,1fr))
                    }
                    .channel{
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0, 0.15)
                        margin-bottom: 20px;
                    }
                    .channel img{
                        width: 100%;
                    }
                    h2{
                        padding: 6px;
                        font-size: 18px;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                `}</style>
            </div>
        )
    }
}