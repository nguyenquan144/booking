import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
import { LANGUAGES } from '../../../utils'
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';


class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let allDays = this.getArrDays(this.props.language);
            this.setState({
                allDays: allDays
            })
        }
    }
    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor } = this.state;
        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM </div>
                    <div className='name-clinic'>Phòng khám đa khoa xương khớp</div>
                    <div className='detail-address'>17 Hàng cót - Hà Nội</div>

                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false &&
                        <div className='short-infor'>
                            GIÁ KHÁM 300.000đ.
                            <span onClick={() => this.showHideDetailInfor(true)}>

                                Xem chi tiết
                            </span>
                        </div>
                    }

                    {isShowDetailInfor === true &&

                        <>
                            <div className='title-price'>Giá Khám: .</div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>Giá Khám</span>
                                    <span className='right'> 350.000</span>
                                </div>
                                <div className='note'>
                                    Được ưu tiên khám trước khi đặt lịch khám qua medicare
                                </div>
                            </div>
                            <div className='payment'>
                                Người bệnh có thể thanh toán bằng quẹt thet hoặc tiền mặt
                            </div>
                            <div className='hide-price'>
                                <span onClick={() => this.showHideDetailInfor(false)}>
                                    Ẩn bảng giá

                                </span>
                            </div>
                        </>

                    }

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
