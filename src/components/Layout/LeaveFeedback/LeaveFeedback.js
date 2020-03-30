import React from 'react';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthenticatedStatus } from '../../../store/actions/actionCreators';

class LeaveFeedback extends React.Component{
    componentDidMount(){
        this.props.setAuthenticatedStatus();
    }

    render(){
        const {isAuth} = this.props;
        return(
            isAuth?<FeedbackForm/>:<Redirect to='/authentication'/>
        )
    }
};

const mapStateToProps = (state)=>({
    isAuth:state.isAuth
});

const mapDispatchToProps = (dispatch)=>({
    setAuthenticatedStatus:()=>dispatch(setAuthenticatedStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveFeedback);