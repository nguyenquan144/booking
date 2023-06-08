import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';//thu vien react change language
class About extends Component {


    render() {

        return (
            <div className=' section-share section-about'>
                <div className='"section-about-header'>
                    Truyền thông nói về Medicare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/Y3MgE03prjg"
                            title="Viện Huyết học - Truyền máu TW ra mắt tổng đài đặt lịch khám chữa bệnh || Cafe sáng VTV3 ||"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                        </iframe>
                        {/* <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe> */}
                    </div>
                    <div className='content-right'>
                        <p>Chào mừng đến với Medicare - đối tác chăm sóc sức khỏe của bạn!

                            Medicare - đặt lịch khám bệnh dễ dàng, nhanh chóng và chất lượng. Với ứng dụng di động và trang web tiện lợi, bạn có thể tìm kiếm, xem lịch trình và đặt hẹn với các bác sĩ và chuyên gia y tế. Chúng tôi cam kết mang lại sự thuận tiện và an tâm cho quá trình chăm sóc sức khỏe của bạn. Liên hệ với chúng tôi ngay hôm nay!

                            Medicare - Chăm sóc sức khỏe dễ dàng hơn bao giờ hết!
                        </p>

                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
