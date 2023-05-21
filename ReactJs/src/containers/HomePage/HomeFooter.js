import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';//thu vien react change language
class HomeFooter extends Component {


    render() {

        return (
            <div className=' home-footer'>
                <p>&copy; 2023 quan david. more information
                    <a target='_blank' href='https://www.youtube.com/watch?v=FyDQljKtWnI&t=1s'>
                        &#8594; Click here&#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
