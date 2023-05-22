import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import './HomePage.scss';
import HandBook from './Section/HandBook';
import OutStandingDoctor from './Section/OutStandingDoctor';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

    render() {
        let settings = {

            dots: false,
            infinite: false,//vô hạn : đẩy ảnh về bên phải
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow:<SampleNextArrow/>,
            // prevArrow:<SamplePrevArrow/>,
        };
        return (
            <div>
                <HomeHeader />
                <Specialty
                    settings={settings} />
                <MedicalFacility
                    settings={settings} />
                <OutStandingDoctor
                    settings={settings}
                />
                <HandBook
                    settings={settings}

                />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
