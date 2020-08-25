import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import {Row,Col} from 'react-bootstrap'

const Profile = ({ profile_pic, name, description, category }) => {
    return (
        <div className="container profile">

            <Row>
            <Col sm={10} xs={10} md={6}>
            <div className="profile__image">
                <img src={profile_pic} alt='' />

            </div>
            </Col>
           

           
            <Col sm={10} xs={10} lg={6}>

            <div className="profile__text">
                <div className="profile__text__name">
                    <h3>{name}</h3>
                        &nbsp;&nbsp;
                        <FavoriteBorderIcon />
                </div>
                <p>{description}</p>
                <div className="profile__about">
                    <p className="about">{category[0]}</p>
                        &nbsp;&nbsp;
                        <p className="about">{category[1]}</p>
                </div>

                <div className="profile__review">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    &nbsp;
                    <p>All Reviews(0)</p>
                </div>

            </div>
            </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = (state) => ({
    profile_pic: state.detail.profile_pic,
    name: state.detail.name,
    description: state.detail.description,
    category: state.detail.category,
})

export default connect(mapStateToProps)(Profile)
