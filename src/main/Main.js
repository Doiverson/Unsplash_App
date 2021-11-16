import React from "react";
import axios from "../api/axios";

import Fade from '@mui/material/Fade';
import Masonry from '@mui/lab/Masonry';


class Main extends React.Component {

    state = {
        photos: [],
    }

    componentDidMount() {
        axios.get('photos')
            .then(({data}) => {

                const items = data.map(x => ({
                    img: x.urls.regular,
                    title: x.urls.alt_description
                }))

                this.setState({ photos: items })
            })
    }

    render() {
        return (
            <Masonry columns={3} spacing={1}>
                {this.state.photos.map((item) => (
                    <Fade in={true} timeout={3000}>
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                        />
                    </Fade>
                ))}
            </Masonry>
        )
    }
}

export default Main;
